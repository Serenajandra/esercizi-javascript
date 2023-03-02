// Ciao ragazzi,
// Esercizio di oggi: **Carosello Mono Array**
// nome repo: js-array-carousel

// **Consigli del giorno:**
// 1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// 2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// 3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
// **Prima di partire a scrivere codice:**
// Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una **mezz'ora**, così da non perdere di vista il focus dell'esercizio.


// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

let thumb="";
let image= "";

imagesArray.forEach(image => {
    console.log(image);
    document.getElementById('imgWrapper').innerHTML += `<div class="img-cell"><img class="img" src="${image}"></div>`;
    image++;
});
console.log(document.getElementById('imgWrapper'));
let activeImg = 0;
let activeThumb = 0;
console.log(activeImg);

// Ho aggiunto il div con la classe img-cell per aggiungere in modo dinamico il container delle img e potergli cambiare display da none a block (direttamente sull'immagine non funzionava)
image = document.getElementsByClassName("img-cell");
thumb = document.getElementsByClassName("thumb");

image[activeImg].classList.add("active");
console.log(image[activeImg]);
// Ho creato la classe active con attributo !important altrimenti non lo applicava

thumb[activeThumb].classList.add("active");
console.log(thumb[activeThumb]);
// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

// **BONUS 1:**
// Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

const next = document.querySelector(".next");
const prev = document.getElementById('prev');

next.addEventListener('click', function(){
    image[activeImg].classList.remove("active");
    thumb[activeThumb].classList.remove("active");
    // console.log(image[activeImg]);
    if (activeImg < image.length - 1) {
        activeImg++;
        activeThumb++;
    }else{
        activeImg = 0;
        activeThumb = 0;
    }
    image[activeImg].classList.add("active");
    thumb[activeThumb].classList.add("active");
})

prev.addEventListener('click', function(){
    image[activeImg].classList.remove("active");
    thumb[activeThumb].classList.remove("active");
    // console.log(image[activeImg]);
    if (activeImg > 0) {
        activeImg--;
        activeThumb--;
    }else{
        activeImg = image.length - 1;
        activeThumb = image.length -1;
    }
    image[activeImg].classList.add("active");
    thumb[activeThumb].classList.add("active");
    console.log(thumb[activeThumb]);
})

// **BONUS 2:**
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra (o in basso) dell’immagine grande attiva. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

// Aggiungere spostamento dello slider al click sull'immagine e sul thumb
// imagesArray.forEach(img => {
//     console.log(img);

//     addEventListener('click', function(){
//         image[activeImg].classList.remove("active");
//         thumb[activeThumb].classList.remove("active");
//         activeImg = image;
//         activeThumb = image;
//         image[activeImg].classList.add("active");
//         thumb[activeThumb].classList.add("active");
//     })
// });
