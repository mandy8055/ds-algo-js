export default function towerOfHanoi(n, t1Id, t2Id, t3Id) {
  // base case
  if (n === 0) {
    return;
  }
  // main case
  towerOfHanoi(n - 1, t1Id, t3Id, t2Id);
  console.log(`${n}[${t1Id}->${t2Id}]`);
  towerOfHanoi(n - 1, t3Id, t2Id, t1Id);
}
