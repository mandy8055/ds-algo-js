export default function triangle(rows) {
  // Edge case
  if (rows < 0) {
    throw new Error('Invalid input');
  }
  // Base case
  if (rows === 0 || rows === 1) {
    return rows;
  }
  // Main case
  return rows + triangle(rows - 1);
}
