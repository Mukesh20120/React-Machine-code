const winnerIndex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  const bot = "O";
  const opponent = "X";
  
  export function FindBestMove(Board = []) {
    if (Board.length < 9) return null;
  
    function isMoveLeft() {
      return Board.some((value) => value === null);
    }
  
    function evaluate() {
      for (let winner of winnerIndex) {
        const [a, b, c] = winner;
        if (Board[a] && Board[a] === Board[b] && Board[b] === Board[c]) {
          if (Board[a] === bot) return 10;
          if (Board[a] === opponent) return -10;
        }
      }
      return 0;
    }
  
    function minimax(depth, isMaximizingPlayer) {
      const score = evaluate();
      if (score === 10 || score === -10) return score;
      if (!isMoveLeft()) return 0;
  
      if (isMaximizingPlayer) {
        let best = -Infinity;
        for (let i = 0; i < 9; i++) {
          if (Board[i] === null) {
            Board[i] = bot;
            best = Math.max(best, minimax(depth + 1, false));
            Board[i] = null;
          }
        }
        return best;
      } else {
        let best = Infinity;
        for (let i = 0; i < 9; i++) {
          if (Board[i] === null) {
            Board[i] = opponent;
            best = Math.min(best, minimax(depth + 1, true));
            Board[i] = null;
          }
        }
        return best;
      }
    }
  
    let bestMove = -Infinity;
    let bestMoveIndex = -1;
  
    for (let i = 0; i < 9; i++) {
      if (Board[i] === null) {
        Board[i] = bot;
        const moveScore = minimax(0, false);
        Board[i] = null;
  
        if (moveScore > bestMove) {
          bestMove = moveScore;
          bestMoveIndex = i;
        }
      }
    }
  
    return bestMoveIndex;
  }
  