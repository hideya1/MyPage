let PERSONAL_DATA = {
    research_history: [    
        {
            from: "2022-04",
            to: "Present",
            at: "Osaka Central Advanced Mathematical Institute, Osaka Metropolitan University",
            as: "JSPS research fellow PD"
        },   
        {
            from: "2021-04",
            to: "2022-03",
            at: "Osaka City University Advanced Mathematical Institute, Osaka City University",
            as: "JSPS research fellow PD"
        },   
        {
            from: "2020-04",
            to: "2021-03",
            at: "Kyoto University",
            as: "part-time teacher"
        },   
        {
            from: "2019-10",
            to: "2021-03",
            at: "Research Institute for Mathematical Sciences, Kyoto University",
            as: "part-time researcher"
        },   
        {
            from: "2019-04",
            to: "2019-09",
            at: "Graduate School of Information Science and Technology, Osaka University",
            as: "project researcher"
        },
    ],
    education: [
        {
            from: "2016-04",
            to: "2019-03",
            at: "School of Science, Tokyo Institute of Technology",
        },
        {
            from: "2014-04",
            to: "2016-03",
            at: "Mathematics, Science of Engineering, Tokyo Institute of Technology",
        },
        {
            from: "2012-04",
            to: "2014-03",
            at: "Department of Mathematics, Faculty of Science, The University of Tokyo",
        },
        {
            from: "2010-04",
            to: "2012-03",
            at: "College of Arts and Sciences, The University of Tokyo",
        },
    ],
    papers: [
        {
            coauthors: ["Keita Yamamura"],
            title: "Alcove paths and Gelfand-Tsetlin patterns",
            journal: "Annals of Combinatorics, 25 (2021), no. 3, 645--676",
            MRnumber: "MR4301586",
            URL: "https://link.springer.com/article/10.1007/s00026-021-00544-5",
        },
        {
            coauthors: [],
            title: "Classical weight modules over $\\imath$quantum groups",
            journal: "Journal of Algebra, 578 (2021), 241--302",
            MRnumber: "MR4234802",
            URL: "https://www.sciencedirect.com/science/article/pii/S0021869321001332?via%3Dihub",
        },
        {
            coauthors: [],
            title: "Global crystal bases for integrable modules over a quantum symmetric pair of type AIII",
            journal: "Representation Theory 25 (2021), 27--66",
            MRnumber: "MR4198491",
            URL: "https://www.ams.org/journals/ert/2021-25-02/S1088-4165-2021-00556-X/",
        },
        {
            coauthors: [],
            title: "Crystal basis theory for a quantum symmetric pair $(\\mathbf{U},\\mathbf{U}^\\jmath)$",
            journal: "International Mathematics Research Notices. IMRN, 2020, no. 22, 8292--8352",
            MRnumber: "MR4216690",
            URL: "https://academic.oup.com/imrn/article/2020/22/8292/5123593?login=true",
        },
        {
            coauthors: ["Fan, Zhaobin", "Lai, Chun-Ju", "Li, Yiqiang", "Luo, Li", "Wang, Weiqiang"],
            title: "Quantum Schur duality of affine type $C$ with three parameters",
            journal: "Mathematical Research Letters, 27 (2020), no. 1, 79--114",
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
            journal: "Proceedings of the American Mathematical Society, 146 (2018), no. 8, 3203--3216",
            MRnumber: "MR3803649",
            URL: "https://www.ams.org/journals/proc/2018-146-08/S0002-9939-2018-13749-1/",
        },
        {
            coauthors: ["Naito, Satoshi"],
            title: "A combinatorial formula expressing periodic $R$-polynomials",
            journal: "Journal of Combinatorial Theory Series A, 148 (2017), 197--243",
            MRnumber: "MR3603320",
            URL: "https://www.sciencedirect.com/science/article/pii/S0097316516301406?via%3Dihub",
        },
    ],
    preprints: [
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
    ],
    talks: [
        
    ]
};

let research_history = document.body.querySelector("#research_history dl");
for (const i of PERSONAL_DATA.research_history) {
    let dt = document.createElement("dt");
    dt.textContent = i.from + "&ndash;" + i.to;
    let dd = document.createElement("dd");
    dd.textContent = i.at + "(" + i.as + ")";
    research_history.append(dt, dd);
};

let edu = document.body.querySelector("#education dl");
for (const i of PERSONAL_DATA.education) {
    let dt = document.createElement("dt");
    dt.textContent = i.from + "&ndash;" + i.to;
    let dd = document.createElement("dd");
    dd.textContent = i.at;
    edu.append(dt, dd);
};

let papers = document.body.querySelector("#papers ol");
for (const i of PERSONAL_DATA.papers) {
    let li = document.createElement("li");
    li.textContent = ""
    if (i.coauthors.length > 0) {
        li.textContent += "(joint work with "
        for (const coauthor of i.coauthors) {
            li.textContent += coauthor
        }
        li.textContent += ") "
    };
    li.textContent += i.title + ", " + i.journal;
    papers.append(li);
};

let preprints = document.body.querySelector("#preprints ol");
for (const i of PERSONAL_DATA.preprints) {
    let li = document.createElement("li");
    li.textContent = ""
    if (i.coauthors.length > 0) {
        li.textContent += "(joint work with "
        for (const coauthor of i.coauthors) {
            li.textContent += coauthor
        }
        li.textContent += ") "
    };
    li.textContent += i.title + ", " + i.at;
    preprints.append(li);
};


