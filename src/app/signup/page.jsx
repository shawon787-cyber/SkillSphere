// import React from "react";

// const SignUp = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-orange-100 px-6">
      
//       <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
//         {/* Left Section */}
//         <div>
//           <p className="inline-block bg-white px-4 py-1 rounded-full shadow text-sm mb-6">
//             ✨ Join 50,000+ learners
//           </p>

//           <h1 className="text-5xl font-bold leading-tight mb-4">
//             Start your{" "}
//             <span className="text-purple-600">learning journey</span>
//           </h1>

//           <p className="text-gray-600 text-lg">
//             Create your free account and unlock expert-led courses,
//             project-based lessons, and certificates.
//           </p>
//         </div>

//         {/* Right Section (Form) */}
//         <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto">
//           <h2 className="text-2xl font-semibold mb-2">
//             Create your account
//           </h2>
//           <p className="text-gray-500 mb-6">
//             It takes less than a minute.
//           </p>

//           <form className="space-y-4">
            
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />

//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />

//             <input
//               type="text"
//               placeholder="Photo URL (optional)"
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
//             >
//               Register
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="flex items-center my-6">
//             <div className="flex-1 h-px bg-gray-300"></div>
//             <span className="px-3 text-gray-400 text-sm">OR</span>
//             <div className="flex-1 h-px bg-gray-300"></div>
//           </div>

//           {/* Google Button */}
//           <button className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
//             <span className="text-red-500 font-bold">G</span>
//             Continue with Google
//           </button>

//           <p className="text-sm text-center mt-4 text-gray-500">
//             Already have an account?{" "}
//             <span className="text-purple-600 cursor-pointer hover:underline">
//               Login
//             </span>
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SignUp;

"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const image = formData.get("image");
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image
    })
    console.log({data, error})
    if(!error){
      router.push('/')
    }
  };

  return (
    <Card className="border mx-auto w-96 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      
      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col gap-4 px-6"
      >
        <TextField isRequired>
          <Label>Name</Label>
          <Input name="name" placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired>
          <Label>Image URL</Label>
          <Input name="image" placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField isRequired>
          <Label>Email</Label>
          <Input name="email" type="email" placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField isRequired>
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>

          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </form>
    </Card>
  );
}