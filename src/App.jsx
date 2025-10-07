import React from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./frontpage/Frontpage";
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
import Department from "./dashboards/admin/Department"
import Inventory from "./dashboards/admin/Inventory";
import Staff from "./dashboards/admin/Staff";
import Record from "./dashboards/admin/Record";
import RoomAllotment from "./dashboards/admin/RoomAllotment";
import Reviews from "./dashboards/admin/Reviews";
import Feedback from "./dashboards/admin/Feedback";
import Reports from "./dashboards/admin/Reports";
import Settings from "./dashboards/admin/Settings";
import Login from "./auth/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      
      {/* Admin dashboard with nested routes */}
      <Route path="/admin" element={<AdminDashboard />}>
        <Route index element={<DashboardContent />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="patients" element={<Patients />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="ambulance" element={<Ambulance />}/>
        <Route path="pharmacy" element={<Pharmacy />}/>
        <Route path="Blood-Bank" element={<BloodBank />}/>
        <Route path="Billing" element={<Billing />}/>
        <Route path="Departments" element={<Department />}/>
        <Route path="Inventory" element={<Inventory />}/>
        <Route path="Staff" element={<Staff />}/>
        <Route path="Record" element={<Record />}/>
        <Route path="Room-Allotment" element={<RoomAllotment />}/>
        <Route path="Reviews" element={<Reviews />}/>
        <Route path="Feedback" element={<Feedback />}/>
        <Route path="Reports" element={<Reports />}/>
        <Route path="Settings" element={<Settings />}/>
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
