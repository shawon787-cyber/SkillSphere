
"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const imageInput = formData.get("image");

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: imageInput,
    });

    console.log("SIGNUP:", { data, error });

  
    if (error) {
      const msg = error.message?.toLowerCase();

      if (msg?.includes("already") || msg?.includes("exist")) {
        toast.error("Email already registered ❗");
      } else {
        toast.error(error.message || "Signup failed ❌");
      }
      return;
    }

    
    router.push("/?signup=success");
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#4e2ecf] via-[#a57aeb] to-[#f3e7d3]">

      <div className="w-96 p-6 bg-white rounded-xl shadow space-y-4">

        <h1 className="text-xl font-bold text-center">
          Create Account
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Your name"
            className="input input-bordered w-full"
            required
          />

          <input
            name="image"
            type="url"
            placeholder="Profile Image URL (optional)"
            className="input input-bordered w-full"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />

          <button className="btn w-full bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white">
            Sign Up
          </button>

        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn w-full"
        >
          Sign up with Google
        </button>

      </div>
    </div>
  );
}