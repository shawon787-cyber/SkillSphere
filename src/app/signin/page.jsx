
"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    console.log("LOGIN:", { data, error });

    if (data?.user) {
     
      router.push("/?login=success");
    } else {
      
      toast.error(
        error?.message || "Invalid email or password ❌"
      );
    }
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

        <h1 className="text-xl font-bold text-center">Sign In</h1>

        <form onSubmit={onSubmit} className="space-y-4">

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
            Sign In
          </button>

        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn w-full"
        >
          Sign in with Google
        </button>

      </div>
    </div>
  );
}