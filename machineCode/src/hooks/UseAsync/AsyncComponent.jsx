import React from "react";
import useAsync from "./useAsync";

function AsyncComponent() {
  const [value, loading, error] = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        success ? resolve("hi") : reject("find error");
      }, 1000);
    });
  }, []);
  return (
    <div>
      <div>Loading: {loading.toString()}</div>
    { error && <div>{error}</div>}
    { value && <div>{value}</div>}
    </div>
  );
}

export default AsyncComponent;
