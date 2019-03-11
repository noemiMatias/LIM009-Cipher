

document.getElementById("page2").style.display="none";
document.getElementById("page1").style.visibility="visible";

let desplazamiento;
let resultado;
let entrada;
let entrada2;
let resultadoDes;

document.getElementById("botonCifrar").addEventListener("click",()=>{
     entrada=document.getElementById("textoCifrar").value;
     desplazamiento=parseInt(document.getElementById("offset").value);
    resultado=cipher.encode(entrada,desplazamiento);
   document.getElementById("textoDecifrado").value=resultado;

})


document.getElementById("botonDecifrar").addEventListener("click",()=>{
  entrada2= document.getElementById("textoDecifrado").value;
  desplazamiento=parseInt(document.getElementById("offset").value);
  resultadoDes=cipher.decode(entrada2,desplazamiento);
     document.getElementById("textoCifrar").value=resultadoDes ;
    
 })












//const textoDecifrado= document.getElementById("text2");
                                           