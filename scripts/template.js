"use strict";
//
const url = new URL(location.href),
pathname = url.pathname,
menu = pathname.slice(pathname.lastIndexOf("/")+1,-5);
//
//header
const header = document.createElement("header"),
header_container = document.createElement("div"),
header_inner = document.createElement("div"),
logoTtl_langSelector_wrapper = document.createElement("div"),
header_logoTtl = document.createElement("div"),
logo_a  = document.createElement("a"),
logo_img = document.createElement("img"),
headerTtl_a = document.createElement("a"),
headerTtl_h = document.createElement("h1"),
header_langSelector = document.createElement("div"),
en_a = document.createElement("a"),
ja_a = document.createElement("a"),
menu_nav = document.createElement("nav");
//
header_container.className = "l_header";
header_inner.className = "l_header_inner";
logoTtl_langSelector_wrapper.className = "b_flex h_spaceBetween"
header_logoTtl.className = "b_logoTtl";
header_logoTtl.style = "flex: 0 1 auto;"
logo_a.href = "home.html";
logo_a.style = "flex: 0 0 auto";
logo_img.className = "b_logoTtl_logo";
logo_img.src = "image/logo.jpg";
headerTtl_a.href = "home.html";
headerTtl_a.style = "text-decoration: none;"
headerTtl_h.className = "l_head_ttl b_logoTtl_ttl";
headerTtl_h.textContent = "Hideya Watanabe";
header_langSelector.className = "b_langSelector";
en_a.className = "is_active";
en_a.textContent = "English";
ja_a.href = pathname.replace(menu, `${menu}_ja`);
ja_a.textContent = "日本語";
menu_nav.className = "b_menu l_header_inner";
//menu
const menu_ul = document.createElement("ul");
async function load(){
    //load json
    const data = await (fetch("scripts/data.json")),
    json = await data.json(),
    MENU = await json["menu"];
    //load json    
    //build menu
    for (const m in MENU) {
        const li = document.createElement("li"),
        a = document.createElement("a");
        a.textContent = MENU[m][0];
        a.href = pathname.replace(menu, m);
        if (menu === `${m}`) {
            a.setAttribute("class", "is_active");
        };
        li.append(a);
        menu_ul.append(li);
    };
    //build menu
}
load();
//menu
//build header
logo_a.append(logo_img);
headerTtl_a.append(headerTtl_h);
header_logoTtl.append(logo_a, headerTtl_a);
header_langSelector.append(en_a, ja_a);
logoTtl_langSelector_wrapper.append(header_logoTtl, header_langSelector);
header_inner.append(logoTtl_langSelector_wrapper);
menu_nav.append(menu_ul);
header_container.append(header_inner, menu_nav);
header.append(header_container);
//header





//footer
const footer = document.createElement("footer"),
footer_div = document.createElement("div"),
footer_address = document.createElement("address");
//
footer.className = "l_footer";
footer_div.className = "l_footer_inner";
footer_address.textContent = "contact: watanabehideya at gmail dot com";
footer_div.append(footer_address);
footer.append(footer_div);
//footer


//build
document.body.insertBefore(header, document.body.firstChild);
document.body.append(footer);
