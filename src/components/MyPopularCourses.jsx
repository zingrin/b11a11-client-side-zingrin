import { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { AuthContexts } from "../contexts/AuthContexts";

const MyPopularCourses = () => {
  const { user } = useContext(AuthContexts);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://academix-server-side-inky.vercel.app/api/my-popular-courses?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch popular courses:", err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">
        You haven’t enrolled in any popular courses yet.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Your Popular Enrolled Courses
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course._id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure>
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p className="text-sm text-gray-600">{course.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mt-3 text-sm">
                <span className="badge badge-info">{course.category}</span>
                <span className="badge badge-outline">{course.level}</span>
                <span className="badge badge-success">{course.duration}</span>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <p>Instructor: {course.instructorName}</p>
                <p>Seats: {course.seats - course.enrolledCount} available</p>
              </div>
              <div className="card-actions justify-end mt-4">
                <Link to={`/courses/${course._id}`}>
                  <button className="btn btn-sm btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPopularCourses;
