let desplazamiento;
let resultado;
let entrada;
let entrada2;
let resultadoDes;

document.getElementById("boton-cifrar").addEventListener("click",()=>{
     entrada=document.getElementById("texto1").value;
     desplazamiento=parseInt(document.getElementById("offset").value);
    resultado=cipher.encode(entrada,desplazamiento);
   document.getElementById("texto2").value=resultado;
})

document.getElementById("boton-descifrar").addEventListener("click",()=>{
  entrada2= document.getElementById("texto2").value;
  desplazamiento=parseInt(document.getElementById("offset").value);
  resultadoDes=cipher.decode(entrada2,desplazamiento);
     document.getElementById("texto1").value=resultadoDes ;
    
 })
                                           