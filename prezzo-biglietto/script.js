// Secondo esercizio:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){

    const userKm = document.getElementById('userKm').value;
    // console.log(userKm);
    const userAge = document.getElementById('userAge').value;
    // console.log(userAge);
    const basePrice = (userKm * 0.21);
    // console.log(basePrice);

    if (userAge<18) {
        const finalPriceUnder18 =basePrice -((basePrice/ 100)*20).toFixed(2);
        document.getElementById('ticketPrice').innerHTML = `Hai meno di 18 anni quindi il prezzo finale del tuo biglietto è ${finalPriceUnder18}&euro;`;
        // console.log(finalPriceUnder18);
    }else if(userAge>=65){
        const finalPriceOver65 = basePrice -((basePrice/ 100)*40).toFixed(2);
        document.getElementById('ticketPrice').innerHTML = `Lei ha più di 65 anni quindi il prezzo finale del suo biglietto è ${finalPriceOver65}&euro;`;
    }else{
        const finalBasePrice = basePrice;
        document.getElementById('ticketPrice').innerHTML = `il prezzo finale del suo biglietto è ${finalBasePrice}&euro;`;
    }
    // document.getElementById('btn').innerHTML
})

/**
 * Custom function that calculates the percent of a number.
 * 
 * @param float percent The percent that you want to get.
 * @param float|int num The number that you want to calculate the percent of.
 * @returns {Number}
 */
function calculatePercent(percent, num){
    return (percent / 100) * num;
}