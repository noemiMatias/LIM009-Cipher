window.cipher = {
  encode: (entrada,offset) => {
  let codigoAscii;
  let resultado="";

  for(let i=0;i<entrada.length;i++){
  codigoAscii=entrada[i].charCodeAt();
  resultado+=String.fromCharCode((codigoAscii-65+offset)%26+65);
  
}
 return resultado;

  },
  decode: (entrada2,offset) => {
    let codigoAscii1;
    let resultadoDes="";
  
    for(let i = 0; i < entrada2.length; i++){
    codigoAscii1=entrada2[i].charCodeAt();
    resultadoDes+=String.fromCharCode((codigoAscii1-desplazamiento+65)%26+65);
    
    
  }
  return resultadoDes;
}
}
