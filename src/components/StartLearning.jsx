
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

const StartLearning = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleCreateAccount = () => {
    if (session?.user) {
      toast.error("You are already signed in");
    } else {
      router.push("/signup");
    }
  };

  return (
    <section className="px-4 mt-16 md:mt-20">
      <div className="container mx-auto">
        
        <div className="rounded-3xl bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] py-16 px-6 text-center shadow-lg">
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to level up your career?
          </h2>

          <p className="mt-3 text-white/80 text-sm sm:text-base">
            Join thousands of learners. Start free today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            
            <button
              onClick={handleCreateAccount}
              className="px-6 h-11 rounded-xl bg-white text-[#4e2ecf] font-medium shadow hover:scale-105 transition"
            >
              Create free account
            </button>

            
            <button
              onClick={() => router.push("/courses")}
              className="px-6 h-11 rounded-xl border border-white/40 text-white hover:bg-white hover:text-[#4e2ecf] transition"
            >
              Browse courses
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default StartLearning;