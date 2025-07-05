import React from 'react';
import './TestimonialsSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Priya Sharma',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'NovaCare made me feel safe and cared for. The doctors are truly compassionate and professional.'
  },
  {
    name: 'Rahul Verma',
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    quote: 'The staff was friendly and the treatment was top-notch. I highly recommend NovaCare to everyone!'
  },
  {
    name: 'Anita Desai',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'Booking an appointment was easy and the care I received was excellent. Thank you, NovaCare!'
  },
  {
    name: 'Anita ',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'Booking an appointment was easy and the care I received was excellent. Thank you, NovaCare!'
  }
];

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <div className="testimonials-header">
      <div className="testimonials-label">Testimonials</div>
      <h2 className="testimonials-title">What Our Patients Say</h2>
      <p className="testimonials-subtitle">
        Real stories from real patients who trusted NovaCare for their health journey.
      </p>
    </div>

    <div className="testimonials-cards-row">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="testimonial-card">
              <img src={t.photo} alt={t.name} className="testimonial-photo" />
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-name">{t.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);


export default TestimonialsSection; 