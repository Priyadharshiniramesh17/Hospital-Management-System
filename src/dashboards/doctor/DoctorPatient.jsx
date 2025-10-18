import React, { useState, useRef } from "react";
import "./DoctorPatient.css";

export default function DoctorPatient() {
  const [patients] = useState([
    { name: "Howard Tanner", gender: "Male", age: 25, country: "USA", diagnosis: "Heart Attack", color: "#d00012", email: "howard@example.com", phone: "+152 534-468-854", bio: "Patient has a history of heart disease." },
    { name: "Wendy Filson", gender: "Female", age: 25, country: "USA", diagnosis: "Heart Attack", color: "#d00012", email: "wendy@example.com", phone: "+152 534-468-855", bio: "Patient needs follow-up care." },
    { name: "Faye Bridger", gender: "Female", age: 25, country: "USA", diagnosis: "Heart Attack", color: "#d00012", email: "faye@example.com", phone: "+152 534-468-856", bio: "Patient has stable condition." },
    { name: "Ronald Curtis", gender: "Male", age: 25, country: "USA", diagnosis: "Heart Attack", color: "#d00012", email: "ronald@example.com", phone: "+152 534-468-857", bio: "Requires regular check-ups." },
    { name: "Melissa Hibner", gender: "Female", age: 25, country: "USA", diagnosis: "Heart Attack", color: "#d00012", email: "melissa@example.com", phone: "+152 534-468-858", bio: "Patient recovering from surgery." },
    { name: "Randall Case", gender: "Male", age: 25, country: "USA", diagnosis: "Heart Attack", color: "#d00012", email: "randall@example.com", phone: "+152 534-468-859", bio: "Under observation for 24 hours." },
    { name: "Jerry Morena", gender: "Male", age: 25, country: "USA", diagnosis: "Heart Attack", color: "#d00012", email: "jerry@example.com", phone: "+152 534-468-860", bio: "Needs medication adjustment." },
    { name: "Lester McNally", gender: "Male", age: 25, country: "USA", diagnosis: "Heart Attack", color: "#d00012", email: "lester@example.com", phone: "+152 534-468-861", bio: "Patient stable and discharged." },
    { name: "Christopher Burrell", gender: "Male", age: 25, country: "USA", diagnosis: "Heart Attack", color: "#d00012", email: "christopher@example.com", phone: "+152 534-468-862", bio: "Patient undergoing physiotherapy." },
    { name: "Mary Skeens", gender: "Female", age: 25, country: "USA", diagnosis: "Heart Attack", color: "#d00012", email: "mary@example.com", phone: "+152 534-468-863", bio: "Monitoring diet and exercise." },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 4;

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const modalRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);
  const totalPages = Math.ceil(patients.length / patientsPerPage);

  const openModal = (patient) => {
    setSelectedPatient(patient);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  const handleMouseDown = (e) => {
    setDragging(true);
    const rect = modalRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e) => {
    if (dragging && modalRef.current) {
      modalRef.current.style.left = `${e.clientX - offset.x}px`;
      modalRef.current.style.top = `${e.clientY - offset.y}px`;
    }
  };

  const handleMouseUp = () => setDragging(false);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="doctor-patient" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <h2>Patients List</h2>

      <div className="patient-cards">
        {currentPatients.map((p, idx) => (
          <div className="patient-card" key={idx} style={{ borderLeft: `5px solid ${p.color}` }}>
            <h3>{p.name}</h3>
            <p><strong>Gender:</strong> {p.gender}</p>
            <p><strong>Age:</strong> {p.age} years</p>
            <p><strong>Country:</strong> {p.country}</p>
            <p><strong>Diagnosis:</strong> {p.diagnosis}</p>
            <button className="view-btn" onClick={() => openModal(p)}>View Details</button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} className={currentPage === i + 1 ? "active" : ""} onClick={() => goToPage(i + 1)}>{i + 1}</button>
        ))}
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>

      {modalOpen && selectedPatient && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            style={{ cursor: dragging ? "grabbing" : "grab" }}
          >
            <h3>{selectedPatient.name}</h3>
            <p><strong>Gender:</strong> {selectedPatient.gender}</p>
            <p><strong>Age:</strong> {selectedPatient.age} years</p>
            <p><strong>Country:</strong> {selectedPatient.country}</p>
            <p><strong>Diagnosis:</strong> {selectedPatient.diagnosis}</p>
            <p><strong>Phone:</strong> {selectedPatient.phone}</p>
            <p><strong>Email:</strong> {selectedPatient.email}</p>
            <p><strong>Bio:</strong> {selectedPatient.bio}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
