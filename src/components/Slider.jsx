import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Skills that drive you forward",
    description:
      "Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.",
    button: "Plan for individuals",
   image: "https://i.ibb.co/KxFFzTB/image1.jpg",
  },
  {
    title: "Empower your team",
    description:
      "Upskill your team with curated courses. Drive innovation and success in your organization.",
    button: "Plan for teams",
    image: "https://i.ibb.co/tpkTPDc/image2.jpg",
  },
  {
    title: "Learn without limits",
    description:
      "Access a world of knowledge. Learn anytime, anywhere, at your pace.",
    button: "Explore learning paths",
    image: "https://i.ibb.co/nqSh5wQ/image3.jpg",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative max-w-6xl mx-auto my-10 overflow-hidden rounded-lg shadow-lg">
      <div className="relative">
        <img
          src={slides[current].image}
          alt="Slide"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{slides[current].title}</h2>
          <p className="mb-6 max-w-xl">{slides[current].description}</p>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded font-semibold w-max">
            {slides[current].button}
          </button>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
      >
        <FaChevronRight/>
      </button>
    </div>
  );
};

export default Slider;
