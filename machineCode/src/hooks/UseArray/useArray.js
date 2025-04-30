import React, { useState } from "react";

function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);
  function push(vlaue) {
    setArray((a) => [...a, vlaue]);
  }
  function filter(callback) {
    setArray((a) =>a.filter(callback));
  }
  function insert(index, vlaue) {
    setArray((a) => [...a.slice(0, index), vlaue, ...a.slice(index)]);
  }
  function update(index, vlaue) {
    setArray((a) => [...a.slice(0, index), vlaue, ...a.slice(index + 1)]);
  }
  function remove(index) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1)]);
  }
  function clear() {
    setArray([]);
  }
  return {array, push, insert,remove,filter,clear,update};
}

export default useArray;
