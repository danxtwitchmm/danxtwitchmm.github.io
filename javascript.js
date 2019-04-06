function HttpGet(url) {
    if (url == "changelog") {
        url = "https://script.googleusercontent.com/macros/echo?user_content_key=lxG_6Qu9mD6QrRH4zrLdrgBM7c1Vu9fbCHX6VfI4xMtJkhOJ0btk0pzjxf_STQPMVq3oU-CiMN-pXQKVeMFow5KXe_iAwtehm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKAqnBrKsU6XdtPheMZSmsNT4w2wNDdKvdGr4NM29L16luwkWHYcKBj6imwDoGnDy_KfVnhjI6Uu&lib=MAgao84ipTBKzdrdbtCRxCl8AkA72IT7E";
        document.getElementsByClassName("content")[0].innerHTML = "<div class=\"logotext\"><center>Changelog töltődik...</center></div>";
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByClassName("content")[0].innerHTML = xhttp.responseText;
            if(url =="lmm.html") {
                DiscordInfo("https://discordapp.com/api/v6/invite/4YKn62P?with_counts=true");
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    //https://discordapp.com/api/v6/invite/4YKn62P?with_counts=true    <---meghívó kódból a szerver létszám és online tagok. https://discord.gg/4YKn62P
}

function DiscordInfo(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = xhttp.responseText;
            data = JSON.parse(data);
            
            document.getElementsByClassName("statustext_online")[0].innerHTML = data.approximate_presence_count+" Elérhető";
            document.getElementsByClassName("statustext_all")[0].innerHTML = data.approximate_member_count+" Tag";
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    //https://discordapp.com/api/v6/invite/4YKn62P?with_counts=true    <---meghívó kódból a szerver létszám és online tagok. https://discord.gg/4YKn62P
}
