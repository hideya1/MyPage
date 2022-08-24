"use strict";
const ENDASH = "\u2013";
//
const kw_p = document.getElementById("keywords_p");
let result = ""
async function mk_kw(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    Keywords = await json["kw"];
    //load json    
    //build
    for (const kw of Keywords) {
        result += kw[1] + ", "
    };
    result = result.slice(0,-2);
    result += "."
    kw_p.textContent = result;
    //build
}
mk_kw();


const edu_ul = document.getElementById("edu_ul"),
edu_frag = document.createDocumentFragment();
async function mk_edu(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    Education = await json["edu"];
    //load json    
    //build
    for (const obj of Education) {
        const li = document.createElement("li"),
        div1 = document.createElement("div"),
        div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div1.style = "flex-basis: 5rem;"
        div2.className = "b_2col_list_2nd";
        div1.textContent = `${obj.type[1]}:`;
        div2.innerHTML = `<a href="${obj.url[1]}">${obj.univ[1]}</a>, ${obj.date}, 指導教員: ${obj.advisor[1]}`;
        li.append(div1, div2);
        edu_frag.append(li);
    };
    edu_ul.append(edu_frag);
    //build
}
mk_edu();


let his_ul = document.getElementById("his_ul"),
his_frag = document.createDocumentFragment();
async function mk_his(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    ResearchHistory = await json["his"];
    //load json    
    //build
    for (const obj of ResearchHistory) {
        const li = document.createElement("li"),
        div1 = document.createElement("div"),
        div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        let to = obj.to;
        if (to === "Present") {
            to = "現在";
        };
        div1.textContent = `${obj.from}${ENDASH}${to}:`;
        div2.innerHTML = `<a href="${obj.url[1]}">${obj.at[1]}</a>, ${obj.as[1]}.`;
        li.append(div1, div2);
        his_frag.append(li);
    };
    his_ul.append(his_frag);
    //build
}
mk_his();