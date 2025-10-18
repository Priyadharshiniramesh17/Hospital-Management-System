import React, { useState } from "react";
import "./PatientReview.css";

export default function PatientReview() {
  const [reviews] = useState([
    { name: "Howard Tanner", role: "C.E.O", comment: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", img: "https://shreethemes.in/doctris/layouts/assets/images/client/01.jpg" },
    { name: "Wendy Filson", role: "C.E.O", comment: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", img: "https://shreethemes.in/doctris/layouts/assets/images/client/02.jpg" },
    { name: "Faye Bridger", role: "C.E.O", comment: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", img: "https://shreethemes.in/doctris/layouts/assets/images/client/03.jpg" },
    { name: "Ronald Curtis", role: "C.E.O", comment: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", img: "https://shreethemes.in/doctris/layouts/assets/images/client/04.jpg" },
    { name: "Melissa Hibner", role: "C.E.O", comment: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", img: "https://shreethemes.in/doctris/layouts/assets/images/client/05.jpg" },
    { name: "Randall Case", role: "C.E.O", comment: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", img: "https://shreethemes.in/doctris/layouts/assets/images/client/06.jpg" },
    { name: "Jerry Morena", role: "C.E.O", comment: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", img: "https://shreethemes.in/doctris/layouts/assets/images/client/07.jpg" },
    { name: "Lester McNally", role: "C.E.O", comment: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", img: "https://shreethemes.in/doctris/layouts/assets/images/client/08.jpg" },
  ]);

  return (
    <div className="patient-review">
      <h2>Patients Review</h2>

      <div className="review-cards">
        {reviews.map((r, idx) => (
          <div key={idx} className="review-card">
            <div className="review-header">
              <img src={r.img} alt={r.name} className="review-img" />
              <div>
                <h4>{r.name}</h4>
                <span>{r.role}</span>
              </div>
            </div>
            <p className="review-comment">{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
