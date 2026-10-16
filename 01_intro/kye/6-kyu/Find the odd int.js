/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd) */
function findOdd(A) {
  //happy coding!
  let obj = {};
  A.forEach((element, index) => {
    obj[element] ? obj[element] += 1 : obj[element] = 1; 
  });
  const arr = Object.entries(obj)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] % 2 !== 0) {
      return Number(arr[i][0])
    }
  }
  return 0; 
}
console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1,1,2]));
console.log(findOdd([0,1,0,1,0]));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
/* findOdd([7]);
findOdd([0]); */
//findOdd([1,1,2]);
/* findOdd();
findOdd(); */