import React, { useState } from "react";
import "./DoctorChat.css";

export default function DoctorChat() {
  const contacts = [
    {
      id: 1,
      name: "Cristino Murphy",
      img: "https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg",
      messages: [
        { sender: "doctor", text: "Hey Cristino", time: "59 min ago" },
        { sender: "patient", text: "Hello Calvin", time: "45 min ago" },
        { sender: "doctor", text: "How can I help you?", time: "44 min ago" },
        { sender: "patient", text: "Nice to meet you", time: "42 min ago" },
      ],
    },
    {
      id: 2,
      name: "Faye",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      messages: [
        { sender: "doctor", text: "Good morning, Faye!", time: "50 min ago" },
        { sender: "patient", text: "Good morning, doctor!", time: "48 min ago" },
      ],
    },
    {
      id: 3,
      name: "Ronald",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
      messages: [
        { sender: "doctor", text: "Hey Ronald, how are you feeling today?", time: "1 hr ago" },
        { sender: "patient", text: "Much better, thank you!", time: "58 min ago" },
      ],
    },
    {
      id: 4,
      name: "Melissa",
      img: "https://randomuser.me/api/portraits/women/60.jpg",
      messages: [
        { sender: "doctor", text: "Hello Melissa, did you take your medication?", time: "30 min ago" },
        { sender: "patient", text: "Yes doctor, I did.", time: "28 min ago" },
      ],
    },
  ];

  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    const newMsg = {
      sender: "doctor",
      text: newMessage,
      time: "Just now",
    };
    const updatedContacts = contacts.map((contact) =>
      contact.id === selectedContact.id
        ? { ...contact, messages: [...contact.messages, newMsg] }
        : contact
    );
    setSelectedContact(
      updatedContacts.find((c) => c.id === selectedContact.id)
    );
    setNewMessage("");
  };

  return (
    <div className="doctor-chat-dashboard">
      {/* Sidebar */}
      <div className="chat-sidebar">
        <h3>Contacts</h3>
        <div className="contacts">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`contact ${selectedContact.id === contact.id ? "active" : ""}`}
              onClick={() => setSelectedContact(contact)}
            >
              <img src={contact.img} alt={contact.name} />
              <div className="contact-info">
                <div className="name">{contact.name}</div>
                <div className="last-msg">
                  {contact.messages[contact.messages.length - 1].text.slice(0, 25)}...
                </div>
              </div>
              <div className="online-dot"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat */}
      <div className="chat-main">
        <div className="chat-header">
          <img src={selectedContact.img} alt={selectedContact.name} />
          <h4>{selectedContact.name}</h4>
        </div>

        <div className="messages">
          {selectedContact.messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <div className="message-content">
                <p>{msg.text}</p>
                <span>{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>

      {/* Right Widgets */}
      <div className="chat-widgets">
        <div className="widget">
          <h4>New Messages</h4>
          <p>Due to its wide spread use as filler text</p>
          <button>Read more</button>
        </div>
        <div className="widget">
          <h4>Latest Proposals</h4>
          <p>Due to its wide spread use as filler text</p>
          <button>View more</button>
        </div>
        <div className="widget">
          <h4>Package Expiry</h4>
          <p>Due to its wide spread use as filler text</p>
          <button>Check here</button>
        </div>
        <div className="widget">
          <h4>Saved Items</h4>
          <p>Due to its wide spread use as filler text</p>
          <button>View items</button>
        </div>
      </div>
    </div>
  );
}
