import React from "react";
import Courses from "../components/Courses";
import Slider from "../components/Slider";
import Faq from "./Faqs";
import BannerSlider from "../components/Slider";
import StudentFeedback from "../components/StudentFeedback";
import Achievements from "../components/Achievements";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Courses></Courses>
      <StudentFeedback></StudentFeedback>
      <Achievements></Achievements>
      <Faq></Faq>
    </div>
  );
};

export default Home;
