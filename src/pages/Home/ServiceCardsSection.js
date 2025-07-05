import React from 'react';
import { GiKneeCap, GiStomach, GiHeartOrgan, GiBrain, GiLungs, GiTooth } from 'react-icons/gi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './ServiceCardsSection.css';
import 'swiper/css';
import 'swiper/css/pagination';
const services = [
  {
    icon: <GiKneeCap className="service-icon" />, // Orthopedics
    title: 'Orthopedics',
    desc: "Monitor your child's growth and development to ensure their health at every stage.",
    link: '#',
  },
  {
    icon: <GiStomach className="service-icon" />, // Gastroenterology
    title: 'Gastroenterology',
    desc: 'Evaluate your digestive system to manage and treat digestive conditions.',
    link: '#',
  },
  {
    icon: <GiHeartOrgan className="service-icon" />, // Cardiology
    title: 'Cardiology',
    desc: 'Analyze heart health and provide care to treat cardiovascular diseases.',
    link: '#',
  },
  {
    icon: <GiBrain className="service-icon" />, // Neurology
    title: 'Neurology',
    desc: 'Comprehensive care for brain and nervous system disorders.',
    link: '#',
  },
  {
    icon: <GiLungs className="service-icon" />, // Pulmonology
    title: 'Pulmonology',
    desc: 'Diagnosis and treatment for lung and respiratory conditions.',
    link: '#',
  },
  {
    icon: <GiTooth className="service-icon" />, // Dental Surgery
    title: 'Dental Surgery',
    desc: 'Advanced dental care and oral surgery for a healthy smile.',
    link: '#',
  },
];

const ServiceCardsSection = () => (
  <section className="service-cards-section" id="services">
    <div className="services-header">
      <div className="services-label">Services</div>
      <h2 className="services-title">Quality Healthcare Services You Can Trust</h2>
    </div>

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
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <div className="service-card-home">
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href={service.link} className="service-learn-more">
                Learn More <span>↗</span>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default ServiceCardsSection; 