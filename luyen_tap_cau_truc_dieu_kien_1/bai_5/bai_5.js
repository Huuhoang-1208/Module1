function check() {
    let kiemtra = parseInt(document.getElementById("kiemtra").value);
    let giuaki = parseInt(document.getElementById("giuaki").value);
    let cuoiki = parseInt(document.getElementById("cuoiki").value);
    let result;
    result = (kiemtra + (2 * giuaki) + (3 * cuoiki)) / 5;

        if (result > 8.0) {
            result = 'Xếp loại giỏi';
            document.getElementById("result").innerHTML = result;
        } else if (result < 8.0 && result > 6.5) {
            result = 'Xếp loại khá';
            document.getElementById("result").innerHTML = result;
        } else if (result < 6.5 && result > 5.0) {
            result = 'Xếp loại trung bình';
            document.getElementById("result").innerHTML = result;
        } else if (result < 5.0 && result > 0) {
            result = 'xếp loại yếu'
            document.getElementById("result").innerHTML = result;
        }
}



