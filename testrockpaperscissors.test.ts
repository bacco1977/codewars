import { rps } from './rockpaperscissors';
import { describe, test, expect } from '@jest/globals';

describe('rockpaperscissors', () => {
  test('should return Draw! when p1 === p2', () => {
    expect(rps('rock', 'rock')).toBe('Draw!');
    expect(rps('scissors', 'scissors')).toBe('Draw!');
    expect(rps('paper', 'paper')).toBe('Draw!');
  });

  test('should return Player 1 won! for winning moves', () => {
    expect(rps('rock', 'scissors')).toBe('Player 1 won!');
    expect(rps('scissors', 'paper')).toBe('Player 1 won!');
    expect(rps('paper', 'rock')).toBe('Player 1 won!');
  });

  test('should return Player 2 won! for losing moves', () => {
    expect(rps('scissors', 'rock')).toBe('Player 2 won!');
    expect(rps('paper', 'scissors')).toBe('Player 2 won!');
    expect(rps('rock', 'paper')).toBe('Player 2 won!');
  });
});
