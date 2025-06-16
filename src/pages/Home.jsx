import React from "react";
import Faq from "./Faqs";
import StudentFeedback from "../components/StudentFeedback";
import Achievements from "../components/Achievements";
import Courses from "../components/Courses";
import MyPopularCourses from "../components/MyPopularCourses";
import InstructorCarousel from "../components/InstructorCarousel";
import BannerSlider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <Courses></Courses>
      <MyPopularCourses></MyPopularCourses>
      <InstructorCarousel></InstructorCarousel>
      <StudentFeedback></StudentFeedback>
      <Achievements></Achievements>
      <Faq></Faq>
    </div>
  );
};

export default Home;
