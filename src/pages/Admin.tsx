import React, { useState } from "react";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import AddProductForm from "@/components/admin/AddProductForm";
import ProductList from "@/components/admin/ProductList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ProductFieldQuickUpdater from "@/components/admin/ProductFieldQuickUpdater";

// Main Admin Dashboard Page
export default function AdminPage() {
  const { admin, session, loading } = useAdminAuth();
  const [mode, setMode] = useState<"LOGIN" | "DASH">("LOGIN");
  const [email, setEmail] = useState(DEMO_ADMIN_EMAIL);
  const [password, setPassword] = useState("");

  // Quick login. (For demo/dev - replace with your flow)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email, password,
    });
    if (error) {
      toast({ title: "Login failed", description: error.message });
    } else {
      toast({ title: "Login success", description: "Welcome!" });
      setMode("DASH");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (!session || !admin) {
    return (
      <div className="min-h-screen flex items-center bg-gray-50">
        <form onSubmit={handleLogin} className="mx-auto bg-white p-8 rounded-xl shadow-sm flex flex-col w-96 gap-4">
          <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
          <Input placeholder="Email" autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          <Button className="mt-3" type="submit">Login</Button>
        </form>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        {/* QUICK FIELD UPDATE TOOL FOR DEMO/TESTING */}
        <ProductFieldQuickUpdater />
        <AddProductForm onAdd={() => {}} />
        <ProductList />
      </div>
    </div>
  );
}
