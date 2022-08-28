"use strict";
const ENDASH = "\u2013";

const facility_ul = document.getElementById("facility_ul"),
facility_frag = document.createDocumentFragment(),
book_ul = document.getElementById("book_ul"),
book_frag = document.createDocumentFragment(),
group_ul = document.getElementById("group_ul"),
group_frag = document.createDocumentFragment(),
movie_ul = document.getElementById("movie_ul"),
movie_frag = document.createDocumentFragment();
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
        let url = "";
        if (obj.url !== "") {
            div.innerHTML = `<a href="${url}">${obj.name}</a>`;
        } else {
            div.textContent = obj.name;
        }
        li.append(div);
        if (obj.cat === "facility") {
            facility_frag.append(li);
        } else if (obj.cat === "book") {
            book_frag.append(li);
        } else if (obj.cat === "group") {
            group_frag.append(li);
        } else if (obj.cat === "movie") {
            movie_frag.append(li);
        }
    };
    facility_ul.append(facility_frag);
    book_ul.append(book_frag);
    group_ul.append(group_frag);
    movie_ul.append(movie_frag);
    //build
}
mk_spThx();
