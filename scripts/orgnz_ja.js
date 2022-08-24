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
        let to = (obj.to === "Present") ? "現在" : obj.to;
        div1.textContent = `${obj.from}${ENDASH}${to}:`;
        div2.innerHTML = `<a href="${obj.url[1]}">${obj.name[1]}</a>.`;
        li.append(div1, div2);
        orgnz_frag.append(li);
    };
    orgnz_ul.append(orgnz_frag);
    //build
}
mk_orgnz();
