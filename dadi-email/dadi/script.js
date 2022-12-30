
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

function randomNumGenerator(min, max){
   const randomNumber = Math.floor(Math.random() * max)+min;
    return randomNumber;
};

const resultBtn = document.getElementById('resultBtn');

resultBtn.addEventListener('click', function(){
    const userRandomNum = randomNumGenerator(1, 6);
    const computerRandomNum = randomNumGenerator(1, 6);

    document.getElementById('usernum').innerHTML = `Hai pescato il numero ${userRandomNum}`;
    console.log(userRandomNum, computerRandomNum)
    
    if (userRandomNum < computerRandomNum) {
        document.getElementById('result').innerHTML = `Il computer ha estratto il numero ${computerRandomNum}, invece tu hai estratto il numero ${userRandomNum}. Mi dispiace hai perso.`;
    }else if(userRandomNum === computerRandomNum) {
        document.getElementById('result').innerHTML = `Il computer ha estratto il numero ${computerRandomNum}, tu hai estratto il numero ${userRandomNum} quindi avete vinto entrambi!`;
    }else{
        document.getElementById('result').innerHTML = `Il computer ha estratto il numero ${computerRandomNum}, invece tu hai estratto il numero ${userRandomNum} quindi hai vinto tu!`;
    }
});


