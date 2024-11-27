function tinh() {
    let canha = document.getElementById('canha').value;
    let canhb = document.getElementById('canhb').value;
    let result;
    result = 'result' + parseFloat(parseFloat(1 / 2) * (canha + canhb));
    document.getElementById('result').innerHTML = result;
}