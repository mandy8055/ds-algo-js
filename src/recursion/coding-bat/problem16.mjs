export default function array11(nums = [], index) {
  // base case
  if (index === nums.length) {
    return 0;
  }
  // main case
  const temp = nums[index] === 11 ? 1 : 0;
  return temp + array11(nums, index + 1);
}
