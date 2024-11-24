function tinhCuoc() {
    let sophut = parseFloat(document.getElementById("sophut").value);
    let giaCuoc = 0;
    if (isNaN(sophut) || sophut < 0) {
        alert("Vui lòng nhập số phút hợp lệ (không âm và là số).");
        return;
    }
    if (sophut <= 100) {
        giaCuoc = sophut * 10000;
    } else if (sophut <= 200) {
        giaCuoc = (100 * 10000) + ((sophut - 100) * 5000);
    } else {
        giaCuoc = (100 * 10000) + (100 * 5000) + ((sophut - 200) * 3000);
    }
    alert("Giá cước của hộ gia đình là: " + giaCuoc.toLocaleString('vi-VN') + " VNĐ");
}