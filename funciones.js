//Arbol Barco Cielo Disco Enero Amor Azul Casa "Flor" Luna Luz Mar Pan Sol Paz
palabras = ["acuario","bandera","caminar","destino","energía",
    "blanco","cuaderno","espejo","fuego","gato","arbol","barco",
    "cielo","disco","amor","azul","casa","flor","luna","luz","mar","pan", "sol","paz"]
numero = Math.floor(Math.random() * palabras.length) + 1;
palabra = palabras[numero];
console.log(numero)
palabraCompletada = ""
intentos = 6
letra = document.getElementById("escribe")
palabraLong = palabra.length
boton = document.getElementById("probar")
intentosHtml = document.getElementById("intentos")
mensajes = document.getElementById("mensaje")

img = document.getElementById("ahorcado")
intentosHtml.textContent = intentos

letra1 = document.getElementById('0')
letra2 = document.getElementById('1')
letra3 = document.getElementById('2')
letra4 = document.getElementById('3')
letra5 = document.getElementById('4')
letra6 = document.getElementById('5')
letra7 = document.getElementById('6')
letra8 = document.getElementById('7')

longitudPalabra(palabraLong-1)



boton.addEventListener('click',()=>{
    adividarLetra(palabra)
    console.log(letra.value)
})
letra.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        adividarLetra(palabra)
    }
})



function longitudPalabra(palabra){
    switch (palabra){
    case 2:
        letra3.style.display = "block"

        letra4.style.display = "none"
        letra5.style.display = "none"
        letra6.style.display = "none"
        letra7.style.display = "none"
        letra8.style.display = "none"
       
        break;
        
    case 3:
        letra4.style.display = "block"

        letra5.style.display = "none"
        letra6.style.display = "none"
        letra7.style.display = "none"
        letra8.style.display = "none"
       
        break;
    case 4:
        letra5.style.display = "block"

        letra6.style.display = "none"
        letra7.style.display = "none"
        letra8.style.display = "none"
        break;
    case 5:
        letra6.style.display = "block"

        letra7.style.display = "none"
        letra8.style.display = "none"
        break;
    case 6:
        letra7.style.display= "block"
        letra8.style.display= "none"

        break;
     case 7:
        letra8.style.display = "block"

        break;
    }
   
}



function colocarLetra(posicion,letra){
   switch (posicion){
    case 0:
        letra1.textContent = letra
       
        break;
    case 1: 
        letra2.textContent = letra
        
        break;
    case 2:
        letra3.textContent = letra
        
        break;
    case 3:
        letra4.textContent = letra
       
        break;
    case 4:
        letra5.textContent = letra
       
        break;
    case 5:
        letra6.textContent = letra

        break;
    case 6:
        letra7.textContent = letra

        break;
   }
   
}

function adividarLetra(palabra){
verificar = false 
    for(i = 0; i<palabra.length;i++){

        
        if(letra.value == palabra[i]){
            verificar = true
            console.log("Si esta la letra "+ letra.value)
            palabraCompletada = palabraCompletada+  letra.value
            colocarLetra(i,letra.value)
           
        }else{
            console.log(palabra[i])
           
        }
    }
     if(verificar == false){
            intentos = intentos -1
             intentosFront = 6 - intentos
            if (intentos == 0){
                intentos = "Ya no tienes mas intentos"
                 img.src = `images/${intentosFront}.png`
                 boton.disabled = true
            }
            intentosHtml.textContent = intentos
           
            img.src = `images/${intentosFront}.png`
            
            
            
    }
    if(palabra.length == palabraCompletada.length){
        

    }
    /*if(palabra.length == palabraCompletada.length){
        ordenarPalabra(palabraCompletada)

    }else{
        console.log("no se llama la funcion "+ palabraCompletada )
    }*/

}

/*palabraResultado = ""
function ordenarPalabra(palabraOrdenada){
    for(i=0; i<palabraOrdenada.length;i++){
        if(palabra[i] == palabraOrdenada[i]){ /// ohla
             palabraResultado = palabraResultado+ palabra[i]
             
        }
    }
    mensajes.textContent = palabraResultado
    
}*/
