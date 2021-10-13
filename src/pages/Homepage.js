import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import { v4 as uuidv4 } from "uuid";

const Homepage = () => {
  // fetch datas from pexel api
  const [input, setInput] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const auth = "563492ad6f917000010000017af199b1c2444952917fe3efacc39f98";
  const initialURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=12`;
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&page=${page}&per_page=12`;

  const searchHandler = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setInput(currentSearch);
    setData(parseData.photos);
    console.log(data);
    setPage(2);
  };

  // load more picture
  const morepitcture = async () => {
    let newURL;
    if (input === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=12`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${input}&page=${page}&per_page=12`;
    }
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(data.concat(parseData.photos));
    setPage(page + 1);
  };

  // fetch datas when page loads up
  useEffect(() => {
    searchHandler(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        searchHandler={() => searchHandler(searchURL)}
        setCurrentSearch={setCurrentSearch}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} key={uuidv4()} />;
          })}
      </div>
      <div className="morepicture">
        <button
          onClick={() => {
            morepitcture();
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Homepage;
