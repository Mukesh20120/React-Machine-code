import React from "react";
import useAsync from "../UseAsync/useAsync";

const DEFAULT_OPTION = {
  headers: { "Content-Type": "application/json" },
};
export default function useFetch(url, options = {}, dependencies) {
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTION, ...options }).then((res) => {
      if (res.ok) return res.json();
      else return res.json().then((json) => Promise.reject(json));
    });
  }, dependencies);
}
