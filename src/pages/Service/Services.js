import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const serviceData = [
    {
      image: "/images/heart.jpg",
      title: 'Cardiology',
      desc: 'Cardiology is the medical specialty that deals with the diagnosis, treatment, and prevention of heart and blood vessel diseases.',
      route: '/cardiology',
    },
    {
      image: "/images/orthopedics.jpg",
      title: 'Orthopedics',
      desc: 'Orthopedics focuses on diagnosing and treating disorders of bones, joints, and muscles.',
      route: '/orthopedics',
    },
    {
      image: "/images/pulmonary.jpg",
      title: 'Pulmonary',
      desc: 'Pulmonary medicine deals with diseases of the lungs and respiratory system.',
      route: '/pulmonary',
    },
    {
      image: "/images/neurology.jpg",
      title: 'Neurology',
      desc: 'Neurology deals with disorders of the brain, spinal cord, and nerves.',
      route: '/neurology',
    },
    {
      image: "/images/Dental Surgery.jpg",
      title: 'Dental Surgery',
      desc: 'Dental Surgery involves treating diseases and injuries of the teeth and jaw.',
      route: '/dental',
    },
    {
      image: "/images/laboratory.jpg",
      title: 'Laboratory',
      desc: 'Laboratory medicine involves testing body samples to diagnose and monitor diseases.',
      route: '/laboratory',
    },
  ];

  return (
    <div className="services-container">
      <div className="services-title">
        <h1>Health Care Solutions</h1>
      </div>
      <div className="services">
        {serviceData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} height="120px" />
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button className="services-button" onClick={() => navigate(item.route)}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
