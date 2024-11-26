function kiemtra() {
    let met = document.getElementById('met').value;
    let feet;
    feet = 'feet:' + met * 3.2808;
    document.getElementById('feet').innerHTML = feet;
}