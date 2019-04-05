function HttpGet(url) {
    document.onload = function () {
        
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        document.getElementsByClassName("content")[0].innerHTML = "<center>Töltődik...</center>";
        if (this.readyState == 4 && this.status == 200) {
            // callback(xhttp.responseText);
            document.getElementsByClassName("content")[0].innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

