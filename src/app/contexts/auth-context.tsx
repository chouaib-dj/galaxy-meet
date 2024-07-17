"use client";

import { createClient } from "@/utils/supabase/client";
import { ReactNode, createContext, useEffect, useState } from "react";

export const AuthContext = createContext<{ user: UserProps; loading: boolean }>(
  { user: null, loading: true }
);
AuthContext.displayName = "Auth";

export type UserProps = {
  id: string;
  fullName: string;
} | null;

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProps>(null);
  const [loading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (data?.session?.user) {
          const { data: userData, error: userError } = await supabase
            .from("profile")
            .select("first_name, last_name")
            .eq("id", data.session.user.id)
            .single();
          if (userError) throw userError;
          if (userData) {
            setUser({
              id: data.session.user.id,
              fullName: `${userData.first_name} ${userData.last_name}`,
            });
          }
        }
      } catch (error: any) {
        console.error("Error fetching user:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
