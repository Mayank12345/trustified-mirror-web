
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

// Simple admin authentication hook
export function useAdminAuth() {
  const [session, setSession] = useState<any | null>(null);
  const [admin, setAdmin] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    return () => { subscription.unsubscribe(); };
  }, []);

  useEffect(() => {
    const checkAdmin = async () => {
      if (session?.user) {
        console.log('Current user ID from auth:', session.user.id);
        console.log('Current user email from auth:', session.user.email);
        
        // Check what's in admin_users table
        const { data: allAdmins } = await supabase
          .from('admin_users')
          .select('id, email');
        console.log('All admin_users in database:', allAdmins);
        
        const { data } = await supabase
          .from('admin_users')
          .select('id, email')
          .eq('id', session.user.id)
          .single();
        console.log('Admin lookup result:', data);
        setAdmin(data);
      } else {
        setAdmin(null);
      }
    };
    checkAdmin();
  }, [session]);

  return { session, admin, loading };
}
