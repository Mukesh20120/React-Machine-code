import React, { useCallback, useEffect, useRef, useState } from "react";
import "../App.css";

function SearchAndAutoComplete() {
  const getDataUrl = "https://dummyjson.com/recipes/search?q=";
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const cacheData = useRef({});

  const fetchDataFromApi = useCallback(async () => {
    if (query in cacheData.current) {
        console.log('data from cache data')
      setData(cacheData.current[query]);
      return;
    }
    const response = await fetch(getDataUrl + query);
    const data = await response.json();
    setData(data?.recipes || []);
    cacheData.current[query]=data?.recipes;
  }, [query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchDataFromApi();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [query, fetchDataFromApi]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onFocus={() => {
            setShowTable(true);
          }}
          onBlur={() => {
            setShowTable(false);
          }}
          style={{
            border: "2px solid black",
            borderRadius: "20px",
            width: "300px",
            padding: "2px 8px",
            fontWeight: "bold",
          }}
          placeholder="Search for a recipe"
        />
        {showTable && (
          <div
            style={{
              maxHeight: "300px",
              border: "2px solid black",
              overflowY: "scroll",
            }}
          >
            {data.map((item) => (
              <p key={item?.id} class="hoverable" style={{}}>
                {item?.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchAndAutoComplete;
