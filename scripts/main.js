let userButton = document.querySelector('.button');
let userInput1 = document.querySelector('.input1');
let userInput2 = document.querySelector('.input2');

let condition = userInput1.value.includes("@");
console.log(condition);
function convertir() {
    let condition = userInput1.value.includes("@");
    
    if (condition == false) {
        document.querySelector(".result").innerHTML = "ERREUR! Veuillez entrer une adresse email";
    }
    else if (userInput1.value === userInput2.value) {
            document.querySelector(".result").innerHTML = "Parfait! Vos adresses correspondent.";
            userInput1.value = "";
            userInput2.value = "";     
    }
    else {
        document.querySelector(".result").innerHTML = "Vous avez entré deux adresses différentes";
    } 
}


userButton.addEventListener('click', function() {
    convertir();
})

userInput1.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertir()
    } 
})

userInput2.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertir()
    } 
})


