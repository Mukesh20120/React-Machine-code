import React, { memo, useCallback } from "react";

function Square({ value, onClick, index }) {
  const handleClick = useCallback(() => {
    onClick(index);
  }, [onClick, index]);

  return (
    <div
      className="flex justify-center items-center w-20 h-20 border-2 border-black cursor-pointer"
      onClick={handleClick}
    >
      <h1 className="text-6xl font-light">{value}</h1>
    </div>
  );
}

export default memo(Square);
