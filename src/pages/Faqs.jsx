import { useState } from "react";

const Faqs = [
  {
    question: "What types of courses are offered on Academix?",
    answer:
      "Academix offers a wide range of courses including technology, business, design, marketing, and more. We aim to provide practical skills for real-world success.",
  },
  {
    question: "Are the courses self-paced or instructor-led?",
    answer:
      "Most courses are self-paced, allowing you to learn at your convenience. Some may include live sessions or deadlines depending on the instructor.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer:
      "Yes, upon successful completion of a course, you'll receive a digital certificate that you can share on LinkedIn or your resume.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "Simply browse the Courses page, choose a course, and click the 'Enroll Now' button. You may need to sign in or register first.",
  },
  {
    question: "Can I access course content after completion?",
    answer:
      "Yes, once enrolled, you’ll retain access to the course materials so you can review them anytime in the future.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-200">
        {Faqs.map((faq, index) => (
          <div key={index} className="p-4">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full font-semibold text-left text-lg text-gray-800"
            >
              {faq.question}
              <span className="ml-2">{openIndex === index ? "▲" : "▼"}</span>
            </button>

            {openIndex === index && (
              <p className="mt-2 text-gray-800">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
