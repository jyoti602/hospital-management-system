import React, { useEffect, useState } from 'react';
import './TestimonialsSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { getTestimonials } from '../../api/authService';
import { AvatarGenerator, stringToColor } from '../../utils/AvatarGenerator';

const MAX_CHAR_LIMIT = 60;

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [expandedStates, setExpandedStates] = useState({});

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonials();
        setTestimonials(response?.data || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const toggleExpanded = (index) => {
    setExpandedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
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
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => {
            const message = testimonial?.message || '';
            const name = testimonial?.name || 'Anonymous';
            const isLong = message.length > MAX_CHAR_LIMIT;
            const isExpanded = expandedStates[index];

            const displayMessage =
              isExpanded || !isLong
                ? message
                : `${message.slice(0, MAX_CHAR_LIMIT)}...`;

            return (
              <SwiperSlide key={`testimonial-${index}`}>
                <div className="testimonial-card">
                  <div
                    className="initials-avatar"
                    style={{ backgroundColor: stringToColor(name) }}
                  >
                    {AvatarGenerator(name)}
                  </div>

                  <p className="testimonial-quote">“{displayMessage}”</p>

                  {isLong && (
                    <button
                      className="read-more-btn"
                      onClick={() => toggleExpanded(index)}
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  )}

                  <div className="testimonial-name">{name}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
