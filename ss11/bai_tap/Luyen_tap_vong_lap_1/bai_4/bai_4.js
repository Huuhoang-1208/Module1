let f0 = 0;
   let f1 = 1;
   let fibonacci;
   let count = 0;
   while ( count < 1 ) {
       fibonacci = f0 + f1;
       f0 = f1;
       f1 = fibonacci;

       if (fibonacci % 5 === 0) {
           document.write(fibonacci + "<br>");
           count +=1;
       }
   }