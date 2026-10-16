function fn(words) {
  return words.split(" ").sort((a, b) => a.match(/[0-9]+/g) - b.match(/[0-9]+/g)).join(" ")}

console.log(fn("is2 Thi1s T4est 3a"));
console.log(fn("4of Fo1r pe6ople g3ood th5e the2"));

//fn("4of Fo1r pe6ople g3ood th5e the2")