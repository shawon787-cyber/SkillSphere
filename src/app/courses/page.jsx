"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Development", "Design", "Marketing", "Data Science"];

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

 
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://skill-sphere-liart-eight.vercel.app/data.json"
      );
      const data = await res.json();
      setCourses(data);
    };
    fetchData();
  }, []);

  
  const filteredCourses = courses.filter((course) => {
    const matchSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" || course.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div>

      
      <div className="bg-gradient-to-r from-[#ccbffc] via-[#d8ccff] to-[#f3e7d3] py-12 px-4">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            All Courses
          </h1>

          <p className="text-gray-600 mb-6">
            Find the right course for your next skill jump.
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-10">

         
            
                      <div className="flex flex-1 items-center gap-2 px-3 py-2 shadow rounded-md bg-white/80">

                         
                          <Search className="text-gray-400 w-4 h-4" />

                         
                          <input
                              type="text"
                              placeholder="Search courses by title..."
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              className="w-full outline-none bg-transparent text-sm"
                          />

                      </div>

            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-md shadow text-sm transition font-medium cursor-pointer ${
                    activeCategory === cat
                      ? " bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white shadow"
                      : "bg-white/70 text-gray-700 hover:bg-purple-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 pt-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >

             
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />

                
                <span className="absolute top-3 left-3 bg-white text-xs px-2 py-1 rounded shadow">
                  {course.category}
                </span>
              </div>

              
              <div className="p-4 space-y-2">

               
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>⭐ {course.rating}</span>
                  <span>• {course.level}</span>
                </div>

               
                <h3 className="font-semibold text-lg">
                  {course.title}
                </h3>

                
                <p className="text-sm text-gray-500">
                  By {course.instructor.name}
                </p>

               
                <div className="flex justify-between text-sm text-gray-500 pt-2">
                  <span>⏱ {course.duration}</span>
                  <span>👨‍🎓 {course.instructor.students}</span>
                </div>

              
              <Link href={`/courses/${course.id}`}>
              <button className="w-full h-10 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white font-medium hover:scale-105 transition mt-2 cursor-pointer">
                View Details
              </button>
              </Link>
            
               

              </div>
            </div>
          ))}

        </div>

        {filteredCourses.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No courses found 😢
          </p>
        )}

      </div>
    </div>
  );
};

export default CoursesPage;