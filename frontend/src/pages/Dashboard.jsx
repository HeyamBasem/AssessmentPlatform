import React from "react";
import { LayoutDashboard, LogOut, Shield, BookOpen, Users } from "lucide-react";
import { AuthContext } from "../auth/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logout } = React.useContext(AuthContext);

  const getRoleIcon = () => {
    switch (user?.role) {
      case "ADMIN":
        return <Shield size={16} />;
      case "TEACHER":
        return <BookOpen size={16} />;
      case "STUDENT":
        return <Users size={16} />;
      default:
        return <Users size={16} />;
    }
  };

  return (
    <div className="dashboard">
      <div className="welcome-card">
        <h1 className="welcome-title">Welcome back, {user?.firstName}</h1>
        <p className="welcome-email">{user?.email}</p>

        <div className={`role-badge role-${user?.role || "STUDENT"}`}>
          {getRoleIcon()}
          {user?.role || "STUDENT"}
        </div>

        <button className="btn-logout-dashboard" onClick={logout}>
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div className="coming-soon-grid">
        <div className="coming-soon-card">
          <LayoutDashboard className="card-icon" size={32} />
          <h4>District Management</h4>
          <span>Coming Soon</span>
        </div>
        <div className="coming-soon-card">
          <BookOpen className="card-icon" size={32} />
          <h4>Assessments</h4>
          <span>Coming Soon</span>
        </div>
        <div className="coming-soon-card">
          <Users className="card-icon" size={32} />
          <h4>Student Management</h4>
          <span>Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
