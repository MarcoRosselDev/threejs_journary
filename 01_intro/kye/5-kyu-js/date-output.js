/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */
function humanReadable (input) {
  if(input > 359999 || input < 0){
    return null
  } else{
    let horas = Math.floor((input/60)/60).toString();
    horas = horas.length == 1? `0${horas}`: horas;
    let minutos = Math.floor(input/60%60).toString();
    minutos = minutos.length == 1? `0${minutos}`: minutos;
    let segundos = Math.floor(input%60).toString();
    segundos = segundos.length == 1? `0${segundos}`: segundos;
    if (minutos.length == 1) {
      minutos = `0${minutos}`
    }
    return `${horas}:${minutos}:${segundos}`
  }
}/* 
    doTest(     0, '00:00:00');
    doTest(    59, '00:00:59');
    doTest(    60, '00:01:00');
    doTest(    90, '00:01:30');
    doTest(  3599, '00:59:59');
    doTest(  3600, '01:00:00');
    doTest( 45296, '12:34:56');
    doTest( 86399, '23:59:59');
    doTest( 86400, '24:00:00');
    doTest(359999, '99:59:59'); */

const tests = [0, 59, 60, 90, 3599, 3600, 45296, 86399,86400, 359999];

tests.forEach(i => {
  console.log(human_readable(i)); 
})

/* let i = 0;
console.log(Math.floor((tests[i]/60)/60));
const excedente = tests[i]/60%60;
console.log(Math.floor(excedente));
console.log(Math.floor((tests[i]%60)));
 */

/* console.log(Math.floor(0.1));
console.log(Math.floor(1.19));
console.log(Math.floor(99.99));
console.log(Math.floor(2.99)); */
