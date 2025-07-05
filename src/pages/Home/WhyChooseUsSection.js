import React from 'react';
import { FaUserMd, FaRegSmile, FaShieldAlt, FaHeartbeat } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './WhyChooseUsSection.css';

const features = [
  {
    icon: <FaUserMd className="whychoose-icon" />,
    title: 'Expert Doctors',
    desc: 'Our team consists of highly qualified and experienced medical professionals dedicated to your health.',
  },
  {
    icon: <FaRegSmile className="whychoose-icon" />,
    title: 'Patient-Centered Care',
    desc: 'We prioritize your comfort and satisfaction, ensuring a compassionate and personalized experience.',
  },
  {
    icon: <FaShieldAlt className="whychoose-icon" />,
    title: 'Trusted & Secure',
    desc: 'Your privacy and safety are our top priorities, with strict standards for data and care security.',
  },
  {
    icon: <FaHeartbeat className="whychoose-icon" />,
    title: 'Advanced Technology',
    desc: 'We use the latest medical technology and evidence-based practices for the best outcomes.',
  },
];

const WhyChooseUsSection = () => (
  <section className="whychoose-section">
    <div className="whychoose-header">
      <div className="whychoose-label">Why Choose Us</div>
      <h2 className="whychoose-title">Your Health, Our Priority</h2>
      <p className="whychoose-subtitle">
        Discover what makes NovaCare the trusted choice for thousands of patients.
      </p>
    </div>

    {/* Swiper Slider */}
    <div className="whychoose-slider">
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
        {features.map((feature, idx) => (
          <SwiperSlide key={idx}>
            <div className="whychoose-card">
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default WhyChooseUsSection;
