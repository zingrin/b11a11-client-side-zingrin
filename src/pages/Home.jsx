import React from "react";
import Courses from "../components/Courses";
import Slider from "../components/Slider";
import Faq from "./Faqs";

const Home = () => {
  return (
    <div>
      <Slider></Slider>

      <Courses></Courses>
      <Faq></Faq>
    </div>
  );
};

export default Home;
