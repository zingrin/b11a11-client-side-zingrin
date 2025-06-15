import { FaUsers, FaLaptopCode, FaAward } from "react-icons/fa";

const stats = [
  { icon: <FaUsers />, label: "Registered Users", value: "3,500+" },
  { icon: <FaLaptopCode />, label: "Courses Available", value: "120+" },
  { icon: <FaAward />, label: "Certificates Issued", value: "2,300+" }
];

const Achievements = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Platform in Numbers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-base-200 p-6 rounded-xl shadow-lg flex flex-col items-center space-y-3"
            >
              <div className="text-4xl text-primary">{stat.icon}</div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
