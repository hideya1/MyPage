const talks_ol = document.getElementById("talks_ol");
for (let i = 0, l = Talks.length; i < l; i++) {
    const talk = Talks[i],
    li = document.createElement("li"),
    span = document.createElement("span"),
    at = (talk.at[1] === undefined) ? talk.at[0] : talk.at[1];
    span.innerHTML = `${talk.title}, ${at}, ${talk.date}.`;
    li.append(span);
    talks_ol.append(li);
};
