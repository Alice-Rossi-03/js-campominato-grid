// Consegna esercizio 

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella:
    // - la cella cliccata si colora di azzurro 
    // - Compare un messaggio in console con il numero della cella cliccata


// prendimao le variabili 
let grid = document.getElementById("grid")
let btn = document.getElementById("btn")

// aggiungiamo un addEventListener 

btn.addEventListener("click", function(){

    for(let i = 1; i <= 64; i++){
        let gridCell = document.createElement("div")
        gridCell.classList.add("box")
        grid.append(gridCell)
        gridCell.innerHTML = `<span> ${i} </span>`

        gridCell.addEventListener("click", function(){
            this.classList.toggle("clicked-cell")
        }) 
    }

    
})

