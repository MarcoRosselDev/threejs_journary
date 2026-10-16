/* function maxChar(str) {
// quiero que me devuelva el caracter que se se repita mas
// por ejemplo: maaarco ---> a === 3 veces
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]]? obj[str[i]] += 1: obj[str[i]] = 1;
  }
  //console.log(obj);
  let k = "";
  let v = 0
  for (const [key, value] of Object.entries(obj)) {
//    console.log(key, value, 'object...');
    if (value > v) {
      k = key;
      v = value;
    }
  }
  // dependiendo de lo que se quiere se retorna el indice o el valor
  return k
} */

// second option
function maxChar(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]]? obj[str[i]] += 1: obj[str[i]] = 1;
  }
  //console.log(obj);
  let k = "";
  let v = 0;
  for (const key in obj) {
    if (obj[key] > v) {
      k = key;
      v = obj[key];
    }
  }
  return k
}
function maxChar2(str) {
  let obj = {}
  for (let i of str) {
    //obj[el] = obj[el]? obj[el]++ : 1;
    obj[i] = obj[i]? obj[i] + 1 : 1;
    //obj[i]? ++obj[i]: 1
    //obj[el] = ++obj[el] || 1
  }
  console.log(obj);
  let val = 0;
  let character = ""
  for (const key in obj) {
    if (obj[key] > val) {
      character = key;
      val = obj[key];
    }
  }
  return character
}

console.log(maxChar2("marcoooo"))
console.log(maxChar2("megggusttttaa"))