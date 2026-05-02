import React from 'react';
import Image from "next/image";
import { FaClock } from 'react-icons/fa';
import Link from 'next/link';

const TrendingCourse = async () => {
     const res = await fetch('https://skill-sphere-liart-eight.vercel.app/data.json')
    const trending = await res.json()
    console.log(trending)
    return (
        <div className='container mx-auto px-4 mt-16 md:mt-20'>
            <div className="text-center mb-10">
        <span className="text-[#4e2ecf] text-xs">
          NEW & TRENDING
        </span>
        <h3 className="font-bold text-3xl lg:text-5xl md:mb-2">
          Trending Courses
        </h3>
        <p className="text-gray-500 text-sm">
          What everyone is learning right now.
        </p>
      </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                 {
                                [...trending]
                                    
                                    .slice(0, 3)
                                    .map(course => (
                                        
                                        <div key={course.id} className='bg-slate-50 rounded-lg shadow'>
            
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
            
              <div className='p-6 pb-6'>
                <div className='flex items-center gap-2'>
                  <p className="font-medium text-sm">⭐ {course.rating}</p>
                  <p className='font-medium text-gray-500'>{course.level}</p>
                </div>
                <p className='font-semibold text-xl mt-1'>{course.title}</p>
                
                <div className='flex items-center justify-between'>
                     <p className='text-gray-500 mt-1 text-sm'>Instructor: {course.instructor.name}</p>  
                     <p className='flex items-center text-gray-500 gap-1.5 text-sm'><FaClock></FaClock> {course.duration}</p>               
                </div>
                   <Link href={`/courses/${course.id}`}>
              <button className="w-full h-10 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white font-medium hover:scale-105 transition mt-2 cursor-pointer">
                View Details
              </button>
              </Link>
                        
              </div>
            
            </div>
                                    ))
                            }
            </div>
        </div>
    );
};

export default TrendingCourse;