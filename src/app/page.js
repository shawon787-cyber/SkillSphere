import Banner from "@/components/Banner";
import Learn from "@/components/Learn";
import StartLearning from "@/components/StartLearning";
import TopSkills from "@/components/TopSkills";


export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <TopSkills></TopSkills>
      <Learn></Learn>
      <StartLearning></StartLearning>
    </div>
  );
}
