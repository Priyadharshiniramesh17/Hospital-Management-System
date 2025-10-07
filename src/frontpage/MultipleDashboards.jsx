import React from "react";
import "./MultipleDashboard.css";

export default function MultipleDashboards() {
  const templates = [
    { title: 'Complete Healthcare Solution', img: "https://media.istockphoto.com/id/1321617070/vector/health-medical-logo.jpg?s=612x612&w=0&k=20&c=sus8vhG3c__vCdvOBLDhuf2vPUgIAudIAeUBApU_7Ew=" },
    { title: 'Stable cloud solution', img: "https://media.istockphoto.com/id/1130281623/vector/clouds-isolate-blue-color-tone-icon-logo-vector-style-background-illustration.jpg?s=612x612&w=0&k=20&c=yZEmDGI-KU5-miWbKCOqcF69jYaqVFYrwIOzepX8uoA=" },
    { title: 'Patient-Centric Design', img: "https://thumbs.dreamstime.com/b/group-people-holding-hands-cross-symbol-showing-unity-faith-craft-minimalist-logo-healthcare-315284265.jpg" },
    { title: 'Established Trust', img: "https://t4.ftcdn.net/jpg/14/77/90/57/360_F_1477905753_8cKQBewOl0rJNwSXywczpiUz52AqMBjV.jpg" },
    { title: 'Secure & Reliable', img: "https://masterbundles.com/wp-content/uploads/2022/09/shield-9.png" },
    { title: 'Affordable', img: "https://us.123rf.com/450wm/graphicar8/graphicar82002/graphicar8200200060/140341995-creative-people-care-concept-logo-design-human-in-heart-logo-design-happy-people-vector.jpg?ver=6" },
  ];

  return (
    <div className="multiple-dashboard position-relative py-5" id="demo">
      <div className="container">
        <div className="section-header text-center mb-4">
          <h2 className="mb-2">
            Why MediCare?
          </h2>
          {/* <p>Our template is built on many platforms with the latest versions</p> */}
        </div>
        {/* New grid of circle images */}
        <div className="dashboard-images">
          {templates.map((t, i) => (
            <div key={i} className="text-center">
              <img src={t.img} alt={t.title} loading="lazy" />
              <p style={{ marginTop: '10px', fontWeight: '500' }}>{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}