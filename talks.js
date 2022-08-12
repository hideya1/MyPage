const ENDASH = "\u2013";


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
        fav: false,
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
        fav: false,
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

let select_ol = document.body.querySelector("#selected_talks ol");
let others_ol = document.body.querySelector("#other_talks ol");
for (const obj of Talks) {
    let li = document.createElement("li");
    li.textContent = obj.title + ", " + obj.at + ", " + obj.date + ".";
    if (obj.fav === true) {
        select_ol.append(li);
    } else {
    others_ol.append(li);
    };
};