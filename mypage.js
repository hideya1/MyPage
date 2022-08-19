"use strict";
let url = new URL(location.href);
let params = url.searchParams;
let menu = params.get("menu");
if (menu === null) {
    menu = "HOME";
}
//menu を作成
const MENU = [
    "HOME",
    "PAPERS",
    "TALKS",
    "FUNDS",
];
const menuNav = document.getElementById("menuNav");
const ul = document.createElement("ul");
for (const m of MENU) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = m;
    if (m === "HOME") {
        a.href = "/index.html";
    }
    else {
        a.href = `/index.html?menu=${m}`;
    };
    if (menu === m) {
        a.setAttribute("class", "is_active");
    };
    li.append(a);
    ul.append(a);
};
menuNav.append(ul);


const ENDASH = "\u2013";

let Keywords = [
    "representation theory",
    "combinatorics",
    "integrable system",
    "quantum group",
    "quantum symmetric pair",
    "Hecke algebra",
    "crystal",
    "$\\imath$crystal",
    "$R$-matrix",
    "$K$-matrix"
];

let Education = [
    {
        type: "Ph.D. in Science",
        date: "2019-03",
        univ: "Tokyo Institute of Technology",
        url: "https://www.titech.ac.jp/english",
        advisor: "Satoshi Naito",
    },
    {
        type: "M.S. in Science",
        date: "2016-03",
        univ: "Tokyo Institute of Technology",
        url: "https://www.titech.ac.jp/english",
        advisor: "Satoshi Naito",
    },
    {
        type: "B.S. in Science",
        date: "2014-03",
        univ: "The University of Tokyo",
        url: "https://www.u-tokyo.ac.jp/en/index.html",
        advisor: "Yoshihisa Saito",
    },
];

let ResearchHistory = [    
    {
        from: "2022-04",
        to: "Present",
        at: "Osaka Central Advanced Mathematical Institute, Osaka Metropolitan University",
        url: "http://www.sci.osaka-cu.ac.jp/OCAMI/index_e.html",
        as: "JSPS research fellow PD"
    },   
    {
        from: "2021-04",
        to: "2022-03",
        at: "Osaka City University Advanced Mathematical Institute, Osaka City University",
        url: "http://www.sci.osaka-cu.ac.jp/OCAMI/index_e.html",
        as: "JSPS research fellow PD"
    },   
    {
        from: "2020-04",
        to: "2021-03",
        at: "Kyoto University",
        url: "https://www.kyoto-u.ac.jp/en",
        as: "part-time teacher"
    },   
    {
        from: "2019-10",
        to: "2021-03",
        at: "Research Institute for Mathematical Sciences, Kyoto University",
        url: "https://www.kurims.kyoto-u.ac.jp/en/index.html",
        as: "part-time researcher"
    },   
    {
        from: "2019-04",
        to: "2019-09",
        at: "Graduate School of Information Science and Technology, Osaka University",
        url: "https://www.ist.osaka-u.ac.jp/english/",
        as: "project researcher"
    },
    {
        from: "2017-04",
        to: "2019-03",
        at: "Department of Mathematics, Tokyo Institute of Technology",
        url: "https://www.titech.ac.jp/english",
        as: "JSPS research fellow DC2"
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
        at: "UVA Algebra Seminar, University of Virginia (online)",
        fav: false,
    },
    {
        date: "2021-09-22",
        title: "Based modules over the $i$-quantum group of type AI",
        at: "NUS Seminar, National University of Singapore (online)",
        fav: false,
    },
    {
        date: "2021-01-21",
        title: "Based modules over the $i$-quantum groups of type AI",
        at: "Tokyo-Nagoya Algebra Seminar (online)",
        fav: false,
    },
    {
        date: "2020-10-28",
        title: "Recent progress on representation theory of iquantum groups",
        at: "Rikkyo University (online)",
        fav: false,
    },
    {
        date: "2020-09-03",
        title: "Crystal bases of iquantum groups and centralizer algebras",
        at: "65th Algebra Symposium (online)",
        fav: true,
    },
    {
        date: "2020-07-14",
        title: "Combinatorial representation theory arising from quantum symmetric pairs",
        at: "KIAS Workshop on Combinatorial Problems of Algebraic Origin (online)",
        fav: true,
    },
    {
        date: "2020-05-14",
        title: "Classical weight modules over $i$-quantum groups",
        at: "Kyoto Representation Theory Seminar (online)",
        fav: false,
    },
    {
        date: "2020-03-18",
        title: "$\\imath$quantizations",
        at: "MSJ Spring Meeting 2020, A Talk Invited By Infinite Analysis Session (online)",
        fav: true,
    },
    {
        date: "2019-11-29",
        title: "Classical modules over $i$-quantum groups",
        at: "Conference on Algebraic Representation Theory 2019, National Tsing Hua University",
        fav: false,
    },
    {
        date: "2019-05-10",
        title: "A new approach to classical representations of non-standard quantum group $U'_q(\\mathfrak{so}_n)$",
        at: "Minami Osaka Daisu Seminar, Osaka Prefecture University",
        fav: false,
    },
    {
        date: "2019-03-05",
        title: "Highest weight theory for $\\imath$-quantum groups of type $A$",
        at: "Infinite Analysis 19 Quantum symmetries and Integrable Systems, The University of Tokyo",
        fav: true,
    },
    {
        date: "2019-02",
        title: "Global crystal bases of modules over a quantum symmetric pair",
        at: "Mini-Workshop on Representation Theory, Kyoto University",
        fav: false,
    },
    {
        date: "2018-07",
        title: "On global crystal bases for integrable modules over a quantum symmetric pair coideal subalgebra",
        at: "ECNU Workshop, East China Normal University",
        fav: false,
    },
    {
        date: "2018-05",
        title: "Crystal basis theory for a quantum symmetric pair",
        at: "UVA Algebra Seminar, University of Virginia",
        fav: false,
    },
    {
        date: "2017-11",
        title: "Kazhdan-Lusztig bases and quantum symmetric pairs",
        at: "Conference on Algebraic Representation Theory 2017",
        fav: false,
    },
];

let Funds = [
    {
        from: "2021-04",
        to: "2024-03",
        number: "21J00013",
        name: "Combinatorial structures appearing in representation theory of quantum symmetric subalgebras, and their applications",
        category: "Grant-in-Aid for JSPS Fellows",
        url: "https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-21J00013/"
    },
    {
        from: "2020-04",
        to: "2024-03",
        number: "20K14286",
        name: "Weight modules and crystal bases for quantum symmetric pairs",
        category: "Grant-in-Aid for Early-Career Scientists",
        url: "https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-20K14286/"
    },
    {
        from: "2017-04",
        to: "2019-03",
        number: "17J00172",
        name: "An approach to the Kazhdan-Lusztig polynomials via the representation theory of quantum symmetric pairs",
        category: "Grant-in-Aid for JSPS Fellows",
        url: "https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-17J00172/"
    }
];



//HOME
if (menu === "HOME") {
    const keywords_p = document.getElementById("keywords_p");
    keywords_p.textContent = Keywords.join(", ") + ".";
    

    let edu_ul = document.getElementById("edu_ul");
    for (const obj of Education) {
        const li = document.createElement("li");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        div1.textContent = `${obj.type}:`;
        div2.innerHTML = `<a href="${obj.url}">${obj.univ}</a>, ${obj.date}, Advisor: ${obj.advisor}`;
        li.append(div1, div2);
        edu_ul.append(li);
    };
    

    let his_ul = document.getElementById("his_ul");
    for (const obj of ResearchHistory) {
        let li = document.createElement("li");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        div1.textContent = `${obj.from}${ENDASH}${obj.to}:`;
        div2.innerHTML = `<a href="${obj.url}">${obj.at}</a>, ${obj.as}.`;
        li.append(div1, div2);
        his_ul.append(li);
    };

    let art = document.getElementById(menu);
    art.removeAttribute("hidden");
} else if (menu === "PAPERS") {
    //PAPERS
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
} else if (menu === "TALKS") {
    //TALKS        
    let select_ol = document.getElementById("selected_talks_ol");
    let others_ol = document.getElementById("other_talks_ol");
    for (let i = 0, j = 0, l = Talks.length; i < l; i++) {
        const talk = Talks[i];
        const li = document.createElement("li");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        div2.textContent = `${talk.title}, ${talk.at}, ${talk.date}.`;
        li.append(div1, div2);
        if (talk.fav === true) {
            div1.textContent = `${j+1}.`;
            j++;
            select_ol.append(li);
        } else {
            div1.textContent = `${i+1}.`;
            others_ol.append(li);
        };
    };


    let art = document.getElementById(menu);
    art.removeAttribute("hidden");
} else if (menu === "FUNDS") {
    //FUNDS
    let funds_ul = document.getElementById("funds_ul");
    for (const obj of Funds) {
        let li = document.createElement("li");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        div1.className = "b_2col_list_1st";
        div2.className = "b_2col_list_2nd";
        div1.textContent = `${obj.from}${ENDASH}${obj.to}:`;
        div2.innerHTML =  `${obj.name}, ${obj.category}, Grant Number: <a href="${obj.url}">${obj.number}</a>.`;
        li.append(div1, div2);
        funds_ul.append(li);
    };    


    let art = document.getElementById(menu);
    art.removeAttribute("hidden");
};


    














