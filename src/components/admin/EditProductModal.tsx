import React, { useRef, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { categories as allCategories } from "@/data/products";
import { supabase } from "@/integrations/supabase/client";

interface EditProductModalProps {
  product: any;
  open: boolean;
  onClose: () => void;
  onUpdated: () => void;
}

export default function EditProductModal({ product, open, onClose, onUpdated }: EditProductModalProps) {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(product.image_url || null);
  const [pdfs, setPdfs] = useState<File[]>([]);
  const [existingPdfs, setExistingPdfs] = useState<any[]>([]);
  const imageRef = useRef<HTMLInputElement>(null);
  const pdfRef = useRef<HTMLInputElement>(null);

  const categoryList = allCategories.filter((cat: string) => cat !== "All Categories");

  const [fields, setFields] = useState({
    name: product.name || "",
    brand: product.brand || "",
    category: product.category || "",
    status: product.status || "PASS",
    date: product.date || "",
    description: product.description || "",
    rating: product.rating ? String(product.rating) : "",
    affiliateLink: product.affiliate_link || "",
    productWebsiteLink: product.product_website_link || "",
    price: product.price ? String(product.price) : "",
    amazonPrice: product.amazon_price ? String(product.amazon_price) : "",
    websitePrice: product.website_price ? String(product.website_price) : ""
  });

  const [customCategoryMode, setCustomCategoryMode] = useState(false);
  const [customCategoryInput, setCustomCategoryInput] = useState("");

  useEffect(() => {
    // Reset form when product changes
    setFields({
      name: product.name || "",
      brand: product.brand || "",
      category: product.category || "",
      status: product.status || "PASS",
      date: product.date || "",
      description: product.description || "",
      rating: product.rating ? String(product.rating) : "",
      affiliateLink: product.affiliate_link || "",
      productWebsiteLink: product.product_website_link || "",
      price: product.price ? String(product.price) : "",
      amazonPrice: product.amazon_price ? String(product.amazon_price) : "",
      websitePrice: product.website_price ? String(product.website_price) : ""
    });
    setCustomCategoryInput("");
    setCustomCategoryMode(false);
    setImagePreview(product.image_url || null);
    setPdfs([]);
    // Fetch PDFs
    supabase.from("product_pdfs")
      .select("*")
      .eq("product_id", product.id)
      .then(({ data }) => setExistingPdfs(data || []));
  }, [product]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImagePreview(URL.createObjectURL(file));
    else setImagePreview(product.image_url || null);
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setPdfs(Array.from(e.target.files));
  };

  const handleDeletePdf = async (pdfId: string) => {
    const confirmed = window.confirm("Delete this PDF?");
    if (!confirmed) return;
    await supabase.from("product_pdfs").delete().eq("id", pdfId);
    setExistingPdfs(pdfs => pdfs.filter(p => p.id !== pdfId));
    toast({ title: "PDF deleted" });
  };

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Use selected or custom category
    const categoryToUse = customCategoryMode
      ? customCategoryInput.trim()
      : fields.category.trim();

    if (!categoryToUse) {
      toast({ title: "Category required", description: "Please choose a category or add a new one." });
      setLoading(false);
      return;
    }

    // 1. Upload image if new
    let image_url = product.image_url || "";
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

    // 2. Update product in DB
    const { error: updateErr } = await supabase
      .from("products")
      .update({
        name: fields.name,
        brand: fields.brand,
        category: categoryToUse,
        status: fields.status,
        date: fields.date ? fields.date : null,
        description: fields.description,
        rating: fields.rating ? Number(fields.rating) : null,
        image_url,
        affiliate_link: fields.affiliateLink || null,
        product_website_link: fields.productWebsiteLink || null,
        price: fields.price ? Number(fields.price) : null,
        amazon_price: fields.amazonPrice ? Number(fields.amazonPrice) : null,
        website_price: fields.websitePrice ? Number(fields.websitePrice) : null,
      })
      .eq("id", product.id);

    if (updateErr) {
      toast({ title: "Failed to update product", description: updateErr.message });
      setLoading(false);
      return;
    }

    // 3. Upload PDFs
    if (pdfs.length > 0) {
      for (let pdf of pdfs) {
        const pdfPath = `products/${product.id}/${Date.now()}-${pdf.name}`;
        const { data: pdfData, error: pdfErr } = await supabase.storage
          .from("product-images")
          .upload(pdfPath, pdf, { upsert: true });
        if (pdfErr) {
          toast({ title: "PDF Upload Error", description: pdfErr.message });
          continue;
        }
        await supabase.from("product_pdfs").insert([
          {
            product_id: product.id,
            pdf_name: pdf.name,
            pdf_url: supabase.storage.from("product-images").getPublicUrl(pdfPath).data.publicUrl,
            pdf_type: "lab_report",
          }
        ]);
      }
    }

    toast({ title: "Product Updated!", description: "Product details have been updated." });
    setLoading(false);
    onUpdated();
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={v => { if (!v) onClose(); }}>
      <DialogContent>
        {/* Make the modal content scrollable if it’s too tall */}
        <div className="max-h-[70vh] md:max-h-[75vh] overflow-y-auto pr-2">
          <form onSubmit={handleUpdate} className="space-y-3">
            <h2 className="text-lg font-bold mb-2">Edit Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                {customCategoryMode ? (
                  <div className="flex gap-2">
                    <Input
                      value={customCategoryInput}
                      onChange={e => setCustomCategoryInput(e.target.value)}
                      placeholder="Add new category"
                      required
                    />
                    <Button
                      variant="outline"
                      type="button"
                      className="px-3 py-2"
                      onClick={() => {
                        setCustomCategoryMode(false);
                        setCustomCategoryInput("");
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Select
                    value={fields.category}
                    onValueChange={val => {
                      if (val === "__add_new") {
                        setCustomCategoryMode(true);
                        setCustomCategoryInput("");
                        setFields(x => ({ ...x, category: "" }));
                      } else {
                        setFields(x => ({ ...x, category: val }));
                      }
                    }}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryList.map((cat: string) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                      <SelectItem value="__add_new" className="text-emerald-600">+ Add new category...</SelectItem>
                    </SelectContent>
                  </Select>
                )}
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
                <label className="block mb-1 font-medium">Amazon Price</label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={fields.amazonPrice}
                  onChange={e => setFields(x => ({ ...x, amazonPrice: e.target.value }))}
                  placeholder="e.g. 25.50"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Website Price</label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={fields.websitePrice}
                  onChange={e => setFields(x => ({ ...x, websitePrice: e.target.value }))}
                  placeholder="e.g. 21.99"
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
                {(pdfs.length > 0 || existingPdfs.length > 0) && (
                  <ul className="mt-2 text-sm space-y-1">
                    {existingPdfs.map(pdf =>
                      <li key={pdf.id}>
                        <a className="text-blue-600 underline" href={pdf.pdf_url} target="_blank" rel="noopener noreferrer">{pdf.pdf_name}</a>
                        <Button size="sm" className="ml-2" type="button" variant="ghost" onClick={() => handleDeletePdf(pdf.id)}>Delete</Button>
                      </li>
                    )}
                    {pdfs.map(pdf =>
                      <li key={pdf.name} className="italic text-emerald-800">
                        {pdf.name} (to be uploaded)
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </div>
            <Button className="mt-2" type="submit" disabled={loading}>
              {loading ? "Saving..." : "Update Product"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
