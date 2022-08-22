"use strict";
const url = new URL(location.href);
const params = url.searchParams;
let menu = params.get("menu");
if (menu === null) {
    menu = "home";
};
let lang = params.get("lang");
if (lang === null) {
    lang = "en";
};
//ja
if ( lang === "ja") {
    document.getElementById("htmlTag").setAttribute("lang", "ja");
    document.getElementById("tabTtl").textContent = "渡邉 英也";
    document.getElementById("headTtl").innerHTML = "<ruby><rb>渡邉</rb><rt>わたなべ</rt></ruby><ruby><rb>英也</rb><rt>ひでや</rt></ruby>";
}
//logo
if (lang === "ja") {
    const logoTtl = document.getElementById("logoTtl");
    logoTtl.childNodes[1].href = `?menu=home&lang=ja`;
    logoTtl.childNodes[3
    ].href = `?menu=home&lang=ja`;
}
//langSelector
const langSelector = document.getElementById("langSelector");
if (lang === "en") {
    langSelector.childNodes[1].className = "is_active";
    const langSelector_a = langSelector.childNodes[3];
    langSelector_a.className = "";
    langSelector_a.href = `?menu=${menu}&lang=ja`;
} else {
    langSelector.childNodes[3].className = "is_active";
    const langSelector_a = langSelector.childNodes[1];
    langSelector_a.className = "";
    langSelector_a.href = `?menu=${menu}&lang=en`;
};
//menu を作成
const MENU = {
    "home" : ["HOME", "ホーム"],
    "profile" : ["PROFILE", "略歴"],
    "papers" : ["PAPERS", "論文"],
    "talks" : ["TALKS", "招待講演"],
    "organization" : ["ORGANIZATION", "世話人"],
    "funds" : ["FUNDS", "外部資金"],
}
const menuNav = document.getElementById("menuNav");
const ul = document.createElement("ul");
for (const m in MENU) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = (lang === "en") ? MENU[m][0] : MENU[m][1];
    a.href = `?menu=${m}&lang=${lang}`;
    if (menu === m) {
        a.setAttribute("class", "is_active");
    };
    li.append(a);
    ul.append(li);
};
menuNav.append(ul);


const ENDASH = "\u2013";

let Keywords = [
    ["representation theory", "表現論"],
    ["combinatorics", "組合せ論"],
    ["integrable system", "可積分系"],
    ["quantum group", "量子群"],
    ["quantum symmetric pair", "量子対称対"],
    ["Hecke algebra", "ヘッケ代数"],
    ["crystal", "結晶"],
    ["$\\imath$crystal", "$\\imath$結晶"],
    ["$R$-matrix", "$R$-行列"],
    ["$K$-matrix", "$K$-行列"],
];

let Education = [
    {
        type: ["Ph.D. in Science", "博士(理学)"],
        date: "2019-03",
        univ: ["Tokyo Institute of Technology", "東京工業大学"],
        url: ["https://www.titech.ac.jp/english", "https://www.titech.ac.jp/"],
        advisor: ["Satoshi Naito", "内藤聡"],
    },
    {
        type: ["M.S. in Science", "修士(理学)"],
        date: "2016-03",
        univ: ["Tokyo Institute of Technology", "東京工業大学"],
        url: ["https://www.titech.ac.jp/english", "https://www.titech.ac.jp/"],
        advisor: ["Satoshi Naito", "内藤聡"],
    },
    {
        type: ["B.S. in Science", "学士(理学)"],
        date: "2014-03",
        univ: ["The University of Tokyo", "東京大学"],
        url: ["https://www.u-tokyo.ac.jp/en/index.html", "https://www.u-tokyo.ac.jp/ja/index.html"],
        advisor: ["Yoshihisa Saito", "斉藤義久"],
    },
];

let ResearchHistory = [    
    {
        from: "2022-04",
        to: "Present",
        at: ["Osaka Central Advanced Mathematical Institute, Osaka Metropolitan University", "大阪公立大学数学研究所"],
        url: ["http://www.sci.osaka-cu.ac.jp/OCAMI/index_e.html", "http://www.sci.osaka-cu.ac.jp/OCAMI/"],
        as: ["JSPS research fellow PD", "日本学術振興会特別研究員 PD"]
    },   
    {
        from: "2021-04",
        to: "2022-03",
        at: ["Osaka City University Advanced Mathematical Institute, Osaka City University", "大阪市立大学数学研究所"],
        url: ["http://www.sci.osaka-cu.ac.jp/OCAMI/index_e.html", "http://www.sci.osaka-cu.ac.jp/OCAMI/"],
        as: ["JSPS research fellow PD", "日本学術振興会特別研究員 PD"]
    },   
    {
        from: "2020-04",
        to: "2021-03",
        at: ["Kyoto University", "京都大学"],
        url: ["https://www.kyoto-u.ac.jp/en", "https://www.kyoto-u.ac.jp/ja"],
        as: ["part-time teacher", "非常勤講師"]
    },   
    {
        from: "2019-10",
        to: "2021-03",
        at: ["Research Institute for Mathematical Sciences, Kyoto University", "京都大学数理解析研究所"],
        url: ["https://www.kurims.kyoto-u.ac.jp/en/index.html", "https://www.kurims.kyoto-u.ac.jp/ja/index.html"],
        as: ["part-time researcher", "非常勤研究員"]
    },   
    {
        from: "2019-04",
        to: "2019-09",
        at: ["Graduate School of Information Science and Technology, Osaka University", "大阪大学情報科学研究科"],
        url: ["https://www.ist.osaka-u.ac.jp/english/", "https://www.ist.osaka-u.ac.jp/japanese/"],
        as: ["project researcher", "特任研究員"]
    },
    {
        from: "2017-04",
        to: "2019-03",
        at: ["Department of Mathematics, Tokyo Institute of Technology", "東京工業大学理学院数学系"],
        url: ["https://www.titech.ac.jp/english", "https://www.titech.ac.jp/"],
        as: ["JSPS research fellow DC2", "日本学術振興会特別研究員"]
    },
];

let Papers = [
    {
        coauthors: ["Yamamura, Keita"],
        title: "Alcove paths and Gelfand-Tsetlin patterns",
        journal: "Annals of Combinatorics, 25 (2021), no. 3, 645\u2013676",
        MRnumber: "MR4301586",
        url: "https://link.springer.com/article/10.1007/s00026-021-00544-5",
    },
    {
        coauthors: [],
        title: "Classical weight modules over $\\imath$quantum groups",
        journal: "Journal of Algebra, 578 (2021), 241\u2013302",
        MRnumber: "MR4234802",
        url: "https://www.sciencedirect.com/science/article/pii/S0021869321001332?via%3Dihub",
    },
    {
        coauthors: [],
        title: "Global crystal bases for integrable modules over a quantum symmetric pair of type AIII",
        journal: "Representation Theory 25 (2021), 27\u201366",
        MRnumber: "MR4198491",
        url: "https://www.ams.org/journals/ert/2021-25-02/S1088-4165-2021-00556-X/",
    },
    {
        coauthors: [],
        title: "Crystal basis theory for a quantum symmetric pair $(\\mathbf{U},\\mathbf{U}^\\jmath)$",
        journal: "International Mathematics Research Notices. IMRN, (2020), no. 22, 8292\u20138352",
        MRnumber: "MR4216690",
        url: "https://academic.oup.com/imrn/article/2020/22/8292/5123593?login=true",
    },
    {
        coauthors: ["Fan, Zhaobin", "Lai, Chun-Ju", "Li, Yiqiang", "Luo, Li", "Wang, Weiqiang"],
        title: "Quantum Schur duality of affine type $C$ with three parameters",
        journal: "Mathematical Research Letters, 27 (2020), no. 1, 79\u2013114",
        MRnumber: "MR4088809",
        url: "",
    },
    {
        coauthors: ["Bao, Huanchen", "Wang, Weiqiang"],
        title: "Canonical bases for tensor products and super Kazhdan-Lusztig theory",
        journal: "Journal of Pure and Applied Algebra, 224 (2020), no. 8, 106347, 9 pp.",
        MRnumber: "MR4074585",
        url: "https://www.sciencedirect.com/science/article/pii/S002240492030044X?via%3Dihub",
    },
    {
        coauthors: ["Bao, Huanchen", "Wang, Weiqiang"],
        title: "Multiparameter quantum Schur duality of type $B$",
        journal: "Proceedings of the American Mathematical Society, 146 (2018), no. 8, 3203\u20133216",
        MRnumber: "MR3803649",
        url: "https://www.ams.org/journals/proc/2018-146-08/S0002-9939-2018-13749-1/",
    },
    {
        coauthors: ["Naito, Satoshi"],
        title: "A combinatorial formula expressing periodic $R$-polynomials",
        journal: "Journal of Combinatorial Theory Series A, 148 (2017), 197\u2013243",
        MRnumber: "MR3603320",
        url: "https://www.sciencedirect.com/science/article/pii/S0097316516301406?via%3Dihub",
    },
];

let Preprints = [
    {
        coauthors: [],
        title: "Stability of $\\imath$canonical bases of irreducible finite type of real rank one",
        at: "arXiv:2207.05919v2",
        url: "https://arxiv.org/abs/2207.05919"
    },
    {
        coauthors: [],
        title: "Crystal bases of modified $\\imath$quantum groups of certain quasi-split types",
        at: "arXiv:2110.07177",
        url: "https://arxiv.org/abs/2110.07177"
    },
    {
        coauthors: [],
        title: "A new tableau model for irreducible polynomial representations of the orthogonal group",
        at: "arXiv:2107.00170",
        url: "https://arxiv.org/abs/2107.00170"
    },
    {
        coauthors: [],
        title: "Based modules over the $\\imath$quantum group of type AI",
        at: "arXiv:2103.12932",
        url: "https://arxiv.org/abs/2103.12932"
    },
];

let Talks = [
    {
        date: "2022-02-23",
        title: "Crystal bases of modified $i$-quantum groups of certain quasi-split types",
        at: ["UVA Algebra Seminar, University of Virginia (online)"],
        fav: false,
    },
    {
        date: "2021-09-22",
        title: "Based modules over the $i$-quantum group of type AI",
        at: ["NUS Seminar, National University of Singapore (online)"],
        fav: false,
    },
    {
        date: "2021-01-21",
        title: "Based modules over the $i$-quantum groups of type AI",
        at: ["Tokyo-Nagoya Algebra Seminar (online)", "東京名古屋代数セミナー(オンライン)"],
        fav: false,
    },
    {
        date: "2020-10-28",
        title: "Recent progress on representation theory of iquantum groups",
        at: ["Rikkyo University (online)", "立教大学定例セミナー(オンライン)"],
        fav: false,
    },
    {
        date: "2020-09-03",
        title: "Crystal bases of iquantum groups and centralizer algebras",
        at: ["65th Algebra Symposium (online)", "第65回代数学シンポジウム(オンライン)"],
        fav: true,
    },
    {
        date: "2020-07-14",
        title: "Combinatorial representation theory arising from quantum symmetric pairs",
        at: ["KIAS Workshop on Combinatorial Problems of Algebraic Origin (online)"],
        fav: true,
    },
    {
        date: "2020-05-14",
        title: "Classical weight modules over $i$-quantum groups",
        at: ["Kyoto Representation Theory Seminar (online)", "京都表現論セミナー(オンライン))"],
        fav: false,
    },
    {
        date: "2020-03-18",
        title: "$\\imath$quantizations",
        at: ["MSJ Spring Meeting 2020, A Talk Invited By Infinite Analysis Session (online)", "日本数学会2020年度年会 無限可積分系セッション特別講演(オンライン)"],
        fav: true,
    },
    {
        date: "2019-11-29",
        title: "Classical modules over $i$-quantum groups",
        at: ["Conference on Algebraic Representation Theory 2019, National Tsing Hua University"],
        fav: false,
    },
    {
        date: "2019-05-10",
        title: "A new approach to classical representations of non-standard quantum group $U'_q(\\mathfrak{so}_n)$",
        at: ["Minami Osaka Daisu Seminar, Osaka Prefecture University", "南大阪代数セミナー"],
        fav: false,
    },
    {
        date: "2019-03-05",
        title: "Highest weight theory for $\\imath$-quantum groups of type $A$",
        at: ["Infinite Analysis 19 Quantum symmetries and Integrable Systems, The University of Tokyo"],
        fav: true,
    },
    {
        date: "2019-02",
        title: "Global crystal bases of modules over a quantum symmetric pair",
        at: ["Mini-Workshop on Representation Theory, Kyoto University"],
        fav: false,
    },
    {
        date: "2018-07",
        title: "On global crystal bases for integrable modules over a quantum symmetric pair coideal subalgebra",
        at: ["ECNU Workshop, East China Normal University"],
        fav: false,
    },
    {
        date: "2018-05",
        title: "Crystal basis theory for a quantum symmetric pair",
        at: ["UVA Algebra Seminar, University of Virginia"],
        fav: false,
    },
    {
        date: "2017-11",
        title: "Kazhdan-Lusztig bases and quantum symmetric pairs",
        at: ["Conference on Algebraic Representation Theory 2017"],
        fav: false,
    },
];

let Funds = [
    {
        from: "2021-04",
        to: "2024-03",
        number: "21J00013",
        name: ["Combinatorial structures appearing in representation theory of quantum symmetric subalgebras, and their applications", "量子対称部分代数の表現論に現れる組合せ構造とその応用"],
        category: ["Grant-in-Aid for JSPS Fellows", "特別研究員奨励費"],
        url: ["https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-21J00013/", "https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-21J00013/"]
    },
    {
        from: "2020-04",
        to: "2024-03",
        number: "20K14286",
        name: ["Weight modules and crystal bases for quantum symmetric pairs", "量子対称対のウェイト表現と結晶基底"],
        category: ["Grant-in-Aid for Early-Career Scientists", "若手研究"],
        url: ["https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-20K14286/", "https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-20K14286/"]
    },
    {
        from: "2017-04",
        to: "2019-03",
        number: "17J00172",
        name: ["An approach to the Kazhdan-Lusztig polynomials via the representation theory of quantum symmetric pairs", "カジュダン・ルスティック多項式への量子対称対の表現論によるアプローチ"],
        category: ["Grant-in-Aid for JSPS Fellows", "特別研究員奨励費"],
        url: ["https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-17J00172/", "https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-17J00172/"]
    }
];

let Organizing = [
    {
        from: "2022-01",
        to: "Present",
        name: ["Physical Algebra and Combinatorics Seminar", "物理的な代数と組合せ数学セミナー"],
        url: ["https://tscrim.github.io/pacs_en.html", "https://tscrim.github.io/pacs.html"],
    },
    {
        from: "2020-04",
        to: "2021-03",
        name: ["Kyoto Representation Theory Seminar", "京都表現論セミナー"],
        url: ["https://www.kurims.kyoto-u.ac.jp/en/seminar/seminar-arakawa.html", "https://www.kurims.kyoto-u.ac.jp/ja/seminar/seminar-arakawa.html"],
    },
]


const article = document.getElementById(menu);
article.removeAttribute("hidden");

if (menu === "home") {
    const ttl = article.firstElementChild;
    if (lang === "ja") {
        ttl.textContent = "ホーム";
    }
    const home_ul = article.lastElementChild.firstElementChild;
    for (const m in MENU) {
        if (m !== "home") {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = (lang === "en") ? MENU[m][0] : MENU[m][1];
            a.href = `?menu=${m}&lang=${lang}`;
            li.append(a);
            home_ul.append(li);
        }
    };
}
//profile
else if (menu === "profile") {
    const ttl = article.firstElementChild
    const interests = document.getElementById("interests");
    const int_child = interests.childNodes;
    if (lang === "ja") {
        ttl.textContent = "略歴";
        int_child[1].textContent = "研究対象";
        int_child[3].textContent = "Lie 代数と関連する対象の表現論、及びそれらの相互関係."
    }

    const keywords = document.getElementById("keywords");
    const kw_child = keywords.childNodes;
    if (lang === "ja") {
        kw_child[1].textContent = "キーワード";
    }
    let result = ""
    for (const kw of Keywords) {
        result += ((lang==="en") ? kw[0] : kw[1]) + ", "
    };
    result = result.slice(0,-2);
    result += "."
    kw_child[3].textContent = result;
    

    let edu = document.getElementById("edu");
    if (lang === "ja") {
        edu.childNodes[1].textContent = "学位"
        edu.childNodes[3].classList.add("ja");
    }
    for (const obj of Education) {
        const li = document.createElement("li");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        const type_ = (lang === "en") ? obj.type[0] : obj.type[1];
        const univ = (lang === "en") ? obj.univ[0] : obj.univ[1];
        const url = (lang === "en") ? obj.url[0] : obj.url[1];
        const adv = (lang === "en") ? "Supervisor: " + obj.advisor[0] : "指導教員: " + obj.advisor[1];
        div1.textContent = `${type_}:`;
        div2.innerHTML = `<a href="${url}">${univ}</a>, ${obj.date}, ${adv}`;
        li.append(div1, div2);
        edu.childNodes[3].append(li);
    };
    

    let his = document.getElementById("his");
    if (lang === "ja") {
        his.childNodes[1].textContent = "職歴"
    }
    for (const obj of ResearchHistory) {
        let li = document.createElement("li");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        let to = obj.to;
        if (to === "Present" && lang === "ja") {
            to = "現在";
        }
        div1.textContent = `${obj.from}${ENDASH}${to}:`;
        const url = (lang === "en") ? obj.url[0] : obj.url[1];
        const as = (lang === "en") ? obj.as[0] : obj.as[1];
        const at = (lang === "en") ? obj.at[0] : obj.at[1];
        div2.innerHTML = `<a href="${url}">${at}</a>, ${as}.`;
        li.append(div1, div2);
        his.childNodes[3].append(li);
    };
} else if (menu === "papers") {
    //papers
    if (lang === "ja") {
        article.childNodes[1].textContent = "論文";
        article.childNodes[3].childNodes[1].textContent = "掲載済み";
        article.childNodes[5].childNodes[1].textContent = "プレプリント";
    }
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
    
    let papers_ol = document.getElementById("papers_ol");
    for (let i = 0, l = Papers.length; i < l; i++) {
        const paper = Papers[i];
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerHTML = format_paper(paper);
        li.append(span);
        papers_ol.append(li);
    }
    
    let pre_ol = document.getElementById("preprints_ol");
    for (let i = 0, l = Preprints.length; i < l; i++) {
        const preprint = Preprints[i];
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerHTML = format_preprint(preprint);
        li.append(span);
        pre_ol.append(li);
    };
    

    let art = document.getElementById(menu);
    art.removeAttribute("hidden");
} else if (menu === "talks") {
    //talks 
    if (lang === "ja") {
        article.childNodes[1].textContent = "招待講演";
    }
    for (let i = 0, l = Talks.length; i < l; i++) {
        const talk = Talks[i];
        const li = document.createElement("li");
        const span = document.createElement("span");
        let at = (lang === "en") ? talk.at[0] : talk.at[1];
        if (at === undefined) {
            at = talk.at[0];
        }
        span.innerHTML = `${talk.title}, ${at}, ${talk.date}.`;
        li.append(span);
        article.childNodes[3].childNodes[1].append(li);
    };


    let art = document.getElementById(menu);
    art.removeAttribute("hidden");
} else if (menu === "funds") {
    //funds
    if (lang === "ja") {
        article.childNodes[1].textContent = "外部資金"
    }
    let funds_ul = document.getElementById("funds_ul");
    for (const obj of Funds) {
        let li = document.createElement("li");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        const name_ = (lang === "en") ? obj.name[0] : obj.name[1];
        const cat = (lang === "en") ? obj.category[0] : obj.category[1];
        const url = (lang === "en") ? obj.url[0] : obj.url[1];
        div1.textContent = `${obj.from}${ENDASH}${obj.to}:`;
        div2.innerHTML =  `${name_}, ${cat}, Grant Number: <a href="${url}">${obj.number}</a>.`;
        li.append(div1, div2);
        funds_ul.append(li);
    };    


    let art = document.getElementById(menu);
    art.removeAttribute("hidden");
} else if (menu === "organization") {
    //organization
    if(lang === "ja") {
        article.childNodes[1].textContent = "世話人";
    };
    let orgnz_ul = document.getElementById("orgnz_ul");
    for (const obj of Organizing) {
        let li = document.createElement("li");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        let to = obj.to;
        if (lang === "ja" && to === "Present") {
            to = "現在";
        }
        const name_ = (lang === "en") ? obj.name[0] : obj.name[1];
        const url = (lang === "en") ? obj.url[0] : obj.url[1];
        div1.textContent = `${obj.from}${ENDASH}${to}:`;
        div2.innerHTML = `<a href="${url}">${name_}</a>.`;
        li.append(div1, div2);
        orgnz_ul.append(li);
    };


    let art = document.getElementById(menu);
    art.removeAttribute("hidden");
};


    














