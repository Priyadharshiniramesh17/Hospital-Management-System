import React, { useState } from "react";
import "./Inventory.css";

export default function Inventory() {
  const [items, setItems] = useState([
    { id: 1, name: "Syringe", quantity: 120, category: "Medical Supplies" },
    { id: 2, name: "Paracetamol", quantity: 350, category: "Medicine" },
    { id: 3, name: "Bandage Roll", quantity: 75, category: "Medical Supplies" },
    { id: 4, name: "Gloves", quantity: 500, category: "Consumables" },
    { id: 5, name: "Stethoscope", quantity: 12, category: "Equipment" },
  ]);

  return (
    <main className="inventory-page">
      <header className="inventory-header">
        <h1>Inventory Management</h1>
        <p>Track all hospital inventory items and quantities in real-time.</p>
      </header>

      <section className="inventory-cards">
        {items.map((item) => (
          <div className="inventory-card" key={item.id}>
            <div className="item-icon">{item.name[0]}</div>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Category: {item.category}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className="item-actions">
              <button className="btn view-btn">View</button>
              <button className="btn edit-btn">Edit</button>
              <button className="btn delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
