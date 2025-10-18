import React, { useState } from "react";
import "./RoomAllotment.css";

export default function RoomAllotment() {
  const [rooms, setRooms] = useState([
    { id: 101, type: "Single", patient: "John Smith", status: "Occupied" },
    { id: 102, type: "Double", patient: "Emily Davis", status: "Available" },
    { id: 103, type: "ICU", patient: "Robert Wilson", status: "Occupied" },
    { id: 104, type: "Single", patient: "Nisha Sharma", status: "Available" },
    { id: 105, type: "Deluxe", patient: "Suresh Kumar", status: "Occupied" },
  ]);

  return (
    <main className="rooms-page">
      <header className="rooms-header">
        <h1>Room Allotment</h1>
        <p>Manage hospital rooms and their occupancy status.</p>
      </header>

      <section className="rooms-cards">
        {rooms.map((room) => (
          <div className="room-card" key={room.id}>
            <div className="room-number">Room {room.id}</div>
            <div className="room-type">{room.type}</div>
            <div className={`room-status ${room.status.replace(/\s/g, "-").toLowerCase()}`}>
              {room.status}
            </div>
            {room.status === "Occupied" && <div className="room-patient">Patient: {room.patient}</div>}
            <div className="room-actions">
              <button className="btn view-btn">View</button>
              <button className="btn edit-btn">Edit</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
