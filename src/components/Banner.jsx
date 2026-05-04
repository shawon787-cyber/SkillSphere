
"use client";
import React from "react";
import Link from "next/link";
import { RiGraduationCapLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Banner = () => {
  const text = "Shape your future.";

  // 🔥 animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="relative isolate w-full overflow-hidden min-h-[90vh] flex items-center">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=2400&q=80&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />

        {/* Animated blur circles */}
        <motion.div
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#4e2ecf]/30 blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full bg-[#a57aeb]/20 blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >

          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur"
          >
            ✨ 50,000+ learners worldwide
          </motion.span>

          {/* Heading (TEXT animation unchanged ✅) */}
          <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Upgrade your skills.{" "}

            <span className="inline-block overflow-hidden align-bottom">
              {text.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.5,
                  }}
                  className="inline-block bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] bg-clip-text text-transparent"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-gray-600"
          >
            Learn from industry experts with project-based courses in development,
            design, marketing, data and more — at your own pace.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={container}
            className="mt-8 flex flex-wrap gap-3"
          >

            <motion.div variants={fadeUp}>
              <Link href="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 h-10 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white font-medium"
                >
                  Explore courses →
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 h-10 rounded-md border border-[#664ada] text-[#664ada] hover:bg-gradient-to-r hover:from-[#664ada] hover:to-[#a571f7] hover:text-white"
                >
                  Join free
                </motion.button>
              </Link>
            </motion.div>

          </motion.div>

          {/* Stats */}
          <motion.div
            variants={container}
            className="mt-12 flex flex-wrap gap-10 text-sm"
          >
            {[
              { num: "120+", label: "Expert courses" },
              { num: "4.8★", label: "Average rating" },
              { num: "50k+", label: "Active learners" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="text-2xl font-bold">{item.num}</div>
                <div className="text-gray-500">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

        {/* Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="pointer-events-none absolute bottom-10 right-10 hidden lg:flex items-center gap-3 rounded-2xl border border-gray-500 bg-white/90 p-4 shadow-lg backdrop-blur"
        >
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white">
            <RiGraduationCapLine />
          </div>

          <div>
            <div className="text-sm font-semibold">Certificate on completion</div>
            <div className="text-xs text-gray-500">Share on LinkedIn</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Banner;