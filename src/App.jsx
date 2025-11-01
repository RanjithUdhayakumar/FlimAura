import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlimAura from "./components/FlimAura/FlimAura";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlimAura />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
