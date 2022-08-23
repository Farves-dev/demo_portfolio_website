import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

const datas = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.",
  },
  {
    avatar: AVTR4,
    name: "Ama McBrown",
    review:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {datas.map((data, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={data.avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{data.name}</h5>
              <small className="client__review">{data.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

<article className="testimonial">
  <div className="client__avatar">
    <img src={AVTR1} alt="Avatar one" />
  </div>
  <h5 className="client__name"></h5>
  <small className="client__review">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
    inventore impedit facilis quis, maiores totam nostrum saepe soluta illo sed
    sit magnam quisquam dolore expedita earum voluptatibus quasi voluptatem
    sapiente?
  </small>
</article>;
