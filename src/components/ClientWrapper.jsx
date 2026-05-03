"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

export default function ClientWrapper({ children }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const login = searchParams.get("login");
    const signup = searchParams.get("signup");

    if (login === "success") {
      toast.success("Login successful 🎉");
    }

    if (signup === "success") {
      toast.success("Account created successfully 🎉");
    }

    // ❗ একটু delay দিয়ে URL clean করো
    if (login || signup) {
      setTimeout(() => {
        window.history.replaceState({}, "", "/");
      }, 500);
    }
  }, [searchParams]);

  return children;
}