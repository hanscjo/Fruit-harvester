function fruktFeedback(frukt) {
    tellFrukt(frukt);

    if (countOfCurrentFruit == 1) {
        oppdaterFruktMelding(`Du la oppi ${countOfCurrentFruit} ${frukt}`);
    }
    else { //Grammatikk for flertall
        if (frukt == "banan") {
            oppdaterFruktMelding(`Du la oppi ${countOfCurrentFruit} ${frukt}er`)
        }
        else {
            oppdaterFruktMelding(`Du la oppi ${countOfCurrentFruit} ${frukt}r`)
        }
    }

    antallFrukt();    
    animerFeedback("fruktMelding");
}

function tellFrukt(frukt) { //Dette er altså bare "midlertidig telling" for å se hvor mange av samme frukt som blir lagt inn av gangen
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

function animerFeedback(element) {
    fjernFeedbackClass(element); //Nullstiller
    settFeedbackClass(element); //Setter på animasjon

    setTimeout(fjernFeedbackClass, 200, element); //Dette er nødvendig for å få animasjonen til å kjøre neste gang den trykkes 
}

function settFeedbackClass(element) {
    document.getElementById(element).classList.add("feedback");
}

function fjernFeedbackClass(element) {
    document.getElementById(element).classList.remove("feedback");
}
