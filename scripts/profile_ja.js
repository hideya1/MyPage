"use strict";
//
const kw_p = document.getElementById("keywords_p");
let result = ""
for (const kw of Keywords) {
    result += kw[1] + ", "
};
result = result.slice(0,-2);
result += "."
kw_p.textContent = result;


let edu_ul = document.getElementById("edu_ul");
for (const obj of Education) {
    const li = document.createElement("li"),
    div1 = document.createElement("div"),
    div2 = document.createElement("div");
    div1.className = "b_2col_list_1st";
    div1.style = "flex-basis: 5rem;"
    div2.className = "b_2col_list_2nd";
    div1.textContent = `${obj.type[1]}:`;
    div2.innerHTML = `<a href="${obj.url[1]}">${obj.univ[1]}</a>, ${obj.date}, Supervisor: ${obj.advisor[1]}`;
    li.append(div1, div2);
    edu_ul.append(li);
};


let his_ul = document.getElementById("his_ul");
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
    his_ul.append(li);
};