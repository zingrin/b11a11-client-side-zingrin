import { useNavigate, useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import { AuthContexts } from "../contexts/AuthContexts";
import Swal from "sweetalert2";

const CourseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContexts);
  const [course, setCourse] = useState(null);
  const [enrolled, setEnrolled] = useState(false);
  const [enrollLimitReached, setEnrollLimitReached] = useState(false);
  const [loading, setLoading] = useState(true);

  // 1. fetch course
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/courseDetails/${id}`)
      .then(res => res.json())
      .then(data => {
        setCourse(data);
        setLoading(false);
      });
  }, [id]);

  // 2. check if user already enrolled
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/enrollments?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
          const enrolledHere = data.find(en => en.courseId === id);
          if (enrolledHere) setEnrolled(true);
          if (data.length >= 3) setEnrollLimitReached(true);
        });
    }
  }, [user, id]);

  // 3. enroll toggle handler
  const handleEnrollToggle = () => {
    if (!enrolled) {
      // Enroll user
      const enrollmentData = {
        userEmail: user.email,
        courseId: id,
        enrolledAt: new Date().toISOString()
      };

      fetch("http://localhost:3000/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enrollmentData)
      })
        .then(res => res.json())
        .then(() => {
          setEnrolled(true);
         Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Enrollments Successfully",
  showConfirmButton: false,
  timer: 1500
});
          navigate("/my-enrollments");
        })
        .catch(err => {
  Swal.fire({
    icon: "error",
    title: "Unenroll Failed!",
    text: "Could not cancel your enrollment. Try again.",
  });
  console.error(err);
});


    } else {
      // Unenroll user
      fetch(`http://localhost:3000/enrollments?email=${user.email}&courseId=${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(() => {
          setEnrolled(false);
          Swal.fire({
  title: "Enrollment Cancel!",
  icon: "error",
  draggable: true
});
        })
        .catch(err => {
  Swal.fire({
    icon: "error",
    title: "Unenroll Failed!",
    text: "Could not cancel your enrollment. Try again.",
  });
  console.error(err);
});
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  const seatsLeft = course?.seats - course?.enrolledCount;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img src={course?.image} alt={course?.title} className="rounded-xl mb-6 w-full" />
      <h1 className="text-3xl font-bold mb-2">{course?.title}</h1>
      <p className="text-gray-600 mb-4">{course?.shortDescription}</p>
      <p><strong>Instructor:</strong> {course?.instructorName}</p>
      <p><strong>Duration:</strong> {course?.duration}</p>
      <p><strong>Seats Left:</strong> {seatsLeft}</p>

      <div className="mt-6">
        {!user ? (
          <button className="btn btn-disabled">Login to Enroll</button>
        ) : enrolled ? (
          <button className="btn btn-error" onClick={handleEnrollToggle}>Cancel Enrollment</button>
        ) : seatsLeft <= 0 ? (
          <button className="btn btn-disabled">No Seats Left</button>
        ) : enrollLimitReached ? (
          <button className="btn btn-warning btn-disabled">Max 3 Enrollments</button>
        ) : (
          <button className="btn btn-primary" onClick={handleEnrollToggle}>Enroll Now</button>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
