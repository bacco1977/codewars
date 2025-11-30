

//https://www.codewars.com/kata/526571aae218b8ee490006f4/train/typescript
export function countBits(n: number): number {
    // Program Me return the number of 1s in the binary representation of the number
    return n
    .toString(2)
    .split('')
    .reduce((count, digit) => count + (digit === '1' ? 1 : 0), 0);

}
  
  
