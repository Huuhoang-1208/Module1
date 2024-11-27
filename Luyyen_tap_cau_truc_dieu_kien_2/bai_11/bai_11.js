function kiemtra() {
    let tongthunhap = parseFloat(document.getElementById("tongthunhap").value);
    let giamtru = parseFloat(document.getElementById("giamtru").value);
    let thunhaptinhthue = parseFloat(tongthunhap - giamtru);
    let result;
    if (thunhaptinhthue <= 5000000) {
        result = thunhaptinhthue * 0.05;
    } else if (thunhaptinhthue <= 10000000) {
        result = 5000000 * 0.05 + (thunhaptinhthue - 5000000) * 0.1;
    } else if (thunhaptinhthue <= 18000000) {
        result = 5000000 * 0.05 + 5000000 * 0.1 + (thunhaptinhthue - 10000000) * 0.15;
    } else if (thunhaptinhthue <= 32000000) {
        result = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + (thunhaptinhthue - 18000000) * 0.2;
    } else if (thunhaptinhthue <= 52000000) {
        result = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + 14000000 * 0.2 + (thunhaptinhthue - 32000000) * 0.25;
    } else if (thunhaptinhthue <= 80000000) {
        result = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + 14000000 * 0.2 + 20000000 * 0.25 + (thunhaptinhthue - 52000000) * 0.3;
    } else {
        result = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + 14000000 * 0.2 + 20000000 * 0.25 + 28000000 * 0.3 + (thunhaptinhthue - 80000000) * 0.35;
    }
    document.getElementById("result").innerHTML = result;
}