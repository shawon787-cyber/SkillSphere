import React from "react";

const TopInstructor = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/shawon787-cyber/SkillSphere/refs/heads/main/public/data.json",
    { cache: "no-store" } // optional but safe for Next.js
  );

  const tutor = await res.json();

  
  const instructors = Array.from(
    new Map(
      tutor.map((course) => [
        course.instructor.name,
        course.instructor,
      ])
    ).values()
  );

  return (
    <div className="container mx-auto px-4 mt-16 md:mt-20">
      
      <div className="text-center mb-10">
        <span className="text-[#4e2ecf] text-xs">
          MEET YOUR INSTRUCTOR
        </span>
        <h3 className="font-bold text-3xl lg:text-5xl md:mb-2">
          Top Instructors
        </h3>
        <p className="text-gray-500 text-sm">
          Engineers, designers, and marketers from companies you know.
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {instructors.slice(0,4).map((ins, index) => (
          <div
            key={index}
            className="text-center px-4 py-8 rounded-xl shadow-md hover:shadow-md transition bg-[#fafaff]"
          >
            <img
              src={ins.image}
              alt={ins.name}
              className="w-20 h-20 mx-auto rounded-full object-cover"
            />

            <h4 className="mt-3 font-semibold">{ins.name}</h4>
            <p className="text-sm text-gray-500">{ins.role}</p>
            <p className="text-xs text-gray-400">{ins.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructor;