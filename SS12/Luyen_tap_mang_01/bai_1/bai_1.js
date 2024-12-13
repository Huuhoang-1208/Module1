let songuyen = [];
let result = [];
for (let i = 1; i <= 10; i++) {
    songuyen[i] = prompt("Nhập số nguyên thứ " + [i]);
    if (songuyen[i] >= 10) {
        result.push(songuyen[i]);
    }
}
alert(result.join(" "));