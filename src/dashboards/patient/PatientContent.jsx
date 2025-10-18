import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./PatientContent.css";

export default function PatientContent() {
  const summaryData = [
    { name: "Appointments", value: 24 },
    { name: "Online Consultations", value: 36 },
    { name: "Blood Pressure", value: 89 },
    { name: "Heart Rate", value: 87 },
  ];

  const doctors = [
    { name: "Dr. Mick Thompson", specialty: "Cardiologist", bookings: 20, img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Dr. Sarah Johnson", specialty: "Orthopedic Surgeon", bookings: 15, img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Dr. Emily Carter", specialty: "Pediatrician", bookings: 12, img: "https://randomuser.me/api/portraits/women/55.jpg" },
    { name: "Dr. David Lee", specialty: "Gynecologist", bookings: 8, img: "https://randomuser.me/api/portraits/men/36.jpg" },
    { name: "Dr. Anna Kim", specialty: "Psychiatrist", bookings: 6, img: "https://randomuser.me/api/portraits/women/33.jpg" },
  ];

  const prescriptions = [
    { title: "Cardiology Prescription", date: "20 Apr 2025", fileImg: "https://img.icons8.com/color/48/000000/pdf.png" },
    { title: "Dentist Prescription", date: "25 Mar 2025", fileImg: "https://img.icons8.com/color/48/000000/pdf.png" },
    { title: "Dentist Prescription", date: "16 Mar 2025", fileImg: "https://img.icons8.com/color/48/000000/pdf.png" },
    { title: "Dentist Prescription", date: "12 Feb 2025", fileImg: "https://img.icons8.com/color/48/000000/pdf.png" },
    { title: "Cardiology Prescription", date: "04 Jan 2025", fileImg: "https://img.icons8.com/color/48/000000/pdf.png" },
  ];

  const recentActivity = [
    { title: "Appointment with Primary Care Physician", date: "24 Mar 2025, 10:55 AM" },
    { title: "Blood Pressure Check (Home Monitoring)", date: "24 Apr 2025, 11:00 AM" },
    { title: "Physical Therapy Session Knee strengthening exercises", date: "24 Apr 2025, 11:00 AM" },
    { title: "Discuss dietary changes to manage blood sugar levels and weight", date: "24 Apr 2025, 11:00 AM" },
  ];

  const vitals = [
    { name: "Weight", value: "100 Kg", img: "https://img.icons8.com/color/48/000000/weight.png" },
    { name: "Height", value: "154 Cm", img: "https://img.icons8.com/color/48/000000/height.png" },
    { name: "BMI", value: "19.2 kg/cm", img: "https://img.icons8.com/color/48/000000/bmi.png" },
    { name: "Pulse", value: "97%", img: "https://img.icons8.com/color/48/000000/heart.png" },
    { name: "SPO2", value: "98%", img: "https://img.icons8.com/color/48/000000/oxygen.png" },
    { name: "Temperature", value: "101 C", img: "https://img.icons8.com/color/48/000000/temperature.png" },
  ];

  const consultationData = [
    { department: "Cardiology", value: 12 },
    { department: "Orthopedic", value: 8 },
    { department: "Pediatrics", value: 6 },
    { department: "Gynecology", value: 4 },
    { department: "Psychiatry", value: 2 },
  ];

  const recentTransactions = [
    { doctor: "Dr. John Smith", specialty: "Neurosurgeon", fee: "$450", status: "Success", img: "https://randomuser.me/api/portraits/men/31.jpg" },
    { doctor: "Dr. Lisa White", specialty: "Oncologist", fee: "$350", status: "Success", img: "https://randomuser.me/api/portraits/women/30.jpg" },
    { doctor: "Dr. Patricia Brown", specialty: "Pulmonologist", fee: "$400", status: "Failed", img: "https://randomuser.me/api/portraits/women/29.jpg" },
    { doctor: "Dr. Rachel Green", specialty: "Urologist", fee: "$550", status: "Success", img: "https://randomuser.me/api/portraits/women/28.jpg" },
    { doctor: "Dr. Michael Smith", specialty: "Cardiologist", fee: "$600", status: "Success", img: "https://randomuser.me/api/portraits/men/30.jpg" },
  ];

  const recentAppointments = [
    { doctor: "Dr. Mick Thompson", specialty: "Cardiologist", datetime: "27 May 2025 - 09:30 AM", fee: "$400", mode: "Online", status: "Checked Out", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { doctor: "Dr. Sarah Johnson", specialty: "Orthopedic Surgeon", datetime: "26 May 2025 - 10:15 AM", fee: "$370", mode: "Online", status: "Checked in", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { doctor: "Dr. Emily Carter", specialty: "Pediatrician", datetime: "25 May 2025 - 02:40 PM", fee: "$450", mode: "In-Person", status: "Cancelled", img: "https://randomuser.me/api/portraits/women/55.jpg" },
  ];

  return (
    <div className="patient-content">
      <h2>Patient Dashboard</h2>

      {/* Summary Graph */}
      <div className="section summary-graph">
        <h3>Overview</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={summaryData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="value" fill="#11837a" radius={[5,5,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* My Doctors */}
      <div className="section doctors-section">
        <h3>My Doctors</h3>
        <div className="doctors-list">
          {doctors.map((d, idx) => (
            <div className="doctor-card" key={idx}>
              <img src={d.img} alt={d.name} />
              <h4>{d.name}</h4>
              <p>{d.specialty}</p>
              <span>{d.bookings} Bookings</span>
            </div>
          ))}
        </div>
      </div>

      {/* Prescriptions */}
      <div className="section prescriptions-section">
        <h3>Prescriptions</h3>
        <div className="prescriptions-list">
          {prescriptions.map((p, idx) => (
            <div className="prescription-card" key={idx}>
              <div>
                <strong>{p.title}</strong>
                <span>{p.date}</span>
              </div>
              <img src={p.fileImg} alt="Download" className="download-icon"/>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="section recent-activity-section">
        <h3>Recent Activity</h3>
        <ul className="activity-list">
          {recentActivity.map((a, idx) => (
            <li key={idx}>
              <p>{a.title}</p>
              <span>{a.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Vitals */}
      <div className="section vitals-section">
        <h3>Vitals</h3>
        <div className="vitals-list">
          {vitals.map((v, idx) => (
            <div className="vital-card" key={idx}>
              <img src={v.img} alt={v.name} />
              <p>{v.name}</p>
              <span>{v.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation By Department Graph */}
      <div className="section consultation-section">
        <h3>Consultation By Department</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={consultationData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
            <XAxis dataKey="department" />
            <Tooltip />
            <Bar dataKey="value" fill="#5387a7" radius={[5,5,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Transactions */}
      <div className="section transactions-section">
        <h3>Recent Transactions</h3>
        <div className="transactions-list">
          {recentTransactions.map((t, idx) => (
            <div className={`transaction-card ${t.status.toLowerCase()}`} key={idx}>
              <img src={t.img} alt={t.doctor} />
              <div>
                <h4>{t.doctor}</h4>
                <p>{t.specialty}</p>
              </div>
              <div>
                <p>{t.fee}</p>
                <span>{t.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="section appointments-section">
        <h3>Recent Appointments</h3>
        <table>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Date & Time</th>
              <th>Fee</th>
              <th>Mode</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentAppointments.map((a, idx) => (
              <tr key={idx}>
                <td><img src={a.img} alt={a.doctor} /> {a.doctor}</td>
                <td>{a.datetime}</td>
                <td>{a.fee}</td>
                <td>{a.mode}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
