import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InstructorCarousel = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://academix-server-side-inky.vercel.app/api/instructors") 
      .then(res => res.json())
      .then(data => setInstructors(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Meet Our Instructors</h2>
      <Slider {...settings}>
        {instructors.map((inst) => (
          <div key={inst.id} className="px-3">
            <div className="bg-base-100 rounded-lg shadow-md overflow-hidden p-6 text-center">
              <img
                src={inst.photo}
                alt={inst.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{inst.name}</h3>
              <p className="text-sm text-primary">{inst.specialty}</p>
              <p className="mt-2 text-gray-600 text-sm">{inst.bio}</p>
              <div className="mt-3 text-sm text-yellow-500">
                ⭐ {inst.rating} | 🎓 {inst.courses} Courses
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstructorCarousel;
