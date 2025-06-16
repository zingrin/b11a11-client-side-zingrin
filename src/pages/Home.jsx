import React from "react";
import Faq from "./Faqs";
import StudentFeedback from "../components/StudentFeedback";
import Achievements from "../components/Achievements";
import Courses from "../components/Courses";
import MyPopularCourses from "../components/MyPopularCourses";
import InstructorCarousel from "../components/InstructorCarousel";
import BannerSlider from "../components/Slider";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Academix</title>
      </Helmet>

      <div>
        <BannerSlider></BannerSlider>
        <Courses></Courses>
        <MyPopularCourses></MyPopularCourses>
        <InstructorCarousel></InstructorCarousel>
        <StudentFeedback></StudentFeedback>
        <Achievements></Achievements>
        <Faq></Faq>
      </div>
    </>
  );
};

export default Home;
