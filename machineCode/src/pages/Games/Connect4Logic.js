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


const evaluateBoard = (board, aiPlayer, humanPlayer) => {
  let score = 0;

  const scoreWindow = (window) => {
    let aiCount = window.filter((cell) => cell === aiPlayer).length;
    let humanCount = window.filter((cell) => cell === humanPlayer).length;
    let emptyCount = window.filter((cell) => !cell).length;

    if (aiCount === 4) return 1000;
    if (aiCount === 3 && emptyCount === 1) return 5;
    if (aiCount === 2 && emptyCount === 2) return 2;
    if (humanCount === 4) return -1000;
    if (humanCount === 3 && emptyCount === 1) return -4;

    return 0;
  };

  const centerCol = Math.floor(COLS / 2);
  const centerArray = board.map((row) => row[centerCol]);
  const centerCount = centerArray.filter((cell) => cell === aiPlayer).length;
  score += centerCount * 3;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (col + 3 < COLS) {
        const window = [
          board[row][col],
          board[row][col + 1],
          board[row][col + 2],
          board[row][col + 3],
        ];
        score += scoreWindow(window);
      }
      if (row + 3 < ROWS) {
        const window = [
          board[row][col],
          board[row + 1][col],
          board[row + 2][col],
          board[row + 3][col],
        ];
        score += scoreWindow(window);
      }
      if (row + 3 < ROWS && col + 3 < COLS) {
        const window = [
          board[row][col],
          board[row + 1][col + 1],
          board[row + 2][col + 2],
          board[row + 3][col + 3],
        ];
        score += scoreWindow(window);
      }
      if (row - 3 >= 0 && col + 3 < COLS) {
        const window = [
          board[row][col],
          board[row - 1][col + 1],
          board[row - 2][col + 2],
          board[row - 3][col + 3],
        ];
        score += scoreWindow(window);
      }
    }
  }

  return score;
};

export const getBestMove = (board, aiPlayer, humanPlayer, depth = 5) => {
  const isTerminal = (board) => {
    const winner = checkWinner(board);
    if (winner) return winner;
    if (board.every((row) => row.every((cell) => cell))) return "draw";
    return null;
  };

  // 👇 Updated minimax with alpha, beta, and heuristic
  const minimax = (board, depth, alpha, beta, maximizing) => {
    const result = isTerminal(board);
    if (result || depth === 0) {
      if (result === aiPlayer) return { score: 100000 };
      if (result === humanPlayer) return { score: -100000 };
      if (result === "draw") return { score: 0 };

      const heuristicScore = evaluateBoard(board, aiPlayer, humanPlayer);
      return { score: heuristicScore };
    }

    if (maximizing) {
      let maxEval = -Infinity;
      let bestCol = null;
      for (let col = 0; col < COLS; col++) {
        const row = findLowestEmptyRow(board, col);
        if (row === -1) continue;

        const newBoard = cloneBoard(board);
        newBoard[row][col] = aiPlayer;

        const evalResult = minimax(newBoard, depth - 1, alpha, beta, false);
        if (evalResult.score > maxEval) {
          maxEval = evalResult.score;
          bestCol = col;
        }
        alpha = Math.max(alpha, evalResult.score);
        if (beta <= alpha) break;
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

        const evalResult = minimax(newBoard, depth - 1, alpha, beta, true);
        if (evalResult.score < minEval) {
          minEval = evalResult.score;
          bestCol = col;
        }
        beta = Math.min(beta, evalResult.score);
        if (beta <= alpha) break;
      }
      return { score: minEval, col: bestCol };
    }
  };

  const bestMove = minimax(board, depth, -Infinity, Infinity, true);
  return bestMove.col !== null ? bestMove.col : 0;
};

