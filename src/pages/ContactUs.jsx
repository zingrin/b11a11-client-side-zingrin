import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });

  const courses = [
    "Web Development",
    "Mobile App Development",
    "Data Science",
    "UI/UX Design",
    "Digital Marketing",
    "Cybersecurity",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! We got your message about the ${formData.course} course.`);
    setFormData({ name: "", email: "", course: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="input input-bordered w-full"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="input input-bordered w-full"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Select a Course</label>
            <select
              name="course"
              className="select select-bordered w-full"
              required
              value={formData.course}
              onChange={handleChange}
            >
              <option value="" disabled>
                Choose a course
              </option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message here..."
              className="textarea textarea-bordered w-full resize-none"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-full md:w-1/2">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
