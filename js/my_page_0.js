const url = location.href,
art = document.getElementsByClassName("art")[0],
div = document.createElement("div"),
en = document.createElement("a"),
ja = document.createElement("a");
ja.textContent = "日本語";
ja.href = url.replace("_en.html", "_ja.html")
ja.style.opacity = 0.6
ja.style.textDecoration = "none";
en.textContent = "英語"
en.style.marginLeft = "1rem";
en.style.textDecoration = "none";
div.appendChild(ja);
div.appendChild(en);
div.style.alignSelf = "flex-end";

art.insertBefore(div, art.firstChild)
