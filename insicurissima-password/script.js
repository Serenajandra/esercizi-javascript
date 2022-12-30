// Primo esercizio:

// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

    userPsw = document.getElementById('btn');
    userPsw.addEventListener("click", function(){
        const userName = document.getElementById("name").value;
        const userSurname = document.getElementById('surname').value;
        const userColor = document.getElementById('color').value;
        // Invece di aggiungere 21, aggiungo un numero casuale tra 0 e 100
        const pswNum = Math.floor (Math.random()*100)+1;
        document.getElementById('result').innerHTML = `La tua sicurissima password sarà: ${userName}${userSurname}${userColor}${pswNum}`;
        
});
