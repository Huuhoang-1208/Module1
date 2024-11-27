function check() {
    let tuoi = document.getElementById("tuoi").value;
    let result;
    if (tuoi > 0 && tuoi < 120 ) {
        result = 'Khai đúng số tuổi';
    }else{
        result = 'Khai sai tuổi';
    }
    document.getElementById("result").innerHTML = result;
}