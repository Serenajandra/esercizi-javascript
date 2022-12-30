// Esercizio di oggi: Lista della spesa con ciclo while
// nome repo: js-lista-spesa
// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

listaSpesa = ["pane", "latte", "nutella", "caffe", "zucchero","succo", "mele", "arance"];
let i = 0;
while (i < listaSpesa.length) {
    document.getElementById("list").innerHTML += `<li>${listaSpesa[i]}</li>`;
    i++;
}