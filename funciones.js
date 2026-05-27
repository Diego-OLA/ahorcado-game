//Arbol Barco Cielo Disco Enero Amor Azul Casa "Flor" Luna Luz Mar Pan Sol Paz
palabras = ["acuario","bandera","caminar","destino","energia",
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
bgCard = document.getElementsByClassName("main")

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
    limpiarInput()
    console.log(letra.value)
})
letra.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        adividarLetra(palabra)
        limpiarInput()
    }
})

function limpiarInput(){
    letra.value = ""
}

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

function cambiarBgColor(letra,long,idLetra){
      ultimoCaracter = palabra.substr(-1)
        if(palabraCompletada.length == long){
            bgCard[0].style.backgroundColor = "#22B342"
        }
        console.log("ultimo caracter: "+ ultimoCaracter+ " este es palabraIdletra: "+palabra[idLetra] )
}


function colocarLetra(posicion,letra,long){
   switch (posicion){
    case 0:
        letra1.textContent = letra.toLowerCase()
       cambiarBgColor(letra,long,0)
        break;
    case 1: 
        letra2.textContent = letra.toLowerCase()
        cambiarBgColor(letra,long,1)
        break;
    case 2:
        letra3.textContent = letra.toLowerCase()
        cambiarBgColor(letra,long,2)
        break;
    case 3:
        letra4.textContent = letra.toLowerCase()
        cambiarBgColor(letra,long,3)
        break;
    case 4:
        letra5.textContent = letra.toLowerCase()
        cambiarBgColor(letra,long,4)
        break;
    case 5:
        letra6.textContent = letra.toLowerCase()
        cambiarBgColor(letra,long,5)
        break;
    case 6:
        letra7.textContent = letra.toLowerCase()
        cambiarBgColor(letra,long,6)
        break;
   }
   
}

function adividarLetra(palabra){
verificar = false 
    for(i = 0; i<palabra.length;i++){

        
        if(letra.value.toLowerCase() == palabra[i]){
            verificar = true
            console.log("Si esta la letra "+ letra.value)
            palabraCompletada = palabraCompletada+  letra.value
            colocarLetra(i,letra.value,palabraLong)
           
        }
        else{
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
                 alert("La palabra era: "+palabra)
            }
            intentosHtml.textContent = intentos
           
            img.src = `images/${intentosFront}.png`
            
            
            
    }
   
    

}


