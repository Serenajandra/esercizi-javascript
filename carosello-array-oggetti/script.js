
// Esercizio di oggi: Carosello Array di Oggetti
// nome repo: js-array-objects-carousel
// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata. Attenzione! Le immagini nello screenshot sono differenti da quelli  che vi invio, ma il layout non cambia.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// console.log(images[0].image);

images.forEach(item => {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML += 
    `<div class= "imgContainer hidden">
        <img src="assets/${item.image}" alt="">
    </div>
    <div class= "text-part hidden"
        <h2>${item.title}</h2> 
        <p>${item.text}</p>
    </div>`;

    const thumbContainer = document.getElementById("thumbs");
    thumbContainer.innerHTML += 
    `<div class="thumb opacity">
        <img src="assets/${item.image}" alt="">
    </div>`;
    // console.log(item.image, item.text);
});

setInterval(showNext, 4000);

let activeImage = 0;

const imgContainer = document.getElementsByClassName("imgContainer");
const textPart = document.getElementsByClassName("text-part");
imgContainer[activeImage].classList.remove("hidden");
textPart[activeImage].classList.remove("hidden");
console.log(imgContainer[activeImage]);

let activeThumb = 0;
const thumb = document.getElementsByClassName("thumb");
thumb[activeThumb].classList.remove("opacity");

const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", function(){
   showNext();
})

const prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", function(){
    showPrev();
})

thumb.addEventListener("click", handleClick());

// FUNCTIONS
 function showNext() {
    imgContainer[activeImage].classList.add("hidden");
    textPart[activeImage].classList.add("hidden");
    thumb[activeThumb].classList.add("opacity");
   
    if (activeImage < images.length -1) {
        activeImage++;
        activeThumb++;
        imgContainer[activeImage].classList.remove("hidden");
        textPart[activeImage].classList.remove("hidden");
        thumb[activeThumb].classList.remove("opacity");

    }else{
        activeImage = 0;
        activeThumb = 0;
        imgContainer[activeImage].classList.remove("hidden");
        textPart[activeImage].classList.remove("hidden");
        thumb[activeThumb].classList.remove("opacity");
    }
 }

 function showPrev(){
    
    imgContainer[activeImage].classList.add("hidden");
    textPart[activeImage].classList.add("hidden");
    thumb[activeThumb].classList.add("opacity");
   
    if (activeImage > 0) {
        activeImage--;
        activeThumb--;
        imgContainer[activeImage].classList.remove("hidden");
        textPart[activeImage].classList.remove("hidden");
        thumb[activeThumb].classList.remove("opacity");

    }else{
        activeImage = images.length -1;
        activeThumb = images.length - 1;
        imgContainer[activeImage].classList.remove("hidden");
        textPart[activeImage].classList.remove("hidden");
        thumb[activeThumb].classList.remove("opacity");
    }
    
 }

//  function handleClick() {
//     this.classList.remove("opacity");
//  }