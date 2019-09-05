'use strict';

// Complete this algo
const binarySearch = (array, target, midpoint = (array.length/2) - 1) => {
	console.log(midpoint)
	  if (midpoint === -Infinity || midpoint >= array.length){
		  return false
	  }
	  if (array[midpoint] === target){
			  return true;
	  } else if (array[midpoint] < target){
			  let rightMidpoint = midpoint + Math.ceil((Math.log(midpoint) / Math.log(2)));
			  if (rightMidpoint === midpoint) rightMidpoint++
			  return binarySearch(array, target, rightMidpoint)
	  } else {
			  let leftMidpoint = Math.floor((Math.log(midpoint) / Math.log(2)));
			  if (leftMidpoint === midpoint) leftMidpoint++
			  return binarySearch(array, target, leftMidpoint)
	  }
  };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch