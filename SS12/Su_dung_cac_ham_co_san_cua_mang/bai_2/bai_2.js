let so = prompt();
let chuoi = so.toString();
let result = [chuoi[0]];
for (let x = 1; x < chuoi.length; x++) {
    if (chuoi[x - 1] % 2 === 0 && chuoi[x] % 2 === 0) {
        result.push('-', chuoi[x]);
    } else {
        result.push(chuoi[x]);
    }
}
alert(result.join(""));