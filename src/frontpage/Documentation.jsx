import React, { useEffect, useState } from "react";
import "./Documentation.css";

export default function Documentation() {
  const cards = [
    { id: 'oupatient', img: "https://ezovion.com/wp-content/uploads/2022/08/Outpatient-Management-Solutions-01.webp", title: 'Outpatient Management', text: 'Patients can book appointments with doctors online, choosing date and time easily.' },
    { id: 'inpatient', img: "https://ezovion.com/wp-content/uploads/2023/08/Real-time-ward-management-patient-movement-occupancy-rate-and-ward-analytics-01.png.webp", title: 'Inpatient Management', text: 'Patients can view their medical history, prescriptions, and lab reports in one place.' },
    { id: 'labs', img: "https://ezovion.com/wp-content/uploads/2022/08/bnvcngf.webp", title: 'LIMS (Labs)', text: 'Doctors can manage their schedules, appointments, and patient records efficiently.' },
    { id: 'pharmacy', img: "https://ezovion.com/wp-content/uploads/2022/12/Pharmacy-Management-01.png", title: 'Pharmacy Management', text: 'Admins can oversee doctors, patients, appointments, and billing easily.' },
    { id: 'emr', img: "https://ezovion.com/wp-content/uploads/2022/08/Electronic-Health-Record-Management-01.webp", title: 'Electronic Medical Records (EMR)', text: 'Store and access patient medical history securely and efficiently.' },
    { id: 'operation', img: "https://ezovion.com/wp-content/uploads/2023/01/MicrosoftTeams-image-1-3.png.webp", title: 'Operation Theater Management', text: 'Doctors can generate, update, and share prescriptions digitally.' },
  ];

  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    cards.forEach(card => {
      const el = document.getElementById(card.id);
      if (el) observer.observe(el);
    });

    return () => {
      cards.forEach(card => {
        const el = document.getElementById(card.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [cards]);

  return (
    <div className="documentation-section position-relative py-5" id="documentation">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Solutions</h2>
          <p className="text-muted">At MediCare, we provide a comprehensive platform that streamlines hospital 
    operations, improves patient care, and ensures efficient management of resources. 
    Our solution integrates modern technology with user-friendly interfaces, 
    making healthcare management simpler and smarter.</p>
        </div>

        <div className="row justify-content-center g-3">
          {cards.map(c => (
            <div key={c.id} id={c.id} className="col-xl-3 col-md-6">
              <div className={`documentation-item border rounded-2 text-center p-4 h-100 ${activeId === c.id ? 'active-card' : ''}`}>
                <div className="mb-3">
                  <img src={c.img} alt={c.title} />
                </div>
                <h6 className="mb-2">{c.title}</h6>
                <p className="line-clamp-3">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
