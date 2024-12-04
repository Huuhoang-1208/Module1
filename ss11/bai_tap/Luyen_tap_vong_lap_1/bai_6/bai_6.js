let count = 1
let sum = 0;
let i = 0;
while ( count <= 30) {
    i++ ;
  if ( i % 7 === 0 ) {
      sum += i
      count += 1;
  }
}
   document.write(sum);

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        document.write("Fizz" + "<br>");
        continue;
    } else if (i % 5 == 0 && i % 3 != 0) {
        document.write("Buzz" + "<br>");
        continue;
    } else if (i % 3 == 0 && i % 5 == 0) {
        document.write("FizzBuzz" + "<br>");
        continue;
    }
    document.write(i + "<br>")
}