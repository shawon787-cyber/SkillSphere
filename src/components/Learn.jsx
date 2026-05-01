import React from "react";
import { CiLight } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import { GoRocket } from "react-icons/go";

const Learn = () => {
  return (
    <section className="px-4 mt-16 md:mt-20">
      <div className="container mx-auto text-center">
        
       
        <p className="text-[#4e2ecf] text-xs">
          LEARNING TIPS
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">
          How to learn faster
        </h2>

        
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-gradient-to-t from-[#4e2ecf]/10 to-white rounded-2xl p-8 shadow-sm border border-gray-300 flex flex-col justify-center items-center">
  
  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white mb-4 text-2xl">
    <CiLight />
  </div>

  <h3 className="font-semibold text-lg mb-2">
    Learn by doing
  </h3>

  <p className="text-gray-500 text-sm text-center">
    Build real projects after every module to lock in knowledge.
  </p>

</div>

          {/* Card 2 */}
         <div className="bg-gradient-to-t from-[#4e2ecf]/10 to-white rounded-2xl p-8 shadow-sm border border-gray-300 flex flex-col justify-center items-center">
  
  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white mb-4 text-xl">
    <GoGoal />
  </div>

  <h3 className="font-semibold text-lg mb-2">
    Set tiny goals
  </h3>

  <p className="text-gray-500 text-sm text-center">
    30 focused minutes a day beats a 5-hour weekend cram session.
  </p>

</div>

          {/* Card 3 */}
          
          <div className="bg-gradient-to-t from-[#4e2ecf]/10 to-white rounded-2xl p-8 shadow-sm border border-gray-300 flex flex-col justify-center items-center">
  
  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white mb-4 text-xl">
    <GoRocket />
  </div>

  <h3 className="font-semibold text-lg mb-2">
    Ship fast
  </h3>

  <p className="text-gray-500 text-sm text-center">
    Share your work early. Feedback compounds your growth.
  </p>

</div>

        </div>
      </div>
    </section>
  );
};

export default Learn;