import { FaUsers, FaLaptopCode, FaAward } from "react-icons/fa";
import CountUp from "react-countup";

const stats = [
  { icon: <FaUsers />, label: "Registered Users", value: 3500 },
  { icon: <FaLaptopCode />, label: "Courses Available", value: 120 },
  { icon: <FaAward />, label: "Certificates Issued", value: 2300 }
];

const Achievements = () => {
  return (
    <div className="bg-base-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-100">Our Platform in Numbers</h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          We're dedicated to empowering learners across the world. Here are some stats that show our journey so far.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-base-200 p-8 rounded-2xl shadow-lg flex flex-col items-center space-y-4 hover:shadow-xl transition"
            >
              <div className="text-5xl text-primary">{stat.icon}</div>
              <p className="text-4xl font-extrabold text-gray-400">
                <CountUp end={stat.value} duration={2} separator="," />
                {stat.value > 1000 ? "+" : ""}
              </p>
              <p className="text-gray-700 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
