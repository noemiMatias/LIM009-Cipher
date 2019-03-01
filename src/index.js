const desplazamiento= document.getElementById("offset");
const entrada= document.getElementById('texto-cifrar');
const parrafo= document.getElementById("parrafo");
const boton= document.getElementById("boton-cifrar");
boton.addEventListener("click",()=>{
    parrafo.innerHTML = entrada.value;// aca mensaje capturado lo imprimo con inner y aparece el valor de texto cifrado
});
// ( una variable =cifrar )cuando escuches el evento de cik haces esto = ahi se escribe la funcion =>
const textoDecifrado2 = document.getElementById("texto-decifrado");
const textoDecipher2= document.getElementById("parrafo-decifrado");
const botonDes= document.getElementById("boton-decifrar");
botonDes.addEventListener("click",()=>{
    textoDecipher2.innerHTML = textoDecifrado2.value;
} );














//const textoDecifrado= document.getElementById("text2");
                                           