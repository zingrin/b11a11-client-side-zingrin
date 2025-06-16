import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContexts } from "../contexts/AuthContexts";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyEnrolledCourses = () => {
  const { user } = useContext(AuthContexts);
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(enrollments);
  // Fetch enrolled courses
  useEffect(() => {
    if (user?.email) {
      fetch(`https://academix-server-side-inky.vercel.app/enrollments?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setEnrollments(data);
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch enrollments", err);
          setLoading(false);
        });
    }
  }, [user]);

  // Remove enrollment with SweetAlert2 confirmation
  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this enrollment!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://academix-server-side-inky.vercel.app/api/my-enrollments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Removed!", "Enrollment has been removed.", "success");
              setEnrollments((prev) =>
                prev.filter((enroll) => enroll._id !== id)
              );
            } else {
              Swal.fire("Failed!", "Failed to remove enrollment.", "error");
            }
          })
          .catch(() => {
            Swal.fire("Failed!", "Failed to remove enrollment.", "error");
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (enrollments.length === 0) {
    return (
      <div className="text-center mt-10 space-y-4">
        <p className="text-gray-500">
          You haven’t enrolled in any courses yet.
        </p>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          Back Home
        </button>
      </div>
    );
  }

  return (
    <>
 <Helmet>
        <title>MyEnrollments | Academix</title>
      </Helmet>

    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        My Enrolled Courses
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Course</th>
              <th>Instructor</th>
              <th>Enrolled Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enroll, idx) => (
              <tr key={enroll._id}>
                <td>{idx + 1}</td>
                <td className="flex items-center gap-4">
                  <img
                    src={enroll.image}
                    alt={enroll.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{enroll.title}</p>
                    <p className="text-sm text-gray-500">{enroll.duration}</p>
                    <p className="text-sm text-gray-500">
                      {enroll.shortDescription}
                    </p>
                  </div>
                </td>
                <td>{enroll.instructorName}</td>
                <td>{new Date(enroll.enrolledAt).toLocaleDateString()}</td>
                <td>
                  <button
                    onClick={() => handleRemove(enroll._id)}
                    className="btn btn-sm btn-error"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </>

  );
};

export default MyEnrolledCourses;
