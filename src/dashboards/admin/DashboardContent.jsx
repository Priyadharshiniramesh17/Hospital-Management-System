import React, { useEffect, useState } from "react";
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
import "./DashboardContent.css";

export default function DashboardContent() {
  const summaryData = [
    { title: "Total Revenue", percentage: "+20.1% from last month", value: "$45,231.89" },
    { title: "Appointments", percentage: "+10.1% from last month", value: "+2,350" },
    { title: "Patients", percentage: "+19% from last month", value: "+12,234" },
    { title: "Staff", percentage: "+4 new this month", value: "+573" },
  ];

  const recentAppointments = [
    { name: "John Smith", type: "Check-up", date: "Today", time: "10:00 AM", status: "Confirmed" },
    { name: "Emily Davis", type: "Consultation", date: "Today", time: "11:30 AM", status: "In Progress" },
    { name: "Robert Wilson", type: "Follow-up", date: "Today", time: "09:15 AM", status: "Completed" },
  ];

  const analyticsData = [
    { label: "Mon", revenue: 60, patients: 40 },
    { label: "Tue", revenue: 80, patients: 70 },
    { label: "Wed", revenue: -30, patients: 60 },
    { label: "Thu", revenue: 90, patients: 75 },
    { label: "Fri", revenue: 70, patients: 85 },
    { label: "Sat", revenue: -20, patients: 65 },
    { label: "Sun", revenue: 40, patients: 45 },
  ];

  const yAxisLabels = [100, 75, 50, 25, 0, -25, -50];

  const [animatedValues, setAnimatedValues] = useState(
    analyticsData.map(() => ({ revenue: 0, patients: 0 }))
  );
  const [animatedY, setAnimatedY] = useState(Array(yAxisLabels.length).fill(false));

  useEffect(() => {
    let raf;
    const animate = () => {
      setAnimatedValues(prev =>
        prev.map((val, idx) => ({
          revenue:
            val.revenue < analyticsData[idx].revenue
              ? val.revenue + 1
              : val.revenue > analyticsData[idx].revenue
              ? val.revenue - 1
              : val.revenue,
          patients:
            val.patients < analyticsData[idx].patients
              ? val.patients + 1
              : val.patients > analyticsData[idx].patients
              ? val.patients - 1
              : val.patients,
        }))
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    yAxisLabels.forEach((_, idx) => {
      setTimeout(() => {
        setAnimatedY(prev => {
          const newState = [...prev];
          newState[idx] = true;
          return newState;
        });
      }, idx * 200);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main className="admin-dashboard-content">
      {/* Welcome Section */}
      <section className="dashboard-welcome">
        <h1>Dashboard</h1>
        <p>Welcome back, Dr. Naresh! Here's what's happening today.</p>
        <div className="dashboard-date-export">
          <span>Sep 29, 2025 - Sep 29, 2025</span>
          <button className="export-btn">Export</button>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="dashboard-summary-cards">
        {summaryData.map((item, idx) => (
          <div className="summary-card" key={idx}>
            <h3>{item.title}</h3>
            <span className="percentage">{item.percentage}</span>
            <span className="value">{item.value}</span>
          </div>
        ))}
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>Patient visits and revenue for the current period.</p>
        <div className="overview-charts">
          {/* Weekly Analytics Chart */}
          <div className="chart-box">
            <h3>Weekly Analytics</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#4682B4" />
                <Line type="monotone" dataKey="patients" stroke="#20b2aa" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Reports Chart (Bar Chart) */}
          <div className="chart-box">
            <h3>Reports Chart</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#4682B4" />
                <Bar dataKey="patients" fill="#20b2aa" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Notifications Chart (Line Chart for Appointments) */}
          <div className="chart-box">
            <h3>Notifications Chart</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="patients" stroke="#ff9800" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Recent Appointments */}
      <section className="recent-appointments">
        <h2>Recent Appointments</h2>
        <p>You have {recentAppointments.length} appointments today.</p>
        <div className="appointments-table">
          {recentAppointments.map((app, idx) => (
            <div className="appointment-row" key={idx}>
              <div className="appointment-name">{app.name}</div>
              <div className="appointment-type">{app.type}</div>
              <div className="appointment-time">{app.date} - {app.time}</div>
              <div
                className={`appointment-status ${app.status.replace(/\s/g, "-").toLowerCase()}`}
              >
                {app.status}
              </div>
              <button className="appointment-more">More</button>
            </div>
          ))}
        </div>
        <button className="view-all-btn">View all appointments</button>
      </section>
    </main>
  );
}
