import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    detailedDescription: "",
    instructorName: "",
    duration: "",
    image: "",
  });

  useEffect(() => {
    fetch(`https://academix-server-side-inky.vercel.app/courseDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          title: data.title || "",
          description: data.detailedDescription || "", 
         instructorName: data.instructorName || "",       
          duration: data.duration || "",
          image: data.image || "",
        });
        setLoading(false);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to load course data!",
        });
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(`https://academix-server-side-inky.vercel.app/courses/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.title,
        detailedDescription: formData.detailedDescription,
        instructorName: formData.instructorName,
        duration: formData.duration,
        image: formData.image,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update course");
        return res.json();
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Course updated successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/manageCourse");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: err.message || "Failed to update course",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Instructor</label>
          <input
            type="text"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g., 6 weeks"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Course"}
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
