
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

  if (!products.length) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm max-w-3xl mx-auto mb-12">
      <h3 className="font-medium text-lg mb-2">Recently Added Products</h3>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id} className="border-t last:border-b">
              <td>{p.name}</td>
              <td>{p.brand}</td>
              <td>{p.category}</td>
              <td>
                <Badge className={p.status === "PASS"
                  ? "bg-green-500 text-white"
                  : p.status === "FAIL"
                    ? "bg-red-500 text-white"
                    : "bg-amber-500 text-white"}>
                  {p.status}
                </Badge>
              </td>
              <td>
                <Button
                  size="sm"
                  variant="ghost"
                  title="Edit Product"
                  onClick={() => handleEditClick(p)}
                >
                  <Edit className="w-5 h-5" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
