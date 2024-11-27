function tinh() {
    let chieudai = document.getElementById('chieudai').value;
    let chieurong = document.getElementById('chieurong').value;
    let result;
    result = 'result:' + chieudai * chieurong;
    document.getElementById('result').innerHTML = result;
}