function fruktFeedback(frukt) {
    fjernFeedbackClass("fruktMelding"); //Nullstiller
    settFeedbackClass("fruktMelding"); //Setter på animasjon
    
    tellFrukt(frukt);
    if (countOfCurrentFruit == 1) {
        oppdaterFruktMelding(`Du la oppi ${countOfCurrentFruit} ${frukt}`);
    }
    else {
        if (frukt == "banan") {
            oppdaterFruktMelding(`Du la oppi ${countOfCurrentFruit} ${frukt}er`)
        }
        else {
            oppdaterFruktMelding(`Du la oppi ${countOfCurrentFruit} ${frukt}r`)
        }
    }

    oppdaterFrukt(frukt);    
    setTimeout(fjernFeedbackClass, 200, "fruktMelding"); //Dette er nødvendig for å få animasjonen til å kjøre neste gang den trykkes 
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

function oppdaterFrukt(frukt) {
    switch (frukt) {
        case "eple":
            antallFrukt(epler);
            break;
        case "pære":
            antallFrukt(pærer);
            break;
        case "banan":
            antallFrukt(bananer);
            break;
    }
}

function settFeedbackClass(element) {
    document.getElementById(element).classList.add("feedback");
}

function fjernFeedbackClass(element) {
    document.getElementById(element).classList.remove("feedback");
}
