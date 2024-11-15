function add () {
    let first = document.getElementById('first').value;
    let second = document.getElementById('second').value;
    let result = "result : " + (parseFloat(first) + parseFloat(second));
    document.getElementById('result').innerHTML = result;
}
function sub () {
    let first = document.getElementById('first').value;
    let second = document.getElementById('second').value;
    let result = "result : " + (parseFloat(first) - parseFloat(second));
    document.getElementById('result').innerHTML = result;
}
function mul() {
    let first = document.getElementById('first').value;
    let second = document.getElementById('second').value;
    let result = "result : " + (parseFloat(first) * parseFloat(second));
    document.getElementById('result').innerHTML = result;
}
function div() {
    let first = document.getElementById('first').value;
    let second = document.getElementById('second').value;
    let result = "result : " + (parseFloat(first) / parseFloat(second));
    document.getElementById('result').innerHTML = result;
}
