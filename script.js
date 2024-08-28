
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var textoFinal = mensaje;
    
    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoFinal = textoFinal.toLowerCase();  

    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(textoFinal.includes(matrizCodigo[i][0])){
               textoFinal = textoFinal.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
             
         }
        
        }
       return textoFinal;
     }


 

function desencriptarTexto(mensaje){
    var textoFinal = mensaje;

    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoFinal = textoFinal.toLowerCase();  


    for (let i = 0; i < matrizCodigo.length; i++) {
        if(textoFinal.includes(matrizCodigo[i][1])){
               textoFinal = textoFinal.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
             
         }
        
        }

    
    return textoFinal;
}

    
   

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});