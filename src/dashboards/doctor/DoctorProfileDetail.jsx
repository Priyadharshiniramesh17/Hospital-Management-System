import React, { useState } from "react";
import "./DoctorProfileDetail.css";

export default function DoctorProfileDetail({ darkMode }) {
  const [teamMembers] = useState([
    { name: "Jessica McFarlane", title: "M.B.B.S, Dentist", rating: 5, location: "63, PG Shustoke, UK", time: "Mon: 2:00PM - 6:00PM", fee: "$75 USD / Visit", img: "https://shreethemes.in/doctris/layouts/assets/images/doctors/05.jpg" },
    { name: "Elsie Sherman", title: "M.B.B.S, Gastrologist", rating: 5, location: "63, PG Shustoke, UK", time: "Mon: 2:00PM - 6:00PM", fee: "$75 USD / Visit", img: "https://shreethemes.in/doctris/layouts/assets/images/doctors/06.jpg" },
    { name: "Bertha Magers", title: "M.B.B.S, Urologist", rating: 5, location: "63, PG Shustoke, UK", time: "Mon: 2:00PM - 6:00PM", fee: "$75 USD / Visit", img: "https://shreethemes.in/doctris/layouts/assets/images/doctors/07.jpg" },
    { name: "Louis Batey", title: "M.B.B.S, Neurologist", rating: 5, location: "63, PG Shustoke, UK", time: "Mon: 2:00PM - 6:00PM", fee: "$75 USD / Visit", img: "https://shreethemes.in/doctris/layouts/assets/images/doctors/08.jpg" },
  ]);

  const timetable = [
    { day: "Monday", time: "8:00 - 20:00" },
    { day: "Tuesday", time: "8:00 - 20:00" },
    { day: "Wednesday", time: "8:00 - 20:00" },
    { day: "Thursday", time: "8:00 - 20:00" },
    { day: "Friday", time: "8:00 - 20:00" },
    { day: "Saturday", time: "8:00 - 18:00" },
    { day: "Sunday", time: "8:00 - 14:00" },
  ];

  return (
    <div className={`doctor-profile ${darkMode ? "dark" : ""}`}>
      {/* Header */}
      <div className="profile-greeting">
        <p>25th December, 2020 - 5:00PM</p>
        <h3>Good Morning !</h3>
        <h2>Dr. Christopher Burrell</h2>
        <p>Great doctor if you need your family member to get effective immediate assistance, emergency treatment, or a simple consultation.</p>
        <p><strong>You have 18 patients remaining today!</strong></p>
      </div>

      {/* Overview */}
      <div className="profile-section">
        <h3>Overview</h3>
        <p>Dr. Christopher Burrell, Gynecologist, Ph.D. A gynecologist is a surgeon who specializes in the female reproductive system, which includes the cervix, fallopian tubes, ovaries, uterus, vagina, and vulva. Menstrual problems, contraception, sexuality, menopause, and infertility issues are diagnosed and treated by a gynecologist; most gynecologists also provide prenatal care, and some provide primary care.</p>
      </div>

      {/* Specialties */}
      <div className="profile-section">
        <h3>Specialties</h3>
        <ul>
          <li>Women's health services</li>
          <li>Pregnancy care</li>
          <li>Surgical procedures</li>
          <li>Specialty care</li>
        </ul>
      </div>

      {/* Team Members */}
      <div className="profile-section">
        <h3>My Team</h3>
        <div className="team-members">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card">
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.title}</p>
              <p>{"⭐".repeat(member.rating)}</p>
              <p>{member.location}</p>
              <p>{member.time}</p>
              <p>{member.fee}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="profile-section">
        <h3>Experience</h3>
        <ul>
          <li>2010 - 2014: Master Of Science, X.Y.Z Hospital (NZ)</li>
          <li>2014 - 2016: Gynecology Test, X.Y.Z Hospital (NZ)</li>
          <li>2016 - 2019: Master Of Medicine, X.Y.Z Hospital (NZ)</li>
          <li>2019 - 2020: Orthopedics, X.Y.Z Hospital (NZ)</li>
          <li>2020 - Present: Gynecologist (Final), X.Y.Z Hospital (NZ)</li>
        </ul>
      </div>

      {/* Reviews */}
      <div className="profile-section">
        <h3>Reviews</h3>
        <blockquote>"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is said to have originated in the 16th century." - Thomas Israel, C.E.O</blockquote>
        <blockquote>"The advantage of its Latin origin and the relative meaninglessness of Lorem Ipsum is that the text does not attract attention to itself." - Carl Oliver, P.A</blockquote>
      </div>

      {/* Time Table */}
      <div className="profile-section">
        <h3>Time Table</h3>
        <div className="timetable">
          {timetable.map((slot, idx) => (
            <div key={idx} className="timetable-slot">
              <strong>{slot.day}:</strong> {slot.time}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="profile-section">
        <h3>Contact</h3>
        <p><strong>Phone:</strong> +152 534-468-854</p>
        <p><strong>Email:</strong> contact@example.com</p>
      </div>

      {/* Location Map */}
      <div className="profile-section">
        <h3>Location</h3>
        <div className="map-container">
          <iframe
            title="Doctor Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953735315316!3d-37.81627974202114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f6!2sX.Y.Z%20Hospital!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
