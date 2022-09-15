import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
// pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Exercise from "./pages/Exercise";
// components
import Nav from "./components/Layout/Nav";
import Picture from "./components/Picture";
import Footer from "./components/Layout/Footer";
// mui
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // api key
  const ACCESS_KEY = "UE8u2HhonCOZPiAjlRv5hwGZTN1ZsKBjhEx40a-opgU";
  const url = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&page=${page}&per_page=12`;

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchData = (searchingURL) => {
    axios.get(searchingURL).then((res) => {
      setData(data.concat(res.data));
    });
  };

  const loadMore = () => {
    setPage(page + 1);
    let newURL = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&page=${page}&per_page=16`;
    fetchData(newURL);
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              {/* <div className="search">
                <input type="text" placeholder="Picture Type" />
              </div> */}
              <div className="pictures">
                {data &&
                  data.map((eachArray) => (
                    <Picture
                      key={Math.random()}
                      author={eachArray.user.name}
                      url={eachArray.urls.thumb}
                      downloadLink={eachArray.links.download}
                    />
                  ))}
              </div>
              {/* <div className="load-more">
                <button onClick={loadMore}>Load More</button>
              </div> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "1.5rem",
                }}
              >
                <Button variant="contained" onClick={loadMore}>
                  Load More
                </Button>
              </div>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
