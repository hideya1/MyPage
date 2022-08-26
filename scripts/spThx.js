"use strict";
const ENDASH = "\u2013";

const spThx_ul = document.getElementById("spThx_ul"),
spThx_frag = document.createDocumentFragment();
async function mk_spThx(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    SpecialThanks = await json["spThx"];
    //load json    
    //build
    for (const obj of SpecialThanks) {
        const li = document.createElement("li"),
        div = document.createElement("div");
        let url_ = obj.url[0],
        name_ = obj.name[0];
        if (url_ === "") {
            url_ = obj.url[1]
        };
        if (name_ === "") {
            name_ = obj.name[1]
        };
        div.innerHTML = `<a href="${url_}">${name_}</a>.`;
        li.append(div);
        spThx_frag.append(li);
    };
    spThx_ul.append(spThx_frag);
    //build
}
mk_spThx();
