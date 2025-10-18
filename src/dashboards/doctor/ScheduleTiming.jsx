import React from "react";
import "./ScheduleTiming.css";

export default function ScheduleTiming({ darkMode }) {
  const month = "October";
  const year = 2025;

  // Days of the week
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate calendar days
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const totalDays = getDaysInMonth(10, 2025); // October (month index starts from 1 here)
  const firstDay = new Date(2025, 9, 1).getDay(); // 0=Sun, 1=Mon...

  const dates = [];
  for (let i = 0; i < firstDay; i++) dates.push(null); // Empty cells before 1st
  for (let i = 1; i <= totalDays; i++) dates.push(i);

  return (
    <div className={`doctor-dashboard ${darkMode ? "dark" : ""}`}>
      <h2>Schedule Timing</h2>

      <div className="schedule-header">
        <div className="event-list">
          <h3>All Events</h3>
          <ul>
            <li>Meeting</li>
            <li>Operation</li>
            <li>Lunch</li>
            <li>Conference</li>
            <li>Business Meeting</li>
            <li>Remove after drop</li>
          </ul>
        </div>

        <div className="calendar-container">
          <h3>
            {month} {year}
          </h3>
          <table className="calendar">
            <thead>
              <tr>
                {days.map((d) => (
                  <th key={d}>{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.ceil(dates.length / 7) }).map(
                (_, weekIndex) => (
                  <tr key={weekIndex}>
                    {dates
                      .slice(weekIndex * 7, weekIndex * 7 + 7)
                      .map((date, i) => (
                        <td key={i}>{date ? date : ""}</td>
                      ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
