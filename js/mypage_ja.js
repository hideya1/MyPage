const header_inner = document.getElementsByClassName("header_inner")[0],
lang_selector = document.createElement("div"),
en = document.createElement("a"),
ja = document.createElement("a"),
URL = location.href;

header_inner.classList.add("flexContainer__spaceBetween");

lang_selector.className = "menu";
lang_selector.appendChild(en);
lang_selector.appendChild(ja);

en.textContent = "English";
en.href = URL.replace("_ja.html", ".html");
en.style = "border-bottom: none; padding-right: 10px; padding-left: 10px;";
ja.textContent = "日本語";
ja.className = "is_active";
ja.style = "border-bottom: none; padding-right: 10px; padding-left: 10px;";
header_inner.appendChild(lang_selector);
