function leggTilFrukt(frukt) {
    switch (frukt) {
        case "eple":
            epler++;
            break;
        case "pære":
            pærer++;
            break;
        case "banan":
            bananer++;
            break;
    }
    fruktFeedback(frukt);
}

