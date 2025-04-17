import { useEffect, useState } from "react";
import axios from "axios";
export default function useSearchHook(query, pageNumber) {
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [books,setBooks] = useState([]);
    const [hasMore,setHasMore] = useState(false);
useEffect(()=>{
    setBooks([]);
},[query])
  useEffect(() => {
    const source = axios.CancelToken.source();
    setLoading(true);
    setError(false);
    axios
      .get("https://openlibrary.org/search.json", {
        params: { q: query, page: pageNumber },
        cancelToken: source.token,
      })
      .then((res) => {
        const docs = res?.data?.docs || [];
        setBooks(prev=>{return [...new Set([...prev,...docs.map(book=>book.title)])]});
        setHasMore(docs.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return;
        } else {
          console.log(e.message);
          setError(true);
        }
      });
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [query, pageNumber]);
  return {loading,books,error,hasMore};
}
