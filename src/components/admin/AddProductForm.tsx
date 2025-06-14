
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface AddProductFormProps {
  onAdd?: () => void;
}

export default function AddProductForm({ onAdd }: AddProductFormProps) {
  const [loading, setLoading] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [productId, setProductId] = useState<number | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [pdfs, setPdfs] = useState<File[]>([]);
  const imageRef = useRef<HTMLInputElement>(null);
  const pdfRef = useRef<HTMLInputElement>(null);

  const [fields, setFields] = useState({
    name: "",
    brand: "",
    category: "",
    status: "PASS",
    date: "",
    description: "",
    rating: "",
    affiliateLink: "",
    productWebsiteLink: "",
    price: ""
  });

  const reset = () => {
    setFields({
      name: "", brand: "", category: "", status: "PASS", date: "", description: "", rating: "",
      affiliateLink: "", productWebsiteLink: "", price: ""
    });
    setImagePreview(null);
    setPdfs([]);
    setProductId(null);
    if (imageRef.current) imageRef.current.value = "";
    if (pdfRef.current) pdfRef.current.value = "";
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPdfs(Array.from(e.target.files));
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setProductId(null);

    // 1. Upload image if provided
    let image_url = "";
    const imageFile = imageRef.current?.files?.[0];
    if (imageFile) {
      const { data, error } = await supabase.storage
        .from("product-images")
        .upload(
          `products/${Date.now()}-${imageFile.name}`,
          imageFile,
          { upsert: true, cacheControl: "3600" }
        );
      if (error) {
        toast({ title: "Upload failed", description: error.message });
        setLoading(false);
        return;
      }
      image_url = supabase.storage.from("product-images").getPublicUrl(data.path).data.publicUrl;
    }

    // 2. Insert product into DB
    const { data: newProduct, error: insertErr } = await supabase
      .from("products")
      .insert([
        {
          name: fields.name,
          brand: fields.brand,
          category: fields.category,
          status: fields.status,
          date: fields.date ? fields.date : null,
          description: fields.description,
          rating: fields.rating ? Number(fields.rating) : null,
          image_url,
          affiliate_link: fields.affiliateLink || null,
          product_website_link: fields.productWebsiteLink || null,
          price: fields.price ? Number(fields.price) : null,
        }
      ])
      .select()
      .single();

    if (insertErr) {
      toast({ title: "Failed to add product", description: insertErr.message });
      setLoading(false);
      return;
    }
    setProductId(newProduct.id);

    // 3. Upload PDFs
    if (pdfs.length > 0) {
      setPdfLoading(true);
      for (let pdf of pdfs) {
        const pdfPath = `products/${newProduct.id}/${Date.now()}-${pdf.name}`;
        const { data: pdfData, error: pdfErr } = await supabase.storage
          .from("product-images")
          .upload(pdfPath, pdf, { upsert: true });

        if (pdfErr) {
          toast({ title: "PDF Upload Error", description: pdfErr.message });
          continue;
        }

        // Insert into product_pdfs
        await supabase.from("product_pdfs").insert([
          {
            product_id: newProduct.id,
            pdf_name: pdf.name,
            pdf_url: supabase.storage.from("product-images").getPublicUrl(pdfPath).data.publicUrl,
            pdf_type: "lab_report",
          }
        ]);
      }
      setPdfLoading(false);
    }

    toast({ title: "Product Added!", description: "Product successfully added." });
    reset();
    setLoading(false);
    if (onAdd) onAdd();
  }

  return (
    <form className="bg-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto mb-8" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Add a New Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <Input value={fields.name} onChange={e => setFields(x => ({ ...x, name: e.target.value }))} required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Brand</label>
          <Input value={fields.brand} onChange={e => setFields(x => ({ ...x, brand: e.target.value }))} required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <Input value={fields.category} onChange={e => setFields(x => ({ ...x, category: e.target.value }))} required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            className="rounded border w-full py-2 px-2"
            value={fields.status}
            onChange={e => setFields(x => ({ ...x, status: e.target.value as any }))}
          >
            <option value="PASS">PASS</option>
            <option value="FAIL">FAIL</option>
            <option value="EXPIRED">EXPIRED</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Rating</label>
          <Input
            min={0}
            max={5}
            step={0.1}
            type="number"
            value={fields.rating}
            onChange={e => setFields(x => ({ ...x, rating: e.target.value }))}
            placeholder="e.g. 4.5"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Certified Date</label>
          <Input
            type="date"
            value={fields.date}
            onChange={e => setFields(x => ({ ...x, date: e.target.value }))}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Price (USD)</label>
          <Input
            type="number"
            min="0"
            step="0.01"
            value={fields.price}
            onChange={e => setFields(x => ({ ...x, price: e.target.value }))}
            placeholder="e.g. 29.99"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Affiliate Link (Amazon etc.)</label>
          <Input
            type="url"
            value={fields.affiliateLink}
            onChange={e => setFields(x => ({ ...x, affiliateLink: e.target.value }))}
            placeholder="https://amazon.com/..."
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Product Website Link</label>
          <Input
            type="url"
            value={fields.productWebsiteLink}
            onChange={e => setFields(x => ({ ...x, productWebsiteLink: e.target.value }))}
            placeholder="https://brand.com/product"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            className="border rounded w-full p-2"
            rows={2}
            value={fields.description}
            onChange={e => setFields(x => ({ ...x, description: e.target.value }))}
          />
        </div>
        <div className="md:col-span-1">
          <label className="block mb-1 font-medium">Image</label>
          <Input type="file" accept="image/*" ref={imageRef} onChange={handleImageChange} />
          {imagePreview && <img src={imagePreview} alt="preview" className="mt-2 rounded max-h-24" />}
        </div>
        <div className="md:col-span-1">
          <label className="block mb-1 font-medium">Lab Report PDF(s)</label>
          <Input type="file" accept="application/pdf" multiple ref={pdfRef} onChange={handlePdfChange} />
          {pdfs.length > 0 && (
            <ul className="mt-2 text-sm">{pdfs.map(pdf => <li key={pdf.name}>{pdf.name}</li>)}</ul>
          )}
        </div>
      </div>
      <Button className="mt-5" type="submit" disabled={loading || pdfLoading}>
        {loading ? "Saving..." : pdfLoading ? "Uploading PDFs..." : "Add Product"}
      </Button>
    </form>
  );
}
