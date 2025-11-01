// src/pages/Series.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/FlimAura/FlimAura.css";
import logo from "../assets/logo.png";
import series1 from "../assets/series1.jpg";
import series2 from "../assets/series2.jpg";
import series3 from "../assets/series3.jpg";
// if you have a fourth image, import it — otherwise remove the Money Heist item

const Series = () => {
  const [isOpen, setIsOpen] = useState(false);

  const seriesList = [
    { id: 1, title: "Stranger Things", img: series1 },
    { id: 2, title: "The Witcher", img: series2 },
    { id: 3, title: "Breaking Bad", img: series3 },
    // remove or fix this if you don’t have series4
    // { id: 4, title: "Money Heist", img: series4 },
  ];

  return (
    <div>
      {/* Navbar */}
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

      {/* Web Series Section */}
      <section className="movie-section">
        <h2 className="section-title">Popular Web Series</h2>

        <div className="movie-grid">
          {seriesList.map((s) => (
            <div className="movie-card" key={s.id}>
              <img src={s.img} alt={s.title} className="movie-img" />
              <h3 className="movie-title">{s.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Series;
