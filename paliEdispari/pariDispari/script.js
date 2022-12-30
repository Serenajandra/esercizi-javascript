
// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// **Consigli del giorno**
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

const resultBtn = document.getElementById("btn");


resultBtn.addEventListener("click", function(){
    
    const userNumber = document.getElementById("userNumber").value;
    console.log(parseInt(userNumber));
    const userChoise = document.getElementById("userChoice").value;
    const result = document.getElementById("result");
    console.log(userNumber);
    const computerNumber = Math.floor(Math.random()*5);
    // console.log(ComputerNumber);
    const sum = parseInt(computerNumber) + parseInt(userNumber);
    if ((sum % 2 === 0) && (userChoise === "Pari")){
            resultBtn.innerHTML = `La somma del numero che hai scelto   tu (${userNumber}) e di quello sorteggiato dal computer (${computerNumber}) è ${sum}. Si tratta di un numero pari quindi hai vinto tu!`;
        }else if ((sum % 2 === 0) && (userChoise === "Dispari")){
            result.innerHTML = `Tu hai scelto ${userNumber}. Il computer ha sorteggiato ${computerNumber}. La loro somma è ${sum}. Si tratta di un numero pari quindi hai perso!`;
        }else if ((sum % 2 != 0) && (userChoise === "Pari")){
        result.innerHTML = `Tu hai scelto ${userNumber}. Il computer ha sorteggiato ${computerNumber}. La loro somma è ${sum}. Si tratta di un numero dispari quindi hai perso!`;
        }else if ((sum % 2 != 0) && (userChoise === "Dispari")){
            result.innerHTML = `Tu hai scelto ${userNumber}. Il computer ha sorteggiato ${computerNumber}. La loro somma è ${sum}. Si tratta di un numero dispari quindi hai vinto tu!`;
        }else{
            result.innerHTML = `Controlla di aver selezionato correttamente tutti i campi.`
        }
         

})

