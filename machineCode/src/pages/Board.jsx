import React, { useCallback, useEffect, useState } from "react";
import Square from "../components/Square";
import { FindBestMove } from "../utils/Algorithm";

function Board() {
  const initialState = new Array(9).fill(null);
  const [allSquare, setSquare] = useState(initialState);
  const [isWinner, setIsWinner] = useState(false);
  const [winnerIS, setWinnerIS] = useState(null);

  // Player click handler
  const handleOnClick = useCallback(
    (idx) => {
      if (allSquare[idx] || isWinner) return;
      setSquare((prev) => {
        const newSquares = [...prev];
        newSquares[idx] = "X";
        return newSquares;
      });
    },
    [allSquare, isWinner]
  );

  // Bot move logic runs *after* player move
  useEffect(() => {
    if (isWinner) return;
    const playerMoves = allSquare.filter((v) => v === "X").length;
    const botMoves = allSquare.filter((v) => v === "O").length;

    if (playerMoves > botMoves) {
      const bestMove = FindBestMove(allSquare);
      if (bestMove !== -1 && bestMove !== null) {
        setTimeout(() => {
          setSquare((prev) => {
            const updated = [...prev];
            updated[bestMove] = "O";
            return updated;
          });
        }, 300); // Optional: delay for UX
      }
    }
  }, [allSquare, isWinner]);

  // Check for winner
  const checkWinner = useCallback(() => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        allSquare[a] &&
        allSquare[a] === allSquare[b] &&
        allSquare[a] === allSquare[c]
      ) {
        setIsWinner(true);
        setWinnerIS(allSquare[a]);
        return;
      }
    }
  }, [allSquare]);

  useEffect(() => {
    if (!isWinner) {
      checkWinner();
    }
  }, [allSquare, isWinner, checkWinner]);

  const resetGame = () => {
    setSquare(initialState);
    setIsWinner(false);
    setWinnerIS(null);
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-3xl text-center mb-2">Tic Tac Toe</h1>
      <p className="font-bold text-xl text-center mb-5">
        {winnerIS ? `🥳🙌🍾Winner is ${winnerIS}🎈😎` : "Game is ON"}
      </p>
      <div className="w-60 h-60 border-2 border-black grid grid-cols-3">
        {allSquare.map((value, idx) => (
          <Square
            key={idx}
            value={value}
            index={idx}
            onClick={() => handleOnClick(idx)}
          />
        ))}
      </div>
      <div
        className="flex justify-center mt-4 border-2 border-black rounded-2xl"
        style={{ backgroundColor: isWinner ? "green" : "red" }}
      >
        <button onClick={resetGame} className="cursor-pointer font-bold p-2">
          {isWinner ? "Play Again" : "Reset Game"}
        </button>
      </div>
    </div>
  );
}

export default Board;
