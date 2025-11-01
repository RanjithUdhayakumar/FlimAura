import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../components/FlimAura/FlimAura.css";
import logo from "../../assets/logo.png";
import movie from "../../assets/movie.jpg";
import movie2 from "../../assets/movie2.jpg";
import movie3 from "../../assets/movie3.jpg";
import movie4 from "../../assets/movie4.jpg";

const FlimAura = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = [
    { id: 1, title: "Inception", img: movie },
    { id: 2, title: "Interstellar", img: movie2 },
    { id: 3, title: "The Dark Knight", img: movie3 },
    { id: 4, title: "Dune", img: movie4 },
  ];

  // 🔁 Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <div>
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

      {/* 🎥 Full-Screen Slideshow */}
      <section className="slideshow-fullscreen">
        {movies.map((m, index) => (
          <div
            key={m.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${m.img})` }}
          >
            <div className="overlay"></div>
            <h1 className="slide-title">{m.title}</h1>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FlimAura;

