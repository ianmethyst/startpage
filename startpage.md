<!DOCTYPE HTML>
<html>
<head>
<title>
Inicio
</title>
<link rel='stylesheet' href='style.css' />
</head>
<body>

# hi ianmethyst, [what are you up to today?](https://trello.com/b/5S7U2w4A)

| google | social | reddit | brotherhood | localhost |
|--------|--------|--------|-------------|-----------|
| [gmail](https://mail.google.com) | [what up](https://web.whatsapp.com) | [startpage](https://reddit.com) | [nextcloud](https://juglares.ddns.net) | [localhost:80](http://localhost)
| [drive](https://drive.google.com) | [faceboobs](https://facebook.com) | [/r/unixporn](https://reddit.com/r/unixporn) |[calendar](https://juglares.ddns.net/index.php/apps/calendar/) | [localhost:8000](http://localhost:8080)
| [calendar](https://calendar.google.com) | [twitter](https://twitter.com) |[/r/linux](https://reddit.com/r/linux) | [pihole](http://192.168.0.128:8080/admin/) | [localhost:8080](http://localhost:8080)
| [keep](https://keep.google.com) | [instagram](https://instagram.com) | [/r/archlinux](https://reddit.com/r/archlinux) | [kodi](http://192.168.0.132:8080/) | [localhost:8500](http://localhost:8500)
| [analytics](https://analytics.google.com) | [discord](https://discord.com) | | | [GraphiQL](http://localhost:8500/___graphql)


<div id="date"></div>

<script>
var element = document.querySelector('#date');

function renderDate() {

    var date = new Date();
    var localeDate = date.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })

    element.innerHTML = localeDate;
}

window.setInterval(renderDate, 1000);
</script>

</body>
</html>
