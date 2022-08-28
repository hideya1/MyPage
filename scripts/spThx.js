"use strict";
const ENDASH = "\u2013";

const entity_ul = document.getElementById("entity_ul"),
entity_frag = document.createDocumentFragment();
const book_ul = document.getElementById("book_ul"),
book_frag = document.createDocumentFragment();
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
        div.innerHTML = `<a href="${obj.url}">${obj.name}</a>.`;
        li.append(div);
        if (obj.cat === "entity") {
            entity_frag.append(li);
        } else if (obj.cat === "book") {
            book_frag.append(li);
        }
    };
    entity_ul.append(entity_frag);
    book_ul.append(book_frag);
    //build
}
mk_spThx();
