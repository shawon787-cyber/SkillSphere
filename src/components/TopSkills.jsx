import React from 'react';
import Image from "next/image";

const TopSkills = async () => {
    const res = await fetch('https://skill-sphere-liart-eight.vercel.app/data.json')
    const skills = await res.json()
    console.log(skills)
    
    return (
        <div className='container mx-auto px-4 mt-16'>
            <div className='text-center'>
                <span className='text-[#4e2ecf] text-sm'>TOP PICKS</span>
                <h3 className='font-bold text-3xl lg:text-6xl'>Popular Courses</h3>
                <p className='text-gray-500 text-sm'>The highest-rated courses our learners love right now.</p>
            </div>
            <div className='grid grid-cols-3 mt-6'>
                {
                    [...skills]
                        .sort((a, b) => b.rating - a.rating)
                        .slice(0, 3)
                        .map(course => (
                            <div key={course.id}>
                                <Image
    src={course.image}
    alt={course.title}
    width={300}
    height={200}
  />
                                <p>⭐ {course.rating}</p>
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

export default TopSkills;