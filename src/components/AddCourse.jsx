import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../contexts/AuthContexts";
import { toast } from "react-toastify";

const AddCourse = () => {
  const { user } = useContext(AuthContexts);
  const [loading, setLoading] = useState(false);
  const [courseOptions, setCourseOptions] = useState([]);

  // Fetch available course titles on component mount
  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => {
        const titles = data.map((course) => course.title);
        setCourseOptions(titles);
      })
      .catch((err) => console.error("Failed to fetch courses:", err));
  }, []);

  const handleAddCourse = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value);
    const image = form.image.value;

    const newCourse = {
      title,
      description,
      price,
      image,
      instructor: user?.displayName,
      instructor_email: user?.email,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:3000/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Course added successfully!");
        form.reset();
      } else {
        toast.error("Failed to add course.");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-base-200 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Course</h2>
      <form onSubmit={handleAddCourse} className="space-y-4">

        {/* Dropdown for existing course titles */}
        <select name="title" className="select select-bordered w-full" required>
          <option value="">Select a Course Title</option>
          {courseOptions.map((title, index) => (
            <option key={index} value={title}>{title}</option>
          ))}
        </select>

        <textarea
          name="description"
          placeholder="Course Description"
          className="textarea textarea-bordered w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price (USD)"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Submitting..." : "Add Course"}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
