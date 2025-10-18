import React, { useState } from "react";
import "./DoctorAppointment.css";

export default function DoctorAppointment({ darkMode }) {
  const [appointments] = useState([
    {
      id: 1,
      name: "Howard Tanner",
      age: 25,
      gender: "Male",
      department: "Cardiology",
      date: "20th Dec 2020",
      time: "11:00 AM",
      doctor: "Dr. Calvin Carlo",
      fees: "$50/Patient",
    },
    {
      id: 2,
      name: "Wendy Filson",
      age: 28,
      gender: "Female",
      department: "Gynecology",
      date: "20th Dec 2020",
      time: "11:00 AM",
      doctor: "Dr. Cristino Murphy",
      fees: "$50/Patient",
    },
    {
      id: 3,
      name: "Faye Bridger",
      age: 28,
      gender: "Female",
      department: "Psychotherapy",
      date: "20th Dec 2020",
      time: "11:00 AM",
      doctor: "Dr. Alia Reddy",
      fees: "$50/Patient",
    },
    {
      id: 4,
      name: "Ronald Curtis",
      age: 25,
      gender: "Male",
      department: "Orthopedic",
      date: "20th Dec 2020",
      time: "11:00 AM",
      doctor: "Dr. Toni Kovar",
      fees: "$50/Patient",
    },
    {
      id: 5,
      name: "Melissa Hibner",
      age: 28,
      gender: "Female",
      department: "Dental",
      date: "20th Dec 2020",
      time: "11:00 AM",
      doctor: "Dr. Jessica McFarlane",
      fees: "$50/Patient",
    },
    {
      id: 6,
      name: "Randall Case",
      age: 25,
      gender: "Male",
      department: "Orthopedic",
      date: "20th Dec 2020",
      time: "11:00 AM",
      doctor: "Dr. Toni Kovar",
      fees: "$50/Patient",
    },
    {
      id: 7,
      name: "Jerry Morena",
      age: 25,
      gender: "Male",
      department: "Dentist",
      date: "20th Dec 2020",
      time: "11:00 AM",
      doctor: "Dr. Jessica McFarlane",
      fees: "$50/Patient",
    },
    {
      id: 8,
      name: "Lester McNally",
      age: 25,
      gender: "Male",
      department: "Gastrology",
      date: "20th Dec 2020",
      time: "11:00 AM",
      doctor: "Dr. Elsie Sherman",
      fees: "$50/Patient",
    },
    {
      id: 9,
      name: "Christopher Burrell",
      age: 28,
      gender: "Female",
      department: "Urology",
      date: "20th Dec 2020",
      time: "11:00 AM",
      doctor: "Dr. Bertha Magers",
      fees: "$50/Patient",
    },
    {
      id: 10,
      name: "Mary Skeens",
      age: 28,
      gender: "Female",
      department: "Neurology",
      date: "20th Dec 2020",
      time: "11:00 AM",
      doctor: "Dr. Louis Batey",
      fees: "$50/Patient",
    },
  ]);

  return (
    <div className={`doctor-dashboard ${darkMode ? "dark" : ""}`}>
      <h2>Appointment</h2>
      <h4 className="subtitle">Today</h4>

      <table className="appointment-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt.id}>
              <td>{appt.id}</td>
              <td>{appt.name}</td>
              <td>{appt.age}</td>
              <td>{appt.gender}</td>
              <td>{appt.department}</td>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
              <td>{appt.doctor}</td>
              <td>{appt.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <span>Showing 1 - 10 out of 50</span>
        <div className="pages">
          <button>Prev</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
