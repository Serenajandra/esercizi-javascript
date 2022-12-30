
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// **BONUS:**
// 1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// **2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// ****3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
// **Consigli del giorno:** :party_wizard:
// ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.




// Al click sul bottone genero la griglia
const start = document.getElementById("startBtn");
start.addEventListener("click", function(){

    // 1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range
    const cellNum = parseInt(document.getElementById("level").value);
    // console.log(level);
    // Genero la griglia:
    gridGenerator(cellNum);
    // Genero le 16 bombe:
      
});

function gridGenerator(cellNum) {
    const row = document.getElementById('row');
    for (let i = 1; i <= cellNum; i++) {
        let num = i;
        square = document.createElement("div");
        square.style.width = `calc(100% / 10)`;
        square.style.height = `calc(100% / 10)`;
        square.classList.add("col");
        square.innerHTML = `${num}`;
        row.append(square);
        BombGenerator(cellNum);
        // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.Per orelevare il contenuto dello square uso la parola chiave '.textContent'.
        square.addEventListener("click", handleSquareClick);
    } 
}

function handleSquareClick(){
    const clickedNum = parseInt(this.textContent);
    if (bombsArray.includes(clickedNum)) {
        this.classList.add("bomb");
         
    }else{
        this.classList.add("notABomb");
        // alert("hai perso!");
        // endGame();
    }

    console.log(parseInt(this.textContent));
};

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
function BombGenerator(cellNum) {
    bombsArray = [];
        
        while (bombsArray.length < 16) {
            let bomb = Math.floor(Math.random()*cellNum);  
            if (!bombsArray.includes(bomb)) {
                bombsArray.push(bomb);
            };
        }
        return bombsArray;
        // console.log(bombsArray);
    // }
}
function endGame() {
    grid = document.getElementsByClassName("col");
    for (let i = 1; i < grid.length; i++) {
        const cell = grid[i];
        cell.removeEventListener("click", handleSquareClick);
    }
    
    
}