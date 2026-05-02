"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Card,
 
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signIn.email({
     
      email,
      password,
     callbackURL: '/'
    })
    console.log({data, error})
  };
  const handleGoogleSignIn = async ()=>{
      await authClient.signIn.social({
        provider: 'google'
      })
  }
  return (
    // <Card className="border mx-auto w-96 py-10 mt-5">
    //   <h1 className="text-center text-2xl font-bold">Sign In</h1>

    //   {/* ✅ Native form ব্যবহার */}
    //   <form
    //     onSubmit={onSubmit}
    //     className="flex w-full flex-col gap-4 px-6"
    //   >
       

        

    //     <TextField isRequired>
    //       <Label>Email</Label>
    //       <Input name="email" type="email" placeholder="john@example.com" />
    //       <FieldError />
    //     </TextField>

    //     <TextField isRequired>
    //       <Label>Password</Label>
    //       <Input
    //         name="password"
    //         type="password"
    //         placeholder="Enter your password"
    //       />
    //       <Description>
    //         Must be at least 8 characters with 1 uppercase and 1 number
    //       </Description>
    //       <FieldError />
    //     </TextField>

    //     <div className="flex gap-2">
    //       <Button type="submit">
    //         <Check />
    //         Submit
    //       </Button>

    //       <Button type="reset" variant="secondary">
    //         Reset
    //       </Button>
    //     </div>
    //   </form>
    // </Card>
    <Card className="mx-auto w-96 mt-10 shadow-xl bg-base-100">
  <div className="card-body">
    <h1 className="text-2xl font-bold text-center">Sign In</h1>

    <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-4">
      
      {/* Email */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="john@example.com"
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Password */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          className="input input-bordered w-full"
          required
        />
        <label className="label">
          <span className="label-text-alt text-gray-500">
            Must be at least 8 characters with 1 uppercase and 1 number
          </span>
        </label>
      </div>

      {/* Options */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="checkbox checkbox-sm" />
          Remember me
        </label>
        <a className="link link-primary">Forgot password?</a>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-2">
        <button type="submit" className="btn btn-primary w-full">
          <Check className="h-4 w-4 mr-1" />
          Sign In
        </button>

        <button type="reset" className="btn btn-outline w-full">
          Reset
        </button>
      </div>
    </form>
    <p className="text-center">or</p>
    <button onClick={handleGoogleSignIn} className="btn"><GrGoogle></GrGoogle> Sign In With Google</button>

    {/* Footer */}
    <p className="text-center text-sm mt-4">
      Don’t have an account?{" "}
      <a className="link link-primary">Sign up</a>
    </p>
  </div>
</Card>
  );
}