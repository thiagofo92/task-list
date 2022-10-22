export function sum (...numbers: number[]) {
  return numbers.reduce((total, value) => total + value, 0)
}
