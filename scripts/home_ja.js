const home_ul = document.getElementById("home_ul");
for (const m in MENU) {
    if (m !== "home") {
        const li = document.createElement("li"),
        a = document.createElement("a");
        a.textContent = MENU[m][1];
        a.href = `${m}_ja.html`;
        li.append(a);
        home_ul.append(li);
    }
};