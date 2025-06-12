import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContexts } from "../contexts/AuthContexts";

const CourseDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContexts);
  const [course, setCourse] = useState(null);
  const [enrolled, setEnrolled] = useState(false);
  const [enrollLimitReached, setEnrollLimitReached] = useState(false);

  // 1. fetch course
  useEffect(() => {
    fetch(`http://localhost:3000/api/courses/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [id]);

  // 2. check if user already enrolled
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/api/enrollments?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          const enrolledHere = data.find(en => en.courseId === id);
          if (enrolledHere) setEnrolled(true);
          if (data.length >= 3) setEnrollLimitReached(true);
        });
    }
  }, [user, id]);

  // 3. enroll handler
  const handleEnroll = () => {
    const enrollmentData = {
      userEmail: user.email,
      courseId: id,
      enrolledAt: new Date().toISOString()
    };

    fetch("http://localhost:3000/api/enrollments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enrollmentData)
    })
      .then(res => res.json())
      .then(data => {
        setEnrolled(true);
        toast.success("✅ Successfully enrolled!");
      })
      .catch(err => {
        toast.error("❌ Enrollment failed!");
        console.error(err);
      });
  };

  if (!course) return <div>Loading...</div>;

  const seatsLeft = course.seats - course.enrolledCount;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img src={course.image} alt={course.title} className="rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-4">{course.shortDescription}</p>
      <p><strong>Instructor:</strong> {course.instructorName}</p>
      <p><strong>Seats Left:</strong> {seatsLeft}</p>

      <div className="mt-6">
        {!user ? (
          <button className="btn btn-disabled">Login to Enroll</button>
        ) : enrolled ? (
          <button className="btn btn-success btn-disabled">Already Enrolled</button>
        ) : seatsLeft <= 0 ? (
          <button className="btn btn-disabled">No Seats Left</button>
        ) : enrollLimitReached ? (
          <button className="btn btn-warning btn-disabled">Max 3 Enrollments</button>
        ) : (
          <button className="btn btn-primary" onClick={handleEnroll}>Enroll Now</button>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
