import React, { useEffect, useState } from "react";
import "./ServiceSlider.css";

export default function ServiceSlider() {
  // Slider items linked to Documentation card IDs
  const items = [
    { id: 'oupatient', text: 'Outpatient Management' },
    { id: 'inpatient', text: 'Inpatient Management' },
    { id: 'labs', text: 'LIMS (Labs)' },
    { id: 'pharmacy', text: 'Pharmacy Management' },
    { id: 'emr', text: 'Electronic Medical Records (EMR)' },
    { id: 'operation', text: 'Operation Theater Management' },
  ];

  const [activeId, setActiveId] = useState('');

  // Smooth scroll to Documentation card
  const scrollToCard = (id) => {
    const element = document.getElementById(id);
    const headerOffset = 90; // Adjust to header height
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveId(id); // Update active slider item on click
    }
  };

  // Track which card is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible triggers active
    );

    items.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      items.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [items]);

  // Duplicate items for continuous scrolling effect
  const doubledItems = items.concat(items);

  return (
    <div className="service-slider-section bg-linear py-3">
      <div className="horizontal-slide d-flex">
        <div className="slide-list d-flex gap-4 align-items-center">
          {doubledItems.map((t, idx) => (
            <div
              key={idx}
              className={`p-3 px-4 d-flex align-items-center service-item ${activeId === t.id ? 'active-slider' : ''}`}
              onClick={() => scrollToCard(t.id)}
              style={{ cursor: 'pointer' }}
            >
              <h5 className="fw-bold text-white mb-0">{t.text}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
