import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Card from "./components/UI/Card";
import { Routes, Route } from "react-router-dom";
import ReactSwitch from "react-switch";
import "./App.css";

import React, { useState, createContext } from "react";
// import { createClient } from "pexels";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="aaa">
          <Nav themeValue={theme} />
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="about"
                element={
                  <Card>
                    <About />
                  </Card>
                }
              />
            </Routes>
          </main>
        </div>
        <label
          style={{
            color: `${theme === "dark" ? "white" : "black"}`,
          }}
        >
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
