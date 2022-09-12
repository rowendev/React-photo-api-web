import React, { useState, useEffect } from "react";
import classes from "./Search.module.css";
import Card from "./UI/Card";

const Search = () => {
  const [data, setData] = useState(null);
  const pexels_API_key =
    "563492ad6f91700001000001f4122cb1333f463a8512f6631ac4847e";
  // const client = createClient(pexels_API_key);
  // client.photos.curated({ per_page: 1 }).then((photos) => setInput(photos));
  // console.log(input);
  const initial_URL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  // const search_URL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  const search = async () => {
    const fetchData = await fetch(initial_URL, {
      method: "GET",
      headers: {
        Authorization: pexels_API_key,
      },
    });
    let fetchedData = await fetchData.json();
    setData(fetchedData.photos);
  };
  // data => photos (array)
  // photographer / url
  console.log(data);
  return (
    <React.Fragment>
      <div className={classes.search}>
        <input type="text" />
        <button onClick={search}>search</button>
      </div>
    </React.Fragment>
  );
};

export default Search;
