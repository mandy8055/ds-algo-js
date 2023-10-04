export default function array220(nums, index) {
  // base case
  if (index === nums.length || index === nums.length - 1) {
    return false;
  }
  // main case
  if (nums[index + 1] === 10 * nums[index]) {
    return true;
  }
  return array220(nums, index + 1);
}
