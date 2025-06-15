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
    <section className="bg-base-200 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-100">
          What Our Students Say
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-medium">
          Hear from learners who have taken our courses and made real progress in their careers.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {feedbacks.map((fb, idx) => (
            <div
              key={idx}
              className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={fb.photo}
                  alt={fb.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary shadow"
                />
                <div>
                  <p className="text-2xl font-bold text-gray-100">{fb.name}</p>
                  <div className="flex text-yellow-200 mt-1">
                    {[...Array(fb.rating)].map((_, i) => (
                      <FaStar key={i} size={18} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-100 text-base font-medium italic leading-relaxed">
                "{fb.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;
