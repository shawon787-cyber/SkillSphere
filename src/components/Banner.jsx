import React from "react";
import Link from "next/link";
import { RiGraduationCapLine } from "react-icons/ri";

const Banner = () => {
  return (
    <section className="relative isolate w-full overflow-hidden min-h-[90vh] flex items-center">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=2400&q=80&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />

        {/* Blur Circles */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#4e2ecf]/30 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full bg-[#a57aeb]/20 blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        <div className="max-w-3xl">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur">
            ✨ 50,000+ learners worldwide
          </span>

          {/* Heading */}
          <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Upgrade your skills.{" "}
            <span className="bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] bg-clip-text text-transparent">
              Shape your future.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Learn from industry experts with project-based courses in development,
            design, marketing, data and more — at your own pace.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <Link href="/courses">
              <button className="px-8 h-10 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white font-medium hover:scale-105 transition">
                Explore courses →
              </button>
            </Link>

            <Link href="/register">
              <button className="px-8 h-10 rounded-md border border-[#664ada] text-[#664ada] hover:bg-gradient-to-r hover:from-[#664ada] hover:to-[#a571f7] hover:text-white transition">
                Join free
              </button>
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10 text-sm">

            <div>
              <div className="text-2xl font-bold">120+</div>
              <div className="text-gray-500">Expert courses</div>
            </div>

            <div>
              <div className="text-2xl font-bold">4.8★</div>
              <div className="text-gray-500">Average rating</div>
            </div>

            <div>
              <div className="text-2xl font-bold">50k+</div>
              <div className="text-gray-500">Active learners</div>
            </div>

          </div>

        </div>

        {/* Floating Card */}
        <div className="pointer-events-none absolute bottom-10 right-10 hidden lg:flex items-center gap-3 rounded-2xl border border-gray-500 bg-white/90 p-4 shadow-lg backdrop-blur">

          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white">
            <RiGraduationCapLine />
          </div>

          <div>
            <div className="text-sm font-semibold">Certificate on completion</div>
            <div className="text-xs text-gray-500">Share on LinkedIn</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;