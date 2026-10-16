/* function oddOne(array) {
  array.forEach((e, index) => {
    if (e % 2 >= 1) {
      console.log(index);
      return index;
    }
  });
} */

function oddOne(arr) {
  return arr.findIndex((elem) => elem % 2 !== 0)
    ? arr.findIndex((elem) => elem % 2 !== 0)
    : -1;
}

//console.log(oddOne([1, 12, 3]));
console.log(oddOne([2, 4, 6, 7, 10]));
console.log(oddOne([2, 16, 98, 10, 13, 78]));
console.log(oddOne([2, 4, 6, 8]));

//an([1, 12, 3]);
// no se consideraron
// el conjunto de numeros negativos
// corregir
// GARYSIMON1