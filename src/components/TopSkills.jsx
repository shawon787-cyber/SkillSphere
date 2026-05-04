
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

const TopSkills = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/shawon787-cyber/SkillSphere/refs/heads/main/public/data.json")
      .then(res => res.json())
      .then(data => setSkills(data));
  }, []);

  const handleViewDetails = (id) => {
  if (session?.user) {
    // একটু delay দিলে loading দেখাবে
    setTimeout(() => {
      router.push(`/courses/${id}`);
    }, 200);
  } else {
    toast.error("Please sign in first");
    router.push("/signup");
  }
};

  return (
    <div className="container mx-auto px-4 mt-16 md:mt-20">
      
      <div className="text-center">
        <span className="text-[#4e2ecf] text-xs">TOP PICKS</span>
        <h3 className="font-bold text-3xl lg:text-5xl md:mb-2">
          Popular Courses
        </h3>
        <p className="text-gray-500 text-sm">
          The highest-rated courses our learners love right now.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-6">
        {[...skills]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3)
          .map((course) => (
            <div key={course.id} className="bg-slate-50 rounded-lg shadow">

              <div className="relative w-full h-[250px] overflow-hidden rounded-t-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />

                <p className="absolute top-5 left-5 bg-white text-black font-medium text-xs px-2 py-1 rounded z-10">
                  {course.category}
                </p>
              </div>

              <div className="p-6 pb-6">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm">⭐ {course.rating}</p>
                  <p className="font-medium text-gray-500">
                    {course.level}
                  </p>
                </div>

                <p className="font-semibold text-xl mt-1">
                  {course.title}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-gray-500 mt-1 text-sm">
                    Instructor: {course.instructor.name}
                  </p>
                  <p className="flex items-center text-gray-500 gap-1.5 text-sm">
                    <FaClock /> {course.duration}
                  </p>
                </div>

                
                <button
                  onClick={() => handleViewDetails(course.id)}
                  className="w-full h-10 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white font-medium hover:scale-105 transition mt-2 cursor-pointer"
                >
                  View Details
                </button>

              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopSkills;