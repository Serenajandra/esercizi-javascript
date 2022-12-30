// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const emailList = 
[
    "serena@gmail.com", 
    "david@gmail.com", 
    "michele@gmail.com", 
    "marco@gmail.com"
];

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    const userMail = document.getElementById('userMail').value;
    console.log(userMail);
    let result = false;
    for (let i = 0; i < emailList.length; i++) {
        const email = emailList[i];
        console.log(email);
        if ( email === userMail) {
            result = true;
            break;
        }
    }

    if ( result) {
        document.getElementById('result').innerHTML = "<h3>La tua e-mail è corretta, puoi accedere.</h3>";
    }else{
        document.getElementById('result').innerHTML = "<h3>La tua e-mail non è corretta, non puoi accedere</h3>";
    }
})




// btn.addEventListener('click', function(){
//     const userMail = document.getElementById('userMail').value;
//     console.log(userMail);
//     let result = false;
//     for (let i = 0; i < emailList.length; i++) {
//         const email = emailList[i];
//         console.log(email);
//         if ( email === userMail) {
//             document.getElementById('result').innerHTML = "<h3>La tua e-mail è corretta, puoi accedere.</h3>";
//             break;
//         }else{
//             document.getElementById('result').innerHTML = "<h3>La tua e-mail non è corretta, non puoi accedere</h3>";
//         }
//     }
// })