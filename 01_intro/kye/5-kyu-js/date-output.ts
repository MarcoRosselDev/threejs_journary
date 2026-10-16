function humanReadable (input:number):string {
  if(input > 359999 || input < 0){
    return '';
  } else{
    let horas:string = Math.floor((input/60)/60).toString();
    horas = horas.length == 1? `0${horas}`: horas;
    let minutos:string = Math.floor(input/60%60).toString();
    minutos = minutos.length == 1? `0${minutos}`: minutos;
    let segundos:string = Math.floor(input%60).toString();
    segundos = segundos.length == 1? `0${segundos}`: segundos;
    return `${horas}:${minutos}:${segundos}`
  }
}
