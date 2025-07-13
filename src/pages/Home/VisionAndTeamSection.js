import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './VisionAndTeamSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { getdoctor } from '../../api/authService'; // make sure path is correct
import { AvatarGenerator, stringToColor } from '../../utils/AvatarGenerator';
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



const VisionAndTeamSection = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);
  const stats = [
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '2+', label: 'Years Experience' },
    { value: '1.2k+', label: 'Patients Treated' },
    { value: `${doctors.length}`, label: 'Expert Doctor' }
  ];

  const fetchDoctors = async () => {
    try {
      const res = await getdoctor(); // Fetch from your API
      setDoctors(res.data); // Update state with fetched doctors
    } catch (err) {
      console.error('Fetch error:', err);
      // fallback mock data (optional)
      setDoctors([]);
    }
  };



  return (
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
                {
                  d.photo ? (
                    <img src={d.photo} alt={d.full_name} className="visionteam-doctor-photo" />
                  ) : (
                    <div
                      className="initials-avatar"
                      style={{ backgroundColor: stringToColor(d?.full_name || '') }}
                    >
                      {AvatarGenerator(d?.full_name || '')}
                    </div>

                  )
                }

                <div className="visionteam-doctor-name">{d.full_name}</div>
                <div className="visionteam-doctor-specialty">{d.specialization}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VisionAndTeamSection;
