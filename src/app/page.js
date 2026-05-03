
import Banner from "@/components/Banner";
import Learn from "@/components/Learn";
import StartLearning from "@/components/StartLearning";
import TopInstructor from "@/components/TopInstructor";
import TopSkills from "@/components/TopSkills";
import TrendingCourse from "@/components/TrendingCourse";
import ClientWrapper from "@/components/ClientWrapper";

export default function Home() {
  return (
    <ClientWrapper>
      <Banner />
      <TopSkills />
      <Learn />
      <TopInstructor />
      <TrendingCourse />
      <StartLearning />
    </ClientWrapper>
  );
}