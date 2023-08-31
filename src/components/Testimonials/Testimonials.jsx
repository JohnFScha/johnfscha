// Components
import React from "react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Styles
import "./Testimonials.scss";

// Images
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

const testimonials = [
  {
    id: 1,
    avatar: avatar1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt consequatur omnis ad illum, tenetur atque natus quasi. Alias, quibusdam quam deleniti expedita quas architecto esse sunt suscipit dignissimos magni",
  },
  {
    id: 2,
    avatar: avatar2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt consequatur omnis ad illum, tenetur atque natus quasi. Alias, quibusdam quam deleniti expedita quas architecto esse sunt suscipit dignissimos magni",
  },
  {
    id: 3,
    avatar: avatar3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt consequatur omnis ad illum, tenetur atque natus quasi. Alias, quibusdam quam deleniti expedita quas architecto esse sunt suscipit dignissimos magni",
  },
  {
    id: 4,
    avatar: avatar4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt consequatur omnis ad illum, tenetur atque natus quasi. Alias, quibusdam quam deleniti expedita quas architecto esse sunt suscipit dignissimos magni",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{draggable: true}}
      >
        {testimonials.map(({ id, avatar, name, review }) => (
          <SwiperSlide className="testimonial" key={id}>
            <figure className="client__avatar">
              <img src={avatar} alt={(name, id)} />
            </figure>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Testimonials;
