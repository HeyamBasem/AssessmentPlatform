import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  FileEdit,
  Shield,
  UserPlus,
  BookOpen,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <Sparkles size={14} />
          <span>Assessment Platform</span>
        </div>
        <h1 className="hero-title">
          Empowering Education
          <br />
          <span className="gradient-text">Through Smart Assessment</span>
        </h1>
        <p className="hero-subtitle">
          Streamline your institution's assessment lifecycle from district
          management to student evaluation with our intelligent, role based exam
          platform.
        </p>
        <div className="hero-actions">
          <Link
            to="/register"
            className="btn-hero-primary"
            id="landing-register"
          >
            Get Started Free <ArrowRight size={18} />
          </Link>
          <Link to="/login" className="btn-hero-secondary" id="landing-login">
            Sign In
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Everything You Need</h2>
        <p className="section-subtitle">
          A complete platform for modern educational institutions
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Building2 size={24} strokeWidth={1.5} />
            </div>
            <h3>District & School Management</h3>
            <p>
              Organize your entire institutional hierarchy with powerful admin
              tools.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FileEdit size={24} strokeWidth={1.5} />
            </div>
            <h3>Assessment Creation</h3>
            <p>
              Build comprehensive exams with advanced question types and logic.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Shield size={24} strokeWidth={1.5} />
            </div>
            <h3>Role-Based Access</h3>
            <p>
              Secure environments tailored for admins, teachers, and students.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="steps-section">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon">
              <UserPlus size={22} strokeWidth={1.5} />
            </div>
            <h4>Create Account</h4>
            <p>Register with your designated role to access the platform.</p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon">
              <BookOpen size={22} strokeWidth={1.5} />
            </div>
            <h4>Take Assessments</h4>
            <p>Seamlessly engage with learning materials and timed exams.</p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon">
              <BarChart3 size={22} strokeWidth={1.5} />
            </div>
            <h4>Track Results</h4>
            <p>Get instant feedback and comprehensive performance analytics.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
