import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const pexels_API_key =
    "563492ad6f91700001000001f4122cb1333f463a8512f6631ac4847e";
  const initial_URL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const search_URL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  return (
    <React.Fragment>
      <Nav />
      <main className={classes.main}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
