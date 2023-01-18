var epler = 0;
var pærer = 0;
var bananer = 0;
var currentFruit = '';
var countOfCurrentFruit = 0;

/*
Feedback-skeleton:

function fruktFeedback(frukt) {
    document.getElementById("fruktMelding").classList.remove("feedback");
    document.getElementById("fruktMelding").classList.add("feedback"); /*Setter på animasjon*/
    /*
    tellFrukt(frukt);
    if (countOfCurrentFruit == 1) {
        oppdaterFruktMelding(`Du la oppi ${countOfCurrentFruit} ${frukt}`);
    }
    else {
        oppdaterFruktMelding(`Du la oppi ${countOfCurrentFruit} ${frukt}r`)
    }

    setTimeout(fjernFeedbackClass, 400, "fruktMelding");*/ /*Dette er nødvendig for å få animasjonen til å kjøre flere ganger*/ 
/*}

function tellFrukt(frukt) {
    if (frukt == currentFruit) {
        countOfCurrentFruit++;
    }
    else {
        countOfCurrentFruit = 1;
        currentFruit = frukt;
    }
}

function oppdaterFruktMelding(tekst) {
    document.getElementById("fruktMelding").innerHTML = tekst;
}

function fjernFeedbackClass(element) {
    document.getElementById(element).classList.remove("feedback");
    console.log("fjerna class");
}
*/