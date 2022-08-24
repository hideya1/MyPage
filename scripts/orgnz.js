"use strict";
const ENDASH = "\u2013";

const orgnz_ul = document.getElementById("orgnz_ul"),
orgnz_frag = document.createDocumentFragment();
async function mk_orgnz(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    Organizing = await json["orgnz"];
    //load json    
    //build
    for (const obj of Organizing) {
        const li = document.createElement("li"),
        div1 = document.createElement("div"),
        div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        div1.textContent = `${obj.from}${ENDASH}${obj.to}:`;
        div2.innerHTML = `<a href="${obj.url[0]}">${obj.name[0]}</a>.`;
        li.append(div1, div2);
        orgnz_frag.append(li);
    };
    orgnz_ul.append(orgnz_frag);
    //build
}
mk_orgnz();
