import React, { useState, useEffect } from "react";
import {
  ROWS,
  COLS,
  createEmptyBoard,
  findLowestEmptyRow,
  checkWinner,
  getBestMove,
} from "./Connect4Logic";

const Connect4 = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState("🔴");
  const [winner, setWinner] = useState(null);

  const makeMove = (col, player) => {
    const row = findLowestEmptyRow(board, col);
    if (row === -1) return;

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = player;
    setBoard(newBoard);

    const foundWinner = checkWinner(newBoard);
    if (foundWinner) {
      setWinner(foundWinner);
    } else {
      const nextPlayer = player === "🔴" ? "🟡" : "🔴";
      setCurrentPlayer(nextPlayer);
    }
  };

  const handleClick = (col) => {
    if (winner || currentPlayer !== "🔴") return;
    makeMove(col, "🔴");
  };

  // ✅ useEffect to handle AI moves properly with latest board
  useEffect(() => {
    if (winner || currentPlayer !== "🟡") return;

    const timer = setTimeout(() => {
      const aiCol = getBestMove(board, "🟡", "🔴");
      if (aiCol !== null && aiCol !== undefined) {
        makeMove(aiCol, "🟡");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentPlayer, board, winner]);

  const resetGame = () => {
    setBoard(createEmptyBoard());
    setCurrentPlayer("🔴");
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h1 className="text-3xl font-bold">Connect 4</h1>

      <div className="text-xl font-medium">
        {winner ? `${winner} wins! 🎉` : `Current Turn: ${currentPlayer}`}
      </div>

      <div className="grid grid-cols-7 gap-2 bg-blue-500 p-4 rounded-lg shadow-lg">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleClick(colIndex)}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl cursor-pointer"
            >
              {cell}
            </div>
          ))
        )}
      </div>

      <button
        onClick={resetGame}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Restart Game
      </button>
    </div>
  );
};

export default Connect4;
