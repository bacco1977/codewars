export function rps(
  p1: "rock" | "paper" | "scissors",
  p2: "rock" | "paper" | "scissors"
): "Player 1 won!" | "Player 2 won!" | "Draw!" {
  if (p1 === p2) return "Draw!";
  return (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) ? "Player 1 won!" : "Player 2 won!";
}