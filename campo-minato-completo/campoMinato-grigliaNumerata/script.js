// **Consegna:**
//  Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//  **Prima di partire a scrivere codice poniamoci qualche domanda:**
 
//  Come faccio a sapere se un numero è divisibile per un altro?
//  Abbiamo visto qualcosa di particolare che possiamo usare?
//  **Consigli del giorno:**
//  1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//  2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// **BONUS 1:**
//  Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
// **BONUS 2:**
//  Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
//  Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.





//Primo step:
//   Scrivi un programma che stampi in console i numeri da 1 a 100,

// const numbersWrapper = document.getElementById('row');

// for (let i = 1; i <=100; i++) {
//     let num = i;
//     numbersWrapper.innerHTML += `<div class=" col">${num}</div>`;
//     console.log(num);   
// }


// Secondo step:
// 


const numbersWrapper = document.getElementById('row');

for (let i = 1; i <=100; i++) {
    let num = i;
    //  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

    if ((num % 3 === 0 ) && (num % 5 === 0)) {
        const fizzBuzz = `<p>FizzBuzz</p>`;
        numbersWrapper.innerHTML += 
        `<div class=" col fizzBuzz">
            ${num} ${fizzBuzz}
        </div>`;

    }else if((num % 3 === 0) && (num % 5 != 0)){
                //  ma che per i multipli di 3 stampi “Fizz” al posto del numero
        const fizz = `<p>Fizz</p>`;
        numbersWrapper.innerHTML += 
        `<div class=" col fizz">
            ${num} ${fizz}
        </div>`;
    }else if ((num % 3 != 0) && (num % 5 === 0)){
        //  e per i multipli di 5 stampi “Buzz”.
        const buzz = `<p>Buzz</p>`;
        numbersWrapper.innerHTML += 
        `<div class=" col buzz">
            ${num} ${buzz}
        </div>`;
    }else{
        // non sono divisibili per nessuno dei due numeri
        numbersWrapper.innerHTML += 
        `<div class=" col num">
            ${num}
        </div>`;
    }    
}
