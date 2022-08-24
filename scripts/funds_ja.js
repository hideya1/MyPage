"use strict";
const ENDASH = "\u2013";

const funds_ul = document.getElementById("funds_ul"),
funds_frag = document.createDocumentFragment();
async function mk_funds(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    Funds = await json["funds"];
    //load json    
    //build
    for (const obj of Funds) {
        let li = document.createElement("li");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        div1.textContent = `${obj.from}${ENDASH}${obj.to}:`;
        div2.innerHTML =  `${obj.name[1]}, ${obj.category[1]}, 課題番号: <a href="${obj.url[1]}">${obj.number}</a>.`;
        li.append(div1, div2);
        funds_frag.append(li);
    };
    funds_ul.append(funds_frag);
    //build
}
mk_funds();
