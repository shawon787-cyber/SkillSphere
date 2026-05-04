import Banner from "@/components/Banner";
import Learn from "@/components/Learn";
import StartLearning from "@/components/StartLearning";
import TopInstructor from "@/components/TopInstructor";
import TopSkills from "@/components/TopSkills";
import TrendingCourse from "@/components/TrendingCourse";
import LoginToastHandler from "@/components/LoginToastHandler";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <LoginToastHandler />
      </Suspense>
      <Banner />
      <TopSkills />
      <Learn />
      <TopInstructor />
      <TrendingCourse />
      <StartLearning />
    </>
  );
}