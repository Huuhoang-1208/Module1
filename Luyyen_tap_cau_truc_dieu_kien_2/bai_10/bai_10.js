function kiemtra() {
    let giadien = document.getElementById("giadien").value;
    let result;
    if (giadien <= 50) {
        result = giadien * 1678;
    } else if (giadien <= 100) {
        result = 50 * 1678 + (giadien - 50) * 1734;
    } else if (giadien <= 200) {
        result = 50 * 1678 + 50 * 1734 + (giadien - 100) * 2014;
    } else if (giadien <= 300) {
        result = 50 * 1678 + 50 * 1734 + 100 * 2014 + (giadien - 200) * 2536;
    } else if (giadien <= 400) {
        result = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (giadien - 300) * 2834;
    } else {
        result = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (giadien - 400) * 2927;
    }
    document.getElementById("result").innerHTML = result;
}