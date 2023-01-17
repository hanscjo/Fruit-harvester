var epler = 0;
var pærer = 0;
var bananer = 0;

function antallFrukt(fruktNavn) {
    epler = Math.floor(Math.random() * 1000000);
    pærer = Math.floor(Math.random() * 1000000);
    bananer = Math.floor(Math.random() * 1000000);


    document.getElementById('viseFrukt').innerHTML = fruktNavn;
}