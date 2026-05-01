import Banner from "@/components/Banner";
import Learn from "@/components/Learn";
import StartLearning from "@/components/StartLearning";
import TopInstructor from "@/components/TopInstructor";
import TopSkills from "@/components/TopSkills";
import TrendingCourse from "@/components/TrendingCourse";


export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <TopSkills></TopSkills>
      <Learn></Learn>
      <TopInstructor></TopInstructor>
      <TrendingCourse></TrendingCourse>
      <StartLearning></StartLearning>
    </div>
  );
}
