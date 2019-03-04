window.cipher = {
  encode: (entrada,desplazamiento) => {
  let codigoAscii;
  let resultado="";

  for(let i=0;i<entrada.length;i++){
  codigoAscii=entrada[i].charCodeAt();
  resultado+=String.fromCharCode((codigoAscii-65+desplazamiento)%26+65);
  
}
 return resultado;

  },
  decode: (entrada,desplazamiento) => {
    let codigoAscii1;
    let resultadoDes="";
  
    for(let i=0;i<entrada.length;i++){
    codigoAscii1=entrada[i].charCodeAt();
    resultadoDes+=String.fromCharCode((codigoAscii1-desplazamiento+65)%26+65);
    
    
  }
  return resultadoDes;
}
}
