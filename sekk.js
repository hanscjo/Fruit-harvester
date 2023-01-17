function viseHide(){
    document.getElementById('vise').innerHTML = `
    <button onclick="antallFrukt(epler)">epler</button>
    <button onclick="antallFrukt(pærer)">pærer</button>
    <button onclick="antallFrukt(bananer)">bananer</button>`;

}
function antallFrukt(fruktNavn) {
    epler = Math.floor(Math.random() * 1000000);
    pærer = Math.floor(Math.random() * 1000000);
    bananer = Math.floor(Math.random() * 1000000);


    document.getElementById('viseFrukt').innerHTML = fruktNavn;
}
