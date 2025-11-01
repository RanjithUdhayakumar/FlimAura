// src/pages/Movies.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/FlimAura/FlimAura.css";
import logo from "../assets/logo.png";
import movie from "../assets/movie.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";
import movie4 from "../assets/movie4.jpg";

const Movies = () => {
  const [isOpen, setIsOpen] = useState(false);

  const movies = [
    { id: 1, title: "Inception", img: movie },
    { id: 2, title: "Interstellar", img: movie2 },
    { id: 3, title: "The Dark Knight", img: movie3 },
    { id: 4, title: "Dune", img: movie4 },
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

      {/* Movies Section */}
      <section className="movie-section">
        <h2 className="section-title">All Movies</h2>

        <div className="movie-grid">
          {movies.map((m) => (
            <div className="movie-card" key={m.id}>
              <img src={m.img} alt={m.title} className="movie-img" />
              <h3 className="movie-title">{m.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Movies;
