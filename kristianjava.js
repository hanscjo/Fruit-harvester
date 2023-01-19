function ShowAndHide() {
    var x = document.getElementById('bob1');
    if (x.style.visibility == 'hidden') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}