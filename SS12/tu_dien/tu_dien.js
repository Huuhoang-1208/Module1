function dich() {
    let nhap = document.getElementById("nhap").value;
    let eng = [ "banana", "apple", "blue" , "document", "red", "orange"];
    let vn = [ "chuối", "táo", "xanh" , "tài liệu", "đỏ", "cam"];
    let result;

    for (let i = 0; i < eng.length; i++) {
        if (nhap.indexOf(eng[i]) != -1) {
              result = vn[i];
        }
    }
    document.getElementById("result").innerHTML = result;
}