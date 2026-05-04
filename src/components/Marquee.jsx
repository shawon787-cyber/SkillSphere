"use client";

import { useEffect, useState } from "react";

const Marquee = ({ texts }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText(texts.join("   •   "));
  }, [texts]);

  return (
    <div className="mt-10 overflow-hidden rounded-lg bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white p-4 text-xl">
      <div className="flex animate-marquee ">
        <div className="whitespace-nowrap px-4">
          {displayText}
        </div>
        <div className="whitespace-nowrap px-4">
          {displayText}
        </div>
      </div>
    </div>
  );
};

export default Marquee;