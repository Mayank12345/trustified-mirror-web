
import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

// NOTE: This is a DEMO/ADMIN tool. Remove after use for security!

export default function ProductFieldQuickUpdater() {
  const [productId, setProductId] = useState("1");
  const [affiliateLink, setAffiliateLink] = useState("");
  const [productWebsiteLink, setProductWebsiteLink] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase
      .from("products")
      .update({
        affiliate_link: affiliateLink || null,
        product_website_link: productWebsiteLink || null,
        price: price ? Number(price) : null,
      })
      .eq("id", Number(productId));
    setLoading(false);
    if (error) {
      toast({
        title: "Error updating product",
        description: error.message,
      });
    } else {
      toast({
        title: "Product updated",
        description: "The fields were updated successfully.",
      });
    }
  };

  return (
    <form className="bg-orange-50 p-4 border border-orange-300 rounded mb-6" onSubmit={handleUpdate}>
      <h3 className="font-semibold mb-3 text-orange-700">Quick Product Field Updater</h3>
      <div className="flex flex-col sm:flex-row gap-2 items-center">
        <Input
          placeholder="Product ID"
          value={productId}
          onChange={e => setProductId(e.target.value)}
          className="sm:w-20"
          required
        />
        <Input
          placeholder="Affiliate Link"
          value={affiliateLink}
          onChange={e => setAffiliateLink(e.target.value)}
        />
        <Input
          placeholder="Product Website Link"
          value={productWebsiteLink}
          onChange={e => setProductWebsiteLink(e.target.value)}
        />
        <Input
          type="number"
          min="0"
          step="0.01"
          placeholder="Price (USD)"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </Button>
      </div>
      <div className="mt-2 text-xs text-orange-700">⚠️ Remove this tool after you are done for security.</div>
    </form>
  );
}
