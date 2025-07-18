import React, { useEffect, useState } from 'react';
import './TestimonialsSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { getTestimonials } from '../../api/authService';
import { AvatarGenerator, stringToColor } from '../../utils/AvatarGenerator';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [expandedStates, setExpandedStates] = useState({});

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonials();
        console.log("Fetched testimonials:", response);
        setTestimonials(response.data || response);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const toggleExpanded = (idx) => {
    setExpandedStates((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
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
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => {
            const isLong = t.message?.split(' ').length > 20;
            const isExpanded = expandedStates[idx];

            return (
              <SwiperSlide key={idx}>
                <div className="testimonial-card">
                  <div
                    className="initials-avatar"
                    style={{ backgroundColor: stringToColor(t?.name || '') }}
                  >
                    {AvatarGenerator(t?.name || '')}
                  </div>

                  <p className={`testimonial-quote ${!isExpanded && isLong ? 'truncated' : ''}`}>
                    “{t.message}”
                  </p>

                  {isLong && (
                    <button
                      className="read-more-btn"
                      onClick={() => toggleExpanded(idx)}
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  )}

                  <div className="testimonial-name">{t.name}</div>
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
