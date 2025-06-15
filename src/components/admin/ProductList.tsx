
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EditProductModal from "./EditProductModal";
import { Edit } from "lucide-react";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [editProduct, setEditProduct] = useState<any | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    setProducts(data || []);
  };

  const handleEditClick = (product: any) => {
    setEditProduct(product);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setEditProduct(null);
  };

  const handleUpdated = () => {
    fetchProducts();
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "PASS":
        return "bg-green-500 text-white";
      case "FAIL":
        return "bg-red-500 text-white";
      case "EXPIRED":
        return "bg-amber-500 text-white";
      case "GOLD":
        return "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold";
      default:
        return "bg-gray-500 text-white";
    }
  };

  if (!products.length) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm max-w-5xl mx-auto mb-12">
      <h3 className="font-medium text-lg mb-4">Recently Added Products ({products.length} total)</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-2">Name</th>
              <th className="text-left py-2 px-2">Brand</th>
              <th className="text-left py-2 px-2">Category</th>
              <th className="text-left py-2 px-2">Status</th>
              <th className="text-left py-2 px-2">Date</th>
              <th className="text-left py-2 px-2">Price</th>
              <th className="text-center py-2 px-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-t hover:bg-gray-50">
                <td className="py-2 px-2 max-w-xs">
                  <div className="truncate" title={p.name}>{p.name}</div>
                </td>
                <td className="py-2 px-2">{p.brand}</td>
                <td className="py-2 px-2">{p.category}</td>
                <td className="py-2 px-2">
                  <Badge className={getStatusBadgeClass(p.status)}>
                    {p.status}
                  </Badge>
                </td>
                <td className="py-2 px-2">{p.date || 'N/A'}</td>
                <td className="py-2 px-2">{p.price ? `$${p.price}` : 'N/A'}</td>
                <td className="py-2 px-2 text-center">
                  <Button
                    size="sm"
                    variant="ghost"
                    title="Edit Product"
                    onClick={() => handleEditClick(p)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editProduct && (
        <EditProductModal
          product={editProduct}
          open={modalOpen}
          onClose={handleModalClose}
          onUpdated={handleUpdated}
        />
      )}
    </div>
  );
}
