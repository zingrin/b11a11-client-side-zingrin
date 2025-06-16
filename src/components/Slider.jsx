import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
};

const BannerSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/slider.json")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Failed to load slides:", err));
  }, []);

  if (slides.length === 0) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="my-10 max-w-6xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative h-[350px] md:h-[450px]">
              <img
                src={slide.image}
                alt="Slide background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-opacity-50 z-10" />
              <motion.div
                className="relative z-20 text-white text-center px-4 h-full flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="mb-6 max-w-2xl mx-auto text-sm md:text-lg">{slide.description}</p>
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded font-semibold shadow-md">
                  {slide.button}
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
