
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setProducts(data || []));
  }, []);

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
