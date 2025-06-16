import React from "react";
import Slider from "../components/Slider";
import Faq from "./Faqs";
import StudentFeedback from "../components/StudentFeedback";
import Achievements from "../components/Achievements";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <StudentFeedback></StudentFeedback>
      <Achievements></Achievements>
      <Faq></Faq>
    </div>
  );
};

export default Home;
