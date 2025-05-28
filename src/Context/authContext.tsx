"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { supabase } from "@/utils/superbaseAdmin";

interface User {
  id: number;
  name: string;
  email: string;
  is_admin?: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  console.log(user, "user");

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error || !session?.access_token) {
          Cookies.remove("supabase-auth-token");
          setUser(null);
        } else {
          const { data: userData, error: userError } = await supabase
            .from("users")
            .select("id, name, email, is_admin") // Include is_admin in select
            .eq("email", session.user.email)
            .single();

          if (userError) {
            throw userError;
          }

          setUser({
            id: userData.id,
            name: userData.name || session.user.user_metadata?.name || "User",
            email: userData.email || session.user.email || "",
            is_admin: userData.is_admin || false,
          });
          Cookies.set("supabase-auth-token", session.access_token, {
            expires: 7,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
          });
        }
      } catch (error) {
        console.error("Auth initialization failed:", error);
        Cookies.remove("supabase-auth-token");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.access_token) {
        Cookies.remove("supabase-auth-token");
        setUser(null);
      } else {
        supabase
          .from("users")
          .select("id, name, email, is_admin") // Include is_admin in select
          .eq("email", session.user.email)
          .single()
          .then(({ data, error }) => {
            if (error) throw error;
            setUser({
              id: data.id,
              name: data.name || session.user.user_metadata?.name || "User",
              email: data.email || session.user.email || "",
              is_admin: data.is_admin || false, // Set is_admin
            });
            Cookies.set("supabase-auth-token", session.access_token, {
              expires: 7,
              secure: process.env.NODE_ENV === "production",
              sameSite: "strict",
            });
          });
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
        throw error;
      }

      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("id, name, email, is_admin, status")
        .eq("email", email)
        .single();

      if (userError) {
        toast.error("User data fetch failed.");
        throw userError;
      }

      if (!userData?.status) {
        toast.error("Your account is not active.");
        await supabase.auth.signOut();
        throw new Error("Inactive user");
      }

      if (!userData?.is_admin) {
        toast.error("Access denied. Admin privileges required.");
        await supabase.auth.signOut();
        throw new Error("User is not an admin");
      }

      setUser({
        id: userData.id,
        name: userData.name || data.user.user_metadata?.name || "User",
        email: userData.email || data.user.email || "",
        is_admin: userData.is_admin || false, // Set is_admin
      });
      Cookies.set("supabase-auth-token", data.session.access_token, {
        expires: 7,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      toast.success("Successfully logged in!");
      router.push("/dashboard"); // Redirect to dashboard for admins
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        toast.error(error.message);
        throw error;
      }

      setUser(null);
      Cookies.remove("supabase-auth-token");
      toast.success("Successfully logged out!");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
