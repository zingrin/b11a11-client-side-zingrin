import React from "react";
import CountUp from "react-countup";

const ImpactStats = () => {
 const stats = [
  { label: "Learners", value: 7_900 },
  { label: "Instructors", value: 8 },
  { label: "Courses", value: 25 },
  { label: "Course enrollments", value: 110_000 },
  { label: "Languages", value: 7 },
  { label: "Enterprise customers", value: 4 },
];

  return (
    <section className="w-full bg-purple-700 text-white py-12 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Creating impact around the world
      </h2>
      <p className="max-w-2xl mx-auto mb-10 text-lg font-light">
        With our global catalog spanning the latest skills and topics, people and organizations
        everywhere are able to adapt to change and thrive.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold">
              <CountUp
                end={stat.value}
                duration={3}
                separator=","
                suffix={stat.suffix || ""}
              />
            </div>
            <p className="text-sm md:text-base mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

     <div className="bg-white text-black mt-12 p-6 md:p-10 rounded-lg shadow-md max-w-3xl mx-auto">
  <p className="text-lg font-medium mb-4">
    Discover expertly designed courses that empower learners to build new skills and advance their careers.
  </p>
  <p className="text-sm mb-6">
    From beginner to advanced, our comprehensive course catalog covers the latest business, technology, and creative topics — all crafted by industry experts.
  </p>
  <button className="btn btn-neutral">Browse Courses</button>
</div>

    </section>
  );
};

export default ImpactStats;
