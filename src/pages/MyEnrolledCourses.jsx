import { useContext, useEffect, useState } from "react";
import {AuthContexts} from '../contexts/AuthContexts'
import { toast } from "react-toastify";
const MyEnrolledCourses = () => {
  const { user } = useContext(AuthContexts);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch enrolled courses
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/enrollments?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
          setEnrollments(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Failed to fetch enrollments", err);
          setLoading(false);
        });
    }
  }, [user]);

  // 2. Remove enrollment
  const handleRemove = (enrollmentId) => {
    fetch(`http://localhost:3000/api/my-enrollments/${enrollmentId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success("Enrollment removed!");
          setEnrollments(prev => prev.filter(e => e._id !== enrollmentId));
        }
      })
      .catch(err => {
        toast.error("Failed to remove");
        console.error(err);
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
    return <p className="text-center text-gray-500 mt-10">You haven’t enrolled in any courses yet.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">My Enrolled Courses</h1>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Course Title</th>
              <th>Instructor</th>
              <th>Date Enrolled</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enroll, idx) => (
              <tr key={enroll._id}>
                <td>{idx + 1}</td>
                <td>{enroll.courseTitle}</td>
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
  );
};

export default MyEnrolledCourses;
