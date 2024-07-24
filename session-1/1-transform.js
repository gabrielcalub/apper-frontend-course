function transform(nums) {
  
  const squaredNums = nums.map(num => num * num); // Square each element in the array
  console.log('Original Array:',nums) // Display the input array
 
  squaredNums.sort((a, b) => a - b); // Sort in ascending order
  
  return squaredNums;

  }
  
  const nums = [4,9,5,3,8]
  const sortedSquaredNums = transform(nums)
  console.log('Sorted and squared array:', sortedSquaredNums) // [9,16,25,64,81]