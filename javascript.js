function HttpGet(url) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        document.getElementsByClassName("content")[0].innerHTML = "<div class=\"logotext\"><center>Épp kurblizzuk az API-ból...</center></div>";
        if (this.readyState == 4 && this.status == 200) {
            // callback(xhttp.responseText);
            document.getElementsByClassName("content")[0].innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();


}

