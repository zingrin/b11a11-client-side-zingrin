import React from "react";
import Slider from "../components/Slider";
import Faq from "./Faqs";
import StudentFeedback from "../components/StudentFeedback";
import Achievements from "../components/Achievements";
import Courses from "../components/Courses";

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
