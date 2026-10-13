// ReviewSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    text: "Amazing service! Highly recommended.",
  },
  {
    id: 2,
    name: "Sarah Smith",
    text: "Great experience and fantastic support.",
  },
  {
    id: 3,
    name: "Michael Lee",
    text: "Very professional and easy to work with.",
  },
  {
    id: 4,
    name: "Emily Johnson",
    text: "Loved the UI and smooth experience!",
  },
];

const ReviewSlider = () => {
  return (
    <div className="w-full py-20 bg-linear-to-br from-[#1c0e23] via-[#401552] to-[#65128f] lg:h-165">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-200">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-gray-900/70 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 h-64 flex flex-col justify-center text-center">
                <p className="text-gray-100 mb-6 italic">
                  "{review.text}"
                </p>
                <h4 className="text-lg font-semibold text-gray-100">
                  - {review.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;