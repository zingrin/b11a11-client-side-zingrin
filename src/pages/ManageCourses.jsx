import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContexts } from "../contexts/AuthContexts";
import Swal from "sweetalert2";

const ManageCourses = () => {
  const { user } = useContext(AuthContexts);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:3000/courses?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setMyCourses(data));
  }, [user?.email]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://localhost:3000/courses/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your course has been deleted.", "success");
              setMyCourses(myCourses.filter(c => c._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Manage Your Courses</h2>
      <div className="overflow-x-auto">
        <table className="table w-full text-sm">
          <thead>
            <tr className="bg-base-200">
              <th>Title</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myCourses.map(course => (
              <tr key={course._id}>
                <td>{course.title}</td>
                <td>{course.short_description}</td>
                <td>{course.duration}</td>
                <td className="flex gap-2">
                  <Link to={`/edit-course/${course._id}`}>
                    <button className="btn btn-sm btn-info text-white">
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {myCourses.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">No courses added yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourses;
