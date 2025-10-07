import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import "./Reports.css";

export default function Reports() {
  const summaryData = [
    { title: "Total Revenue", value: "$45,231.89", percentage: "+20.1%" },
    { title: "Appointments", value: "2,350", percentage: "+10.1%" },
    { title: "Patients", value: "12,234", percentage: "+19%" },
    { title: "Staff", value: "573", percentage: "+4 new" },
  ];

  const analyticsData = [
    { day: "Mon", revenue: 60, patients: 40 },
    { day: "Tue", revenue: 80, patients: 70 },
    { day: "Wed", revenue: 30, patients: 60 },
    { day: "Thu", revenue: 90, patients: 75 },
    { day: "Fri", revenue: 70, patients: 85 },
    { day: "Sat", revenue: 20, patients: 65 },
    { day: "Sun", revenue: 40, patients: 45 },
  ];

  const reportsTable = [
    { department: "Cardiology", appointments: 120, revenue: "$15,000" },
    { department: "Neurology", appointments: 90, revenue: "$12,000" },
    { department: "Orthopedics", appointments: 150, revenue: "$18,500" },
    { department: "Pediatrics", appointments: 80, revenue: "$10,000" },
  ];

  return (
    <main className="reports-page">
      {/* Summary Cards */}
      <section className="reports-summary">
        {summaryData.map((item, idx) => (
          <div className="report-card" key={idx}>
            <h3>{item.title}</h3>
            <span className="value">{item.value}</span>
            <span className="percentage">{item.percentage}</span>
          </div>
        ))}
      </section>

      {/* Analytics Charts */}
      <section className="reports-charts">
        <div className="chart-box">
          <h3>Weekly Revenue & Patients</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#4682B4" />
              <Line type="monotone" dataKey="patients" stroke="#20b2aa" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Revenue vs Patients (Bar Chart)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#4682B4" />
              <Bar dataKey="patients" fill="#20b2aa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Reports Table */}
      <section className="reports-table-section">
        <h3>Department Reports</h3>
        <table className="reports-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Appointments</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {reportsTable.map((row, idx) => (
              <tr key={idx}>
                <td>{row.department}</td>
                <td>{row.appointments}</td>
                <td>{row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
