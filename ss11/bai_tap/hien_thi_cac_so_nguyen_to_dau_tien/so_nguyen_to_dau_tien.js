function check() {
    let soluongSNT = document.getElementById("SNT").value;
    let demSNT     = 0;
    let number = 1;
    while ( demSNT < soluongSNT ) {
         let count = 0
        for ( let j = 1; j <= number; j++) {
            if ( number % j == 0 ) {
                count += 1;
            }
        }
        if ( count == 2 ) {
            document.write(number + "<br>");
            demSNT++;
        }
        number++;
    }
}