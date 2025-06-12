import { useEffect, useState } from "react";
import { Link } from "react-router";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/courses") 
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch courses:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Explore Our Courses</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <div key={course._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            <figure><img src={course.image} alt={course.title} className="h-48 w-full object-cover" /></figure>
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

export default Courses;
