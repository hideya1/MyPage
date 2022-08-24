const home_ul = document.getElementById("home_ul");
async function load(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    MENU = await json["menu"];
    //load json    
    //build menu
    for (const m in MENU) {
        if (m !== "home") {
            const li = document.createElement("li"),
            a = document.createElement("a");
            a.textContent = MENU[m][0];
            a.href = pathname.replace(menu, m);
            li.append(a);
            home_ul.append(li);
        }
    };
    //build menu
}
load();

