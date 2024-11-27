function tinh() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let result
    result = 'result' + parseFloat(-b/a);
    document.getElementById('result').innerHTML = result;
}