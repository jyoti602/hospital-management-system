import React from 'react';
import './Services.css';


const Services = () => {
  const serviceData = [
    {
      image: "../../../images/heart.jpg",
      title: 'Cardiology',
      desc: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    },
    {
      image: "../../images/orthopedics.jpg",
      title: 'Orthopedics',
      desc: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    },
    {
      image: "../../images/pulmonary.jpg",
      title: 'Pulmonary',
      desc: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    },
    {
      image: "../../images/neurology.jpg",
      title: 'Neurology',
      desc: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    },
    {
      image: "../../images/Dental Surgery.jpg",
      title: 'Dental Surgery',
      desc: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    },
    {
      image: "../../images/laboratory.jpg",
      title: 'Laboratory',
      desc: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
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
            <div>
              <img src={item.image} alt={item.title} height="50px" />
            </div>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button className="services-button">Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
