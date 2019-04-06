function HttpGet(url) {
if (url == "changelog") {
    url = "https://script.googleusercontent.com/macros/echo?user_content_key=lxG_6Qu9mD6QrRH4zrLdrgBM7c1Vu9fbCHX6VfI4xMtJkhOJ0btk0pzjxf_STQPMVq3oU-CiMN-pXQKVeMFow5KXe_iAwtehm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKAqnBrKsU6XdtPheMZSmsNT4w2wNDdKvdGr4NM29L16luwkWHYcKBj6imwDoGnDy_KfVnhjI6Uu&lib=MAgao84ipTBKzdrdbtCRxCl8AkA72IT7E";
    document.getElementsByClassName("content")[0].innerHTML = "<div class=\"logotext\"><center>Changelog töltődik...</center></div>";
}
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {
            // callback(xhttp.responseText);
            document.getElementsByClassName("content")[0].innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();


}

