function tinh() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let result1;
    let result2;
    let delta = ( b * b ) - 4 * a * c;
    if ( delta < 0) {
        result1 = result2 = 'Phương trình vô nghiệm'
    } else if (delta == 0) {
        result1 = result2 = parseFloat(-b / (2 * a));
    }else{
        result1 = 'result1=' + ((-b + Math.sqrt(delta)) / (2 * a));
        result2 = 'result2=' + ((-b - Math.sqrt(delta)) / (2 * a));
    }
    document.getElementById(    "result1").innerHTML = result1;
    document.getElementById(    "result2").innerHTML = result2;
}