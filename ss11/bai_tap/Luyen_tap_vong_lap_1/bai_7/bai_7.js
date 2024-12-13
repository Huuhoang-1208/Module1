for ( let i = 1 ; i <= 100 ; i++) {
    if ( i % 3 == 0 && i % 5 != 0 ) {
        documet.write ("Fizz" + "<br>");
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
