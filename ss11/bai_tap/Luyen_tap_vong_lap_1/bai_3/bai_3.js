let fibonacci = 0;
       let f0 = 0;
       let f1 = 1;
       let count = 1;
while (count <=20) {
    document.write(fibonacci + "<br>");
    fibonacci = f0 + f1;
    f0 = f1;
    f1 = fibonacci;
    console.log(fibonacci);
    count += 1;
}
