import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { supabase } from "../supabaseClient";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadUser = async () => {
      const {
        data: { session: currentSession },
      } = await supabase.auth.getSession();

      if (!mounted) return;

      setSession(currentSession);

      if (!currentSession) {
        setProfile(null);
        setLoading(false);
        return;
      }

      const { data: userProfile, error } = await supabase
        .from("profiles")
        .select("id, email, display_name, role")
        .eq("id", currentSession.user.id)
        .maybeSingle();

      if (!mounted) return;

      if (error) {
        console.error("Failed to load user profile:", error);
        setProfile(null);
      } else {
        setProfile(userProfile);
      }

      setLoading(false);
    };

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadUser();
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--theme-background)] text-[var(--theme-text)]">
        <div className="text-sm text-[var(--theme-muted)]">
          Checking permissions...
        </div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  const allowedRoles = ["contributor", "admin", "owner"];

  if (!profile || !allowedRoles.includes(profile.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;