import React from "react";
import { useNavigate } from 'react-router-dom';
import "./OrthopedicSurgery.css";

const OrthopedicSurgery = () => {
     const navigate = useNavigate();
  return (
    <div className="ortho-container">
      <div className="ortho-header">
        <h1>Orthopedic Services Overview</h1>
        <p>
          Orthopedics focuses on the diagnosis and treatment of the musculoskeletal system,
          which includes bones, joints, ligaments, tendons, and muscles.
        </p>
      </div>

      <div className="ortho-image-section">
        <img src="../../../images/Orthopedic.png" alt="Orthopedic Diagram" className="ortho-main-img" />
      </div>

      <div className="ortho-content">
        <h2>Common Bone Problems</h2>
        <ul>
          <li>Bone deformities, infections, and tumors</li>
          <li>Fractures, nonunions, and malunions</li>
          <li>Spinal deformities and need for amputation</li>
        </ul>

        <h2>Joint Conditions</h2>
        <ul>
          <li>Arthritis, bursitis, dislocations</li>
          <li>Joint pain, swelling, and ligament tears</li>
        </ul>

        <h2>Area-Specific Diagnoses</h2>
        <p><strong>Ankle & Foot:</strong> Bunions, heel pain, fractures, sprains</p>
        <p><strong>Hand & Wrist:</strong> Fractures, tendon injuries, carpal tunnel</p>
        <p><strong>Shoulder:</strong> Rotator cuff tears, dislocations, frozen shoulder</p>
        <p><strong>Knee:</strong> Meniscus injuries, ligament tears, tendinitis</p>
        <p><strong>Elbow:</strong> Bursitis, tendinitis, fractures</p>
        <p><strong>Spine:</strong> Herniated discs, scoliosis, spinal cord injuries</p>

        <h2>Diagnosis & Treatments</h2>
        <ul>
          <li>Imaging: X-rays, CT, MRI, bone scans</li>
          <li>Injections for pain relief and inflammation</li>
          <li>Surgical procedures like arthroplasty, joint fusion, spinal surgery</li>
        </ul>

        <h2>Advanced Techniques</h2>
        <p>Minimally invasive surgery, external fixation, and bone grafting technologies.</p>

        <h2>Orthopedic Team</h2>
        <ul>
          <li>Orthopedic surgeons, physiatrists, sports medicine physicians</li>
          <li>Neurologists, pain specialists, physical therapists, counselors</li>
        </ul>
          </div>
           <button className="back-btn" onClick={() => navigate('/Services')}>
          ← Back to Service
          </button>
    </div>
  );
};

export default OrthopedicSurgery;
