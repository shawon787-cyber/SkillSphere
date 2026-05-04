import Banner from "@/components/Banner";
import Learn from "@/components/Learn";
import StartLearning from "@/components/StartLearning";
import TopInstructor from "@/components/TopInstructor";
import TopSkills from "@/components/TopSkills";
import TrendingCourse from "@/components/TrendingCourse";
import LoginToastHandler from "@/components/LoginToastHandler";

export default function Home() {
  return (
    <>
      <LoginToastHandler />
      <Banner />
      <TopSkills />
      <Learn />
      <TopInstructor />
      <TrendingCourse />
      <StartLearning />
    </>
  );
}