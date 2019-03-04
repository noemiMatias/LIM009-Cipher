window.cipher = {
  encode: (offset,texto-cifrar) => {
    /* Acá va tu código */
    let nuevoMensaje=" ";
    for(let i =0;i <texto-cifrar.length;i++){
      if(texto-cifrar[i].charCodeAt()>=65 && texto-cifrado[i].charCodeAt()<=90){
        let numberAscii=((texto-cifrado[i].charCodeAt()-65+offset)%26+65);
        let letterCipher=String.fromCharCode(numberAscii);
        nuevoMensaje+=letterCipher;
    }else{
nuevoMensaje=nuevoMensaje+texto-cifrar[i];
console.log(nuevoMensaje);
    }
  }
  return nuevoMensaje;
};
  decode: () => {
    /* Acá va tu código */
  }
};
