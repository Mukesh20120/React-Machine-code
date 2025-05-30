import React, { useState } from "react";
import useFetch from "./useFetch";

function FetchComponent() {
  const [id, setId] = useState(0);
  const [value, loading, error] = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  );
  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId((currentId) => currentId + 1)}>
        Increment ID
      </button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  );
}

export default FetchComponent;
