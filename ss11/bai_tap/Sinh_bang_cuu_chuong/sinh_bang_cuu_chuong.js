let table = "<table border=1 ; width=100%> ";
for (i =1 ; i <= 10; i++ ) {
    table = table + "<tr>";
    for (j =1 ; j <= 10; j++ ) {
        table = table + "<td>" + j + "x" + i + "=" + j * i + "</td>";
    }
   table = table + "</tr>";
}
 table = table + "</table>";
 document.write(table);