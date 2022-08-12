const ENDASH = "\u2013";

let Papers = [
    {
        coauthors: ["Yamamura, Keita"],
        title: "Alcove paths and Gelfand-Tsetlin patterns",
        journal: "Annals of Combinatorics, 25 (2021), no. 3, 645\u2013676",
        MRnumber: "MR4301586",
        URL: "https://link.springer.com/article/10.1007/s00026-021-00544-5",
    },
    {
        coauthors: [],
        title: "Classical weight modules over $\\imath$quantum groups",
        journal: "Journal of Algebra, 578 (2021), 241\u2013302",
        MRnumber: "MR4234802",
        URL: "https://www.sciencedirect.com/science/article/pii/S0021869321001332?via%3Dihub",
    },
    {
        coauthors: [],
        title: "Global crystal bases for integrable modules over a quantum symmetric pair of type AIII",
        journal: "Representation Theory 25 (2021), 27\u201366",
        MRnumber: "MR4198491",
        URL: "https://www.ams.org/journals/ert/2021-25-02/S1088-4165-2021-00556-X/",
    },
    {
        coauthors: [],
        title: "Crystal basis theory for a quantum symmetric pair $(\\mathbf{U},\\mathbf{U}^\\jmath)$",
        journal: "International Mathematics Research Notices. IMRN, 2020, no. 22, 8292\u20138352",
        MRnumber: "MR4216690",
        URL: "https://academic.oup.com/imrn/article/2020/22/8292/5123593?login=true",
    },
    {
        coauthors: ["Fan, Zhaobin", "Lai, Chun-Ju", "Li, Yiqiang", "Luo, Li", "Wang, Weiqiang"],
        title: "Quantum Schur duality of affine type $C$ with three parameters",
        journal: "Mathematical Research Letters, 27 (2020), no. 1, 79\u2013114",
        MRnumber: "MR4088809",
        URL: "",
    },
    {
        coauthors: ["Bao, Huanchen", "Wang, Weiqiang"],
        title: "Canonical bases for tensor products and super Kazhdan-Lusztig theory",
        journal: "Journal of Pure and Applied Algebra, 224 (2020), no. 8, 106347, 9 pp.",
        MRnumber: "MR4074585",
        URL: "https://www.sciencedirect.com/science/article/pii/S002240492030044X?via%3Dihub",
    },
    {
        coauthors: ["Bao, Huanchen", "Wang, Weiqiang"],
        title: "Multiparameter quantum Schur duality of type $B$",
        journal: "Proceedings of the American Mathematical Society, 146 (2018), no. 8, 3203\u20133216",
        MRnumber: "MR3803649",
        URL: "https://www.ams.org/journals/proc/2018-146-08/S0002-9939-2018-13749-1/",
    },
    {
        coauthors: ["Naito, Satoshi"],
        title: "A combinatorial formula expressing periodic $R$-polynomials",
        journal: "Journal of Combinatorial Theory Series A, 148 (2017), 197\u2013243",
        MRnumber: "MR3603320",
        URL: "https://www.sciencedirect.com/science/article/pii/S0097316516301406?via%3Dihub",
    },
];

let Preprints = [
    {
        coauthors: [],
        title: "Stability of $\\imath$canonical bases of irreducible finite type of real rank one",
        at: "arXiv:2207.05919v2",
        URL: "https://arxiv.org/abs/2207.05919"
    },
    {
        coauthors: [],
        title: "Crystal bases of modified $\\imath$quantum groups of certain quasi-split types",
        at: "arXiv:2110.07177",
        URL: "https://arxiv.org/abs/2110.07177"
    },
    {
        coauthors: [],
        title: "A new tableau model for irreducible polynomial representations of the orthogonal group",
        at: "arXiv:2107.00170",
        URL: "https://arxiv.org/abs/2107.00170"
    },
    {
        coauthors: [],
        title: "Based modules over the $\\imath$quantum group of type AI",
        at: "arXiv:2103.12932",
        URL: "https://arxiv.org/abs/2103.12932"
    },
];


let format_name = function(name) {
    result = name.split(", ");
    return result[1] + " " + result[0];
};

let papers_ol = document.querySelector("#papers ol");
for (const obj of Papers) {
    let li = document.createElement("li");
    result = ""
    if (obj.coauthors.length > 0) {
        result += "(joint work with "
        for (let i = 0; i < obj.coauthors.length; i++) {
            result += format_name(obj.coauthors[i]);
            if (i < obj.coauthors.length-2) {
                result += ", ";
            } else if (i == obj.coauthors.length-2) {
                result += ", and ";
            } else {
                result += ") ";
            };
        };
    };
    result += obj.title + ", " + obj.journal + ".";
    li.textContent = result;
    papers_ol.append(li);
};

let pre_ol = document.querySelector("#preprints ol");
for (const obj of Preprints) {
    let li = document.createElement("li");
    result = ""
    if (obj.coauthors.length > 0) {
        result += "(joint work with "
        for (let i = 0; i < obj.coauthors.length; i++) {
            result += format_name(obj.coauthors[i]);
            if (i < obj.coauthors.length-2) {
                result += ", ";
            } else if (i == obj.coauthors.length-2) {
                result += ", and ";
            } else {
                result += ") ";
            };
        };
    };
    result += obj.title + ", " + obj.at + ".";
    li.textContent = result;
    pre_ol.append(li);
};
