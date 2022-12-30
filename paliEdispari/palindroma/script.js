// nome repo: js-paliedispari

// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

const wordBtn = document.getElementById("wordBtn");

wordBtn.addEventListener("click", function() {
    const userWord = document.getElementById("userWord").value;
    const userWordArray = (userWord.split(""));
    // console.log(userWordArray);
    const newWordArray = userWordArray.reverse("");
    // console.log(newWordArray);
    const newWord = userWordArray.join("");
    // console.log(newWord);
    
    if (userWord === newWord) {
        const result = document.getElementById("result").innerHTML =`La parola che hai scritto è palindroma`;
    }else{
        const result = document.getElementById("result").innerHTML = `La parola che hai scritto NON è palindroma`;
    }
})


