import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./DoctorContent.css";

export default function DoctorContent() {
  const chartData = [
    { title: "Appointment", percent: 15, color: "#00b894" },
    { title: "Patients", percent: 20, color: "#0984e3" },
    { title: "Urgent", percent: 5, color: "#fdcb6e" },
    { title: "Canceled", percent: -5, color: "#d63031" },
  ];

  const latestAppointments = [
    "Calvin Carlo",
    "Joya Khan",
    "Amelia Muli",
    "Nik Ronaldo",
    "Crista Joseph",
  ];

  const patientReviews = [
    {
      text: (
        <i>
          "It seems that only melodies in order to have a 'ready-made' text to
          sing with the melody of the originalthe 'Lorem Ipsum', which is said
          to have originated century."
        </i>
      ),
      author: "Thomas Israel C.E.O",
    },
    {
      text: (
        <i>
          "The advantage of its writing melodies in order to have a 'ready-made'
          text to sing with the melody and the to itself or distract the
          viewer's attention from the layout."
        </i>
      ),
      author: "Carl Oliver P.A",
    },
    {
      text: (
        <i>
          "There is now an in order to have a 'ready-made' text to sing with the
          melody alternatives to the classic Lorem Ipsum texts are amusing."
        </i>
      ),
      author: "Barbara McIntosh M.D",
    },
  ];

  const infoCards = [
    { title: "New Messages", desc: "Due to its wide spread use as filler text", btnText: "Read more" },
    { title: "Latest Proposals", desc: "Due to its wide spread use as filler text", btnText: "View more" },
    { title: "Package Expiry", desc: "Due to its wide spread use as filler text", btnText: "Check here" },
    { title: "Saved Items", desc: "Due to its wide spread use as filler text", btnText: "View items" },
  ];

  // --- Patient Reviews Carousel ---
  const [currentReview, setCurrentReview] = useState(0);
  const nextReview = () => setCurrentReview((prev) => (prev + 1) % patientReviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);

  useEffect(() => {
    const interval = setInterval(() => nextReview(), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="doctor-dashboard">
      {/* Dashboard Graphs */}
      <div className="chart-grid">
        {chartData.map((item, index) => (
          <div className="chart-card" key={index}>
            <h3>{item.title}</h3>
            <p className={`percent ${item.percent < 0 ? "negative" : "positive"}`}>
              {item.percent > 0 ? "+" : ""}
              {item.percent}%
            </p>
            <p className="week-count">220+ Week</p>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={[{ name: item.title, value: Math.abs(item.percent) }]}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: "#555" }} />
                  <Tooltip formatter={(value) => `${item.percent > 0 ? "+" : "-"}${value}%`} />
                  <Bar dataKey="value" fill={item.color} radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Appointments (No Carousel) */}
      <div className="latest-appointments">
        <h3>Latest Appointments</h3>
        <p>Total: {latestAppointments.length} Patients</p>
        {latestAppointments.map((patient, idx) => (
          <div className="appointment-item" key={idx}>
            <img
              src={`https://i.pravatar.cc/50?img=${idx + 1}`}
              alt={patient}
              className="patient-img"
            />
            <div className="appointment-info">
              <span className="patient-name">{patient}</span>
              <span className="booking-date">Booking on 27th Nov, 2020</span>
            </div>
          </div>
        ))}
      </div>

      {/* Patient Reviews Carousel */}
      <div className="reviews-section">
        <h3>Patient's Review</h3>
        <div className="review-carousel">
          <button className="carousel-btn left" onClick={prevReview}>
            &#8249;
          </button>
          <div className="review-card">
            <p>{patientReviews[currentReview].text}</p>
            <small>- {patientReviews[currentReview].author}</small>
          </div>
          <button className="carousel-btn right" onClick={nextReview}>
            &#8250;
          </button>
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        {infoCards.map((card, idx) => (
          <div className="info-card" key={idx}>
            <h4>{card.title}</h4>
            <p>{card.desc}</p>
            <button>{card.btnText}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
