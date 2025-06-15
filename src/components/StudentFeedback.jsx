import { FaStar } from "react-icons/fa";

const feedbacks = [
  {
    name: "Rahim Uddin",
    comment: "This course helped me land my first frontend internship! The hands-on tasks were extremely helpful.",
    rating: 5,
    photo: "https://i.pravatar.cc/100?img=12"
  },
  {
    name: "Ayesha Khatun",
    comment: "Great structure and clarity. I especially loved how the instructor explained complex concepts simply.",
    rating: 4,
    photo: "https://i.pravatar.cc/100?img=47"
  },
  {
    name: "Sajib Hasan",
    comment: "As someone with zero experience, this course gave me the confidence to build real apps. Highly recommended!",
    rating: 5,
    photo: "https://i.pravatar.cc/100?img=33"
  }
];

const StudentFeedback = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Students Say</h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Hear from learners who have taken our courses and made real progress in their careers.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {feedbacks.map((fb, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={fb.photo}
                  alt={fb.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <p className="font-semibold text-gray-800">{fb.name}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(fb.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{fb.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;
