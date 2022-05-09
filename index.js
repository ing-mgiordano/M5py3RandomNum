function getRandomNum() {

    const randomNum = parseInt(Math.ceil((Math.random() * 10)));
    let userNum = parseInt(document.getElementById('usernumber').value)
    console.log(randomNum)

    if (userNum < 0 || userNum > 10 || isNaN(userNum)){
        alert('Numero incorrecto. Elija un numero del 0 al 10')
        return
    }

    while(true){ // Un ciclo 'while'(verdadero) crea un ciclo que se ejecutará continuamente hasta una condición de interrupción.

        if(userNum == randomNum){
            document.getElementById('result').innerHTML = 
            `Enhorabuena, el número era ${randomNum}`
            break
        }
        if(userNum != randomNum){
           userNum = prompt("Lo siento, ese no es el numero. Vuelve a intentarlo")
            
        }
        
    }
}