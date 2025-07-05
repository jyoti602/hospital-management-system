import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './VisionAndTeamSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const visionFeatures = [
  {
    title: 'Gastroenterology',
    desc: 'Analyze heart health and provide care to treat cardiovascular diseases.'
  },
  {
    title: '24/7 Customer Support',
    desc: 'Analyze heart health and provide care to treat cardiovascular diseases.'
  }
];

const stats = [
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '30+', label: 'Years Experience' },
  { value: '1.2k+', label: 'Patients Treated' },
  { value: '80', label: 'Expert Doctor' }
];

const doctors = [
  {
    name: 'Maxine Davis',
    specialty: 'Dermatologist',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Maxine Davis',
    specialty: 'Dermatologist',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Maxine Davis',
    specialty: 'Dermatologist',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg'
  },
  {
    name: 'Maxine Davis',
    specialty: 'Dermatologist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg'
  }
];

const VisionAndTeamSection = () => (
  <section className="visionteam-section">
    {/* Vision Row */}
    <div className="vision-row">
      <div className="vision-left">
        <div className="vision-label">Our Vision</div>
        <h2 className="vision-title">Finding Health Solutions With Top Experts</h2>
        <button className="vision-cta-btn">Learn More <span className="arrow">→</span></button>
      </div>
      <div className="vision-right">
        {visionFeatures.map((f, idx) => (
          <div className="vision-feature-card" key={idx}>
            <FaCheckCircle className="vision-check" />
            <div>
              <div className="vision-feature-title">{f.title}</div>
              <div className="vision-feature-desc">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Stats Row */}
    <div className="visionteam-stats-row">
      {stats.map((s, idx) => (
        <div className="visionteam-stat" key={idx}>
          <div className="visionteam-stat-value">{s.value}</div>
          <div className="visionteam-stat-label">{s.label}</div>
        </div>
      ))}
    </div>

    {/* Team Row */}
    <div className="visionteam-team-header">
      <div className="visionteam-team-label">Expert</div>
      <h2 className="visionteam-team-title">Meet Our Expert Medical Team Of Dedicated Specialists</h2>
    </div>
    
    <div className="visionteam-team-row">
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
        {doctors.map((d, idx) => (
          <SwiperSlide key={idx}>
            <div className="visionteam-doctor-card">
              <img src={d.photo} alt={d.name} className="visionteam-doctor-photo" />
              <div className="visionteam-doctor-name">{d.name}</div>
              <div className="visionteam-doctor-specialty">{d.specialty}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);


export default VisionAndTeamSection; 