import React from "react";
import { Routes, Route } from "react-router-dom";

// Front Page
import FrontPage from "./frontpage/Frontpage";

// Admin Section
import AdminDashboard from "./dashboards/admin/AdminDashboard";
import DashboardContent from "./dashboards/admin/DashboardContent";
import Doctors from "./dashboards/admin/Doctors";
import Patients from "./dashboards/admin/Patients";
import Appointments from "./dashboards/admin/Appointments";
import Prescriptions from "./dashboards/admin/Prescriptions";
import Ambulance from "./dashboards/admin/Ambulance";
import Pharmacy from "./dashboards/admin/Pharmacy";
import BloodBank from "./dashboards/admin/BloodBank";
import Billing from "./dashboards/admin/Billing";
import Department from "./dashboards/admin/Department";
import Inventory from "./dashboards/admin/Inventory";
import Staff from "./dashboards/admin/Staff";
import Record from "./dashboards/admin/Record";
import RoomAllotment from "./dashboards/admin/RoomAllotment";
import Reviews from "./dashboards/admin/Reviews";
import Feedback from "./dashboards/admin/Feedback";
import Reports from "./dashboards/admin/Reports";
import Settings from "./dashboards/admin/Settings";

// Doctor Section
// Correct import
import DoctorDashboard from "./dashboards/doctor/DoctorDashboard";
import DoctorContent from "./dashboards/doctor/DoctorContent";

// Auth Pages
import Login from "./auth/Login";

import DoctorAppointment from "./dashboards/doctor/DoctorAppointment";
import ScheduleTiming from "./dashboards/doctor/ScheduleTiming";
import DoctorInvoices from "./dashboards/doctor/DoctorInvoices";
import DoctorMessages from "./dashboards/doctor/DoctorMessages";
import DoctorProfileDetail from "./dashboards/doctor/DoctorProfileDetail";
import DoctorProfileSetting from "./dashboards/doctor/DoctorProfileSetting";
import DoctorPatient from "./dashboards/doctor/DoctorPatient";
import PatientReview from "./dashboards/doctor/PatientReview";
import DoctorChat from "./dashboards/doctor/DoctorChat";
import ForgotPassword from "./dashboards/doctor/ForgotPassword";


import PatientDashboard from "./dashboards/patient/PatientDashboard";
import PatientContent from "./dashboards/patient/PatientContent";
import PatientAppointment from "./dashboards/patient/PatientAppointment";
import PatientDoctors from "./dashboards/patient/PatientDoctors";
import PatientPrescriptions from "./dashboards/patient/PatientPrescriptions";
import PatientInvoices from "./dashboards/patient/PatientInvoices";

export default function App() {
  return (
    <Routes>
      {/* Front Page */}
      <Route path="/" element={<FrontPage />} />

      {/* Admin Dashboard with nested routes */}
      <Route path="/admin" element={<AdminDashboard />}>
        <Route index element={<DashboardContent />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="patients" element={<Patients />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="ambulance" element={<Ambulance />} />
        <Route path="pharmacy" element={<Pharmacy />} />
        <Route path="blood-bank" element={<BloodBank />} />
        <Route path="billing" element={<Billing />} />
        <Route path="departments" element={<Department />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="staff" element={<Staff />} />
        <Route path="record" element={<Record />} />
        <Route path="room-allotment" element={<RoomAllotment />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Doctor Dashboard with nested routes */}
      <Route path="/doctor" element={<DoctorDashboard />}>
        <Route index element={<DoctorContent />} />{" "}
        {/* Default overview page */}
        <Route path="appointment" element={<DoctorAppointment />} />
        <Route path="schedule" element={<ScheduleTiming />} />
        <Route path="invoices" element={<DoctorInvoices />} />
        <Route path="messages" element={<DoctorMessages />} />
        <Route path="profile" element={<DoctorProfileDetail />} />
        <Route path="profile-settings" element={<DoctorProfileSetting />} />
        <Route path="patients" element={<DoctorPatient />} />
        <Route path="review" element={<PatientReview />} />
        <Route path="chat" element={<DoctorChat />} />
      </Route>
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Patient Dashboard with nested routes */}
      <Route path="/patient" element={<PatientDashboard />}>
        <Route index element={<PatientContent />} />{" "}
        {/* Default overview page */}
        <Route path="appointment" element={<PatientAppointment />} />
        <Route path="doctors" element={<PatientDoctors />} />
        <Route path="prescriptions" element={<PatientPrescriptions />} />
        <Route path="invoices" element={<PatientInvoices />} />
      </Route>

      {/* Login Page */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
