// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

let randomNumbers = [];

createNumbers(5, 100);

setTimeout(hideNumbers, 3000);

function  createNumbers(numberOfNumbers, max) {
    for (let i = 0; i < numberOfNumbers; i++) {
        const number = i;
        const rndNumber = Math.floor(Math.random()*max);
        randomNumbers.push(rndNumber);
        console.log(randomNumbers);
    }
    document.getElementById("numbersArray").innerHTML = `${randomNumbers}`; 
}

function hideNumbers() {
    document.getElementById("title").classList.add("hidden");
    document.getElementById("numbersArray").classList.add("hidden");
    document.getElementById("userNumContainer").classList.remove("hidden");   
}

let userArray = []
let userNumberArray = []

const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    transformInToNumber();
    const result = checkNumbers();
    console.log(result);
    document.getElementById("userNumContainer").classList.add("hidden");   
    document.getElementById("result").innerHTML = `Hai indovinato i seguenti numeri ${result}, in tutto ${result.length} su 5.`
})

function transformInToNumber() {
    const userNumbers = document.getElementById("userNumbers").value;
    userArray = userNumbers.split(" ");
    // console.log(typeof(userArray[1]));
    userArray.forEach(element => {
    const num = parseInt(element);
    userNumberArray.push(num);
    return userNumberArray;
    });
    console.log(userNumberArray);
}
    function checkNumbers() {
        let resultArray = []
        randomNumbers.forEach(rndNum => {
            if (userNumberArray.includes(rndNum)) {
                resultArray.push(rndNum);
            }
            return resultArray;
        });
        return resultArray;
       console.log(typeof(resultArray));
    }