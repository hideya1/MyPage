const url = location.href,
art = document.getElementsByClassName("art")[0],
div = document.createElement("div"),
en = document.createElement("a"),
ja = document.createElement("a");
en.textContent = "English";
en.href = url.replace("_ja.html", "_en.html")
en.style.opacity = 0.6
en.style.textDecoration = "none";
ja.textContent = "Japanese"
ja.style.marginLeft = "1rem";
ja.style.textDecoration = "none";
div.appendChild(en);
div.appendChild(ja);
div.style.alignSelf = "flex-end";

art.insertBefore(div, art.firstChild)
