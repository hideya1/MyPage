"use strict";
//
const url = new URL(location.href),
pathname = url.pathname,
menu = pathname.slice(pathname.lastIndexOf("/"),-5);
//
//header
const header = document.createElement("header"),
header_container = document.createElement("div"),
header_inner = document.createElement("div"),
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
header_inner.className = "l_header_inner b_logoTtl_wrapper";
header_logoTtl.className = "b_logoTtl";
logo_a.href = "home.html";
logo_img.className = "b_logoTtl_logo";
logo_img.src = "image/logo.jpg";
headerTtl_a.href = "home.html";
headerTtl_a.style = "text-decoration: none;"
headerTtl_h.className = "l_head_ttl b_logoTtl_ttl";
headerTtl_h.textContent = "Hideya Watanabe";
header_langSelector.className = "b_langSelector";
en_a.className = "is_active";
en_a.href = `${pathname}`;
en_a.textContent = "English";
ja_a.href = `${menu}_ja.html`;
ja_a.textContent = "日本語";
menu_nav.className = "b_menu";
//menu
const menu_ul = document.createElement("ul");
for (const m in MENU) {
    const li = document.createElement("li"),
    a = document.createElement("a");
    a.textContent = MENU[m][0];
    a.href = `/${m}.html`;
    if (menu === `/${m}`) {
        a.setAttribute("class", "is_active");
    };
    li.append(a);
    menu_ul.append(li);
};
//build
logo_a.append(logo_img);
headerTtl_a.append(headerTtl_h);
header_logoTtl.append(logo_a, headerTtl_a);
header_langSelector.append(en_a, ja_a);
header_inner.append(header_logoTtl, header_langSelector);
header_container.append(header_inner);
menu_nav.append(menu_ul);
header.append(header_container, menu_nav);
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
