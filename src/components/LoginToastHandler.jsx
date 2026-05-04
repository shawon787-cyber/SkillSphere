"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

export default function LoginToastHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const loginSuccess = searchParams?.get("login") === "success";
    const signupSuccess = searchParams?.get("signup") === "success";

    if (loginSuccess || signupSuccess) {
      toast.success(loginSuccess ? "Login successful 🎉" : "Signup successful 🎉");
      const params = new URLSearchParams(searchParams.toString());
      params.delete("login");
      params.delete("signup");
      const path = window.location.pathname;
      const nextUrl = params.toString() ? `${path}?${params.toString()}` : path;
      router.replace(nextUrl);
    }
  }, [searchParams, router]);

  return null;
}
