"use strict";

const talks_ol = document.getElementById("talks_ol"),
talks_frag = document.createDocumentFragment();
async function mk_talks(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    Talks = await json["talks"];
    //load json    
    //build
    for (let i = 0, l = Talks.length; i < l; i++) {
        const talk = Talks[i],
        li = document.createElement("li"),
        span = document.createElement("span");
        span.innerHTML = `${talk.title}, ${talk.at[0]}, ${talk.date}.`;
        li.append(span);
        talks_frag.append(li);
    };
    talks_ol.append(talks_frag);
    //build
}
mk_talks();
