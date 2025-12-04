"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rps = rps;
function rps(p1, p2) {
    if (p1 === p2)
        return "Draw!";
    if ((p1 === "rock" && p2 === "scissors") ||
        (p1 === "scissors" && p2 === "paper") ||
        (p1 === "paper" && p2 === "rock")) {
        return "Player 1 won!";
    }
    return "Player 2 won!";
}
