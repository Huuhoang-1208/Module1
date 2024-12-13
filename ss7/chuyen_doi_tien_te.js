function changeMoney() {
    let amount = document.getElementById('Amount').value;
    let from = document.getElementById('From').value;
    let to = document.getElementById('To').value;
    let result;

    if (from == "USD"&&to == "VND"){
        result = 'Result :' + amount * 24 +'VND';
    }
    else if (from == "VND"&&to == "VND" ){
        result = 'Result :' + amount +'VND';
    }else if(from == "USD"&&to == "USD"){
        result = 'Result :' + amount +'USD';
    }else{
        result = 'Result :' + amount/24 +'USD';
    }
    document.getElementById(    "Result").innerHTML = result;
}