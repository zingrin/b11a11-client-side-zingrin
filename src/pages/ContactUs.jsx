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
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center p-6">
      <div className="card bg-base-100 shadow-xl w-full max-w-lg">
        <div className="card-body">
          <h2 className="card-title text-center text-3xl font-bold mb-6">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className="input input-bordered"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="input input-bordered"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Course */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Select Course</span>
              </label>
              <select
                name="course"
                className="select select-bordered"
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
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Message</span>
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message here..."
                className="textarea textarea-bordered resize-none"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
