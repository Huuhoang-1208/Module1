function check() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let result;
    if (a, b, c > 0) {
        if (a + b > c || b + c > a || a + c > b) {
            result = "Là các cạnh của một tam giác";
        } else {
            result = "Không phải là các cạnh của một tam giác";
        }
    } else {
        result = "Không phải là các cạnh của một tam giác";
    }
    document.getElementById("result").innerHTML = result;
}