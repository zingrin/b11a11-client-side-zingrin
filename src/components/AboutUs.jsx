import React from "react";
import ImpactStats from "../pages/ImpactStats";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
   <>
   <Helmet>
                   <title>About Us | Academix</title>
                 </Helmet>
       
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>

      <div className="bg-base-200 p-6 rounded-lg shadow-lg space-y-4">
        <p className="text-lg leading-relaxed">
          Welcome to <span className="font-semibold text-primary">Academix</span> – your trusted platform for quality online courses. We aim to make learning accessible, affordable, and engaging for everyone.
        </p>
        <ImpactStats></ImpactStats>
        <p>
          Our mission is to empower learners through a diverse range of expertly designed courses, personalized guidance, and a thriving community. Whether you're here to upskill, explore a new passion, or just have fun — we're with you every step of the way.
        </p>

        <div className="grid md:grid-cols-3 gap-6 pt-4">
          <div className="bg-base-100 p-4 rounded shadow text-center">
            <h4 className="text-xl font-semibold text-primary mb-2">10,000+ Students</h4>
            <p>Learning across multiple disciplines and skill levels.</p>
          </div>
          <div className="bg-base-100 p-4 rounded shadow text-center">
            <h4 className="text-xl font-semibold text-primary mb-2">Expert Instructors</h4>
            <p>Courses designed and delivered by industry professionals.</p>
          </div>
          <div className="bg-base-100 p-4 rounded shadow text-center">
            <h4 className="text-xl font-semibold text-primary mb-2">Flexible Learning</h4>
            <p>Learn anytime, anywhere, at your own pace.</p>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default AboutUs;
