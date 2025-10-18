import React, { useState } from "react";
import "./DoctorMessages.css";

export default function DoctorMail({ darkMode }) {
  const folders = ["Inbox", "Starred", "Spam", "Sent", "Drafts", "Delete", "Notes"];

  const [messages, setMessages] = useState([
    {
      sender: "Amy Lucier",
      subject: "Power of Choice",
      preview: "In a free hour, when our power of choice is untrammelled...",
      fullMessage: "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do...",
      date: "17 Jan 2021",
    },
    {
      sender: "Tameika Whittle",
      subject: "Principle of Selection",
      preview: "The wise man therefore always holds in these matters...",
      fullMessage: "The wise man therefore always holds in these matters to this principle of selection...",
      date: "27 Jan 2021",
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showCompose, setShowCompose] = useState(false);

  const [composeData, setComposeData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const handleDelete = () => {
    alert(`Deleted message from ${messages[selectedMessage].sender}`);
    setSelectedMessage(null);
  };

  const handleComposeChange = (e) => {
    setComposeData({ ...composeData, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    if (!composeData.to || !composeData.subject || !composeData.message) {
      alert("Please fill all fields");
      return;
    }

    const newMessage = {
      sender: composeData.to,
      subject: composeData.subject,
      preview: composeData.message.substring(0, 50) + "...",
      fullMessage: composeData.message,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setMessages([newMessage, ...messages]);
    setComposeData({ to: "", subject: "", message: "" });
    setShowCompose(false);
    setSelectedMessage(0);
  };

  // Reply functionality
  const handleReply = () => {
    if (selectedMessage !== null) {
      const msg = messages[selectedMessage];
      setComposeData({
        to: msg.sender,
        subject: `Re: ${msg.subject}`,
        message: "",
      });
      setShowCompose(true);
    }
  };

  // Forward functionality
  const handleForward = () => {
    if (selectedMessage !== null) {
      const msg = messages[selectedMessage];
      setComposeData({
        to: "",
        subject: `Fwd: ${msg.subject}`,
        message: `\n\n---------- Forwarded message ----------\nFrom: ${msg.sender}\nDate: ${msg.date}\n\n${msg.fullMessage}`,
      });
      setShowCompose(true);
    }
  };

  return (
    <div className={`doctor-mail ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <div className="mail-sidebar">
        <h3>Messages</h3>
        <button className="compose-btn" onClick={() => setShowCompose(true)}>
          Compose
        </button>
        <ul>
          {folders.map((folder, idx) => (
            <li key={idx}>{folder}</li>
          ))}
        </ul>
      </div>

      {/* Message List */}
      <div className="mail-list">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mail-item ${selectedMessage === idx ? "active" : ""}`}
            onClick={() => setSelectedMessage(idx)}
          >
            <div className="mail-sender">{msg.sender}</div>
            <div className="mail-preview">{msg.preview}</div>
            <div className="mail-date">{msg.date}</div>
          </div>
        ))}
      </div>

      {/* Full Mail View */}
      <div className="mail-view">
        {selectedMessage !== null ? (
          <>
            <div className="view-header">
              <h3>{messages[selectedMessage].subject}</h3>
              <p>
                From: <strong>{messages[selectedMessage].sender}</strong> | Date: {messages[selectedMessage].date}
              </p>
              <div className="mail-toolbar">
                <button onClick={handleReply}>Reply</button>
                <button onClick={handleForward}>Forward</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
            <div className="view-body">
              <p>{messages[selectedMessage].fullMessage}</p>
            </div>
          </>
        ) : (
          <div className="view-empty">
            <p>Select a message to read</p>
          </div>
        )}
      </div>

      {/* Compose Modal */}
      {showCompose && (
        <div className="compose-modal">
          <div className="compose-content">
            <h3>New Message</h3>
            <label>To:</label>
            <input type="text" name="to" value={composeData.to} onChange={handleComposeChange} />
            <label>Subject:</label>
            <input type="text" name="subject" value={composeData.subject} onChange={handleComposeChange} />
            <label>Message:</label>
            <textarea name="message" value={composeData.message} onChange={handleComposeChange} />
            <div className="compose-buttons">
              <button onClick={handleSend}>Send</button>
              <button onClick={() => setShowCompose(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
