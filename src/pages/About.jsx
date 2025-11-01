import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/FlimAura/FlimAura.css";
import logo from "../assets/logo.png";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="about-page">
      {/* 🌟 Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="FlimAura Logo" className="logo-img" />
          <span className="logo-text">FlimAura</span>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      {/* 🎬 About Section */}
      <section className="about-section">
        <div className="about-container">
          <h1 className="about-title">About FlimAura</h1>
          <p className="about-text">
            <strong>FlimAura</strong> is your ultimate destination for exploring
            the world of movies and web series. Dive into cinematic experiences,
            discover trending titles, and enjoy beautiful visuals and smooth
            navigation — all in one elegant platform.
          </p>

          <p className="about-text">
            Whether you’re a fan of action-packed blockbusters or deep
            storytelling dramas, FlimAura brings together films and series
            from every genre and era. Our goal is to make your viewing journey
            immersive and inspiring.
          </p>

          <div className="about-highlight">
            <h3>🎥 Our Vision</h3>
            <p>
              To connect people through the art of film — turning moments into
              memories and stories into emotions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
