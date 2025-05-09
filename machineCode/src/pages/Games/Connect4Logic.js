export const ROWS = 6;
export const COLS = 7;

export const createEmptyBoard = () =>
  Array(ROWS)
    .fill()
    .map(() => Array(COLS).fill(null));

export const findLowestEmptyRow = (board, col) => {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (!board[row][col]) return row;
  }
  return -1;
};

export const checkWinner = (board) => {
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = board[row][col];
      if (!cell) continue;

      for (let [dx, dy] of directions) {
        let count = 0;
        let r = row;
        let c = col;

        while (
          r >= 0 &&
          r < ROWS &&
          c >= 0 &&
          c < COLS &&
          board[r][c] === cell
        ) {
          count++;
          if (count === 4) return cell;
          r += dx;
          c += dy;
        }
      }
    }
  }
  return null;
};

export const cloneBoard = (board) => board.map((row) => [...row]);

export const getBestMove = (board, aiPlayer, humanPlayer, depth = 5) => {
  const isTerminal = (board) => {
    const winner = checkWinner(board);
    if (winner) return winner;
    if (board.every((row) => row.every((cell) => cell))) return "draw";
    return null;
  };

  const minimax = (board, depth, maximizing) => {
    const result = isTerminal(board);
    if (result || depth === 0) {
      if (result === aiPlayer) return { score: 10 };
      if (result === humanPlayer) return { score: -10 };
      return { score: 0 };
    }

    if (maximizing) {
      let maxEval = -Infinity;
      let bestCol = null;
      for (let col = 0; col < COLS; col++) {
        const row = findLowestEmptyRow(board, col);
        if (row === -1) continue;

        const newBoard = cloneBoard(board);
        newBoard[row][col] = aiPlayer;

        const evalResult = minimax(newBoard, depth - 1, false);
        if (evalResult.score > maxEval) {
          maxEval = evalResult.score;
          bestCol = col;
        }
      }
      return { score: maxEval, col: bestCol };
    } else {
      let minEval = Infinity;
      let bestCol = null;
      for (let col = 0; col < COLS; col++) {
        const row = findLowestEmptyRow(board, col);
        if (row === -1) continue;

        const newBoard = cloneBoard(board);
        newBoard[row][col] = humanPlayer;

        const evalResult = minimax(newBoard, depth - 1, true);
        if (evalResult.score < minEval) {
          minEval = evalResult.score;
          bestCol = col;
        }
      }
      return { score: minEval, col: bestCol };
    }
  };

  const bestMove = minimax(board, depth, true);
  // fallback: if no best move found (shouldn't happen often)
  return bestMove.col !== null ? bestMove.col : 0;
};
