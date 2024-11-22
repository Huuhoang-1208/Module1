function check() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let number3 = document.getElementById('number3').value;
    let result ;

    if (parseInt(number1) > parseInt(number2) && parseInt(number1) > parseInt(number3)) {
        result = number1 + ' Là số lớn nhất ';
    } else if (parseInt(number2) > parseInt(number3) && parseInt(number2) > parseInt(number1)) {
        result = number2 + ' Là số lớn nhất ';
    } else if (parseInt(number3) > parseInt(number1) && parseInt(number3) > parseInt(number2)) {
        result = number3 + ' Là số lớn nhất ';
    } else {
        result = number3 + ' Là số lớn nhất ';
    }
    document.getElementById('result').innerHTML = result;
}