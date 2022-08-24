"use strict";
const ENDASH = "\u2013";
//
const kw_p = document.getElementById("keywords_p");
let result = "";
async function mk_kw(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    Keywords = await json["kw"];
    //load json    
    //build keywords
    for (const kw of Keywords) {
        result += kw[0] + ", "
    };
    result = result.slice(0,-2);
    result += "."
    kw_p.textContent = result;
    //build keywords
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
    //build edu
    for (const obj of Education) {
        const li = document.createElement("li"),
        div1 = document.createElement("div"),
        div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        div1.textContent = `${obj["type"][0]}:`;
        div2.innerHTML = `<a href="${obj["url"][0]}">${obj["univ"][0]}</a>, ${obj["date"]}, Supervisor: ${obj["advisor"][0]}`;
        li.append(div1, div2);
        edu_frag.append(li);
    };
    edu_ul.append(edu_frag);
    //build edu
}
mk_edu();


const his_ul = document.getElementById("his_ul"),
his_frag = document.createDocumentFragment();
async function mk_his(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    ResearchHistory = await json["his"];
    //load json    
    //build
    for (const obj of ResearchHistory) {
        let li = document.createElement("li"),
        div1 = document.createElement("div"),
        div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        div1.textContent = `${obj.from}${ENDASH}${obj.to}:`;
        div2.innerHTML = `<a href="${obj.url[0]}">${obj.at[0]}</a>, ${obj.as[0]}.`;
        li.append(div1, div2);
        his_frag.append(li);
    };
    his_ul.append(his_frag);
    //build
}
mk_his();