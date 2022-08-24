"use strict";
const ENDASH = "\u2013";
//
function format_name(name) {
    let result = name.split(", ");
    return result[1] + " " + result[0];
};

function format_paper(paper) {
    let result = "";
    if (paper.coauthors.length > 0) {
        result += "(joint work with "
        for (let i = 0; i < paper.coauthors.length; i++) {
            result += format_name(paper.coauthors[i]);
            if (i < paper.coauthors.length-2) {
                result += ", ";
            } else if (i == paper.coauthors.length-2) {
                result += ", and ";
            } else {
                result += ") ";
            };
        };
    };
    result += `${paper.title}, <a href="${paper.url}">${paper.journal}</a>.`;
    return result;
};

function format_preprint(preprint) {
    let result = "";
    if (preprint.coauthors.length > 0) {
        result += "(joint work with "
        for (let i = 0; i < preprint.coauthors.length; i++) {
            result += format_name(preprint.coauthors[i]);
            if (i < preprint.coauthors.length-2) {
                result += ", ";
            } else if (i == preprint.coauthors.length-2) {
                result += ", and ";
            } else {
                result += ") ";
            };
        };
    };
    result += `${preprint.title}, <a href="${preprint.url}">${preprint.at}</a>.`;
    return result;
};
//

const papers_ol = document.getElementById("papers_ol"),
papers_frag = document.createDocumentFragment();
async function mk_papers(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    Papers = await json["papers"];
    //load json    
    //build
    for (let i = 0, l = Papers.length; i < l; i++) {
        const paper = Papers[i],
        li = document.createElement("li"),
        span = document.createElement("span");
        span.innerHTML = format_paper(paper);
        li.append(span);
        papers_frag.append(li);
    }
    papers_ol.append(papers_frag);
    //build
}
mk_papers();

const pre_ol = document.getElementById("pre_ol"),
pre_frag = document.createDocumentFragment();
async function mk_pre(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    Preprints = await json["preprints"];
    //load json    
    //build
    for (let i = 0, l = Preprints.length; i < l; i++) {
        const preprint = Preprints[i],
        li = document.createElement("li"),
        span = document.createElement("span");
        span.innerHTML = format_preprint(preprint);
        li.append(span);
        pre_frag.append(li);
    };
    pre_ol.append(pre_frag);
    //build
}
mk_pre();

