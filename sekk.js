let epler = Math.floor(Math.random() * 1000000);
let pærer = Math.floor(Math.random() * 1000000);
let bananer = Math.floor(Math.random() * 1000000);
function viseHide(){
    document.getElementById('vise').innerHTML = `
    <button onclick="antallFrukt(epler)">epler</button>
    <button onclick="antallFrukt(pærer)">pærer</button>
    <button onclick="antallFrukt(bananer)">bananer</button>`;

}
function antallFrukt(fruktNavn) {



    document.getElementById('viseFrukt').innerHTML = fruktNavn;
}

function empty() {
    epler = 0;
    pærer = 0;
    bananer = 0;
    currentFruit = '';
    antallFrukt(0);
    oppdaterFruktMelding("Velg en frukt!");   
}