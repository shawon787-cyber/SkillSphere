"use client";

import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const imageInput = formData.get("image");

    
    // const image =
    //   imageInput &&
    //   typeof imageInput === "string" 
    //   // && imageInput.startsWith("http")
    //     ? imageInput
    //     : undefined;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      imageInput,
      callbackURL: "/", 
    });

    console.log("SIGNUP:", { data, error });

    if (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#4e2ecf] via-[#a57aeb] to-[#f3e7d3]">

      <form
        onSubmit={onSubmit}
        className="w-96 p-6 bg-white rounded-xl shadow space-y-4"
      >

        <h1 className="text-xl font-bold text-center">
          Create Account
        </h1>

        <input
          name="name"
          placeholder="Your name"
          className="input input-bordered w-full"
          required
        />

        <input
          name="image" type="url"
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

    </div>
  );
}