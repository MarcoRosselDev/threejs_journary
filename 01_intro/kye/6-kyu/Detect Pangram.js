/* A pangram is a sentence that contains every single letter of the alphabet at least 
once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a 
pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if 
not. Ignore numbers and punctuation. */
function isPangram(string){
  const obj = string.toUpperCase().split("")
  const regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]+$/;
  let arr = []
  obj.forEach(i => {
    regex.test(i)? arr.push(i) : null;
  })
  const abc = ['A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z'
  ]
  let p = []
  abc.forEach(letter =>{
    arr.includes(letter)? p.push(true): p.push(false)
  })
  if (p.every(i => i)) {
    return true
  } else {
    return false
  }
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));