export default function array6(nums, index) {
  // base case
  if (index === nums.length) {
    return false;
  }
  // main case
  if (nums[index] === 6) {
    return true;
  }
  return array6(nums, index + 1);
}
