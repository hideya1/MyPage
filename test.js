let para = document.body.querySelector("#para1");
para.textContent = "cc";

let ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
    li = document.createElement("li");
    li.textContent = i;
    ul.append(li);
}

para.append(ul)
