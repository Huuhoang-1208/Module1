let fibonacci = 0;
let f0 = 0;
let f1 = 1;
let count = 1;
let sum = f0 + f1;
while ( count <= 20 ) {
    fibonacci = f0 + f1;
    f0 = f1;
    f1 = fibonacci;
    count += 1;
    sum = sum + fibonacci;
}
 document.write(sum);
 console.log(sum);