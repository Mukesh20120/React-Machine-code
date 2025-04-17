import React, { useCallback, useRef, useState } from "react";
import useSearchHook from "../customHooks/useSearchHook";

function InfiniteScroll() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, hasMore, books } = useSearchHook(query, pageNumber);
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, loading]
  );
  function handleChange(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <div>
        {books.map((book, index) => {
          if (books.length === index + 1)
            return (
              <p key={book} ref={lastBookElementRef}>
                {book}
              </p>
            );
          else return <p key={book}>{book}</p>;
        })}
      </div>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  );
}

export default InfiniteScroll;
