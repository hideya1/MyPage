import os, sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
sys.path.append(os.path.dirname(__file__))
from conf import *
from template import Template
from myapp.textfilemanager import TextFileManager
from myapp.htmlmanager import *


def format_name(name: str) -> str:
    sep_pt = name.index(",")
    family, first = name[:sep_pt], name[sep_pt+2:]
    return first + " " + family


def format_coauthors(coauthors: list) -> str:
    if not coauthors:
        return ""
    result = "(joint work with "
    for i in range(len(coauthors)):
        coauthor = coauthors[i]
        result += format_name(coauthor)
        if i != len(coauthors)-1:
            result += ", "
    result += ") "
    return result


def mk_papers():
    url = PAPERS_INDEX_PATH
    base_link = os.path.relpath(HOME_PATH, url)[3:]

    ul = Ul(attrs={"class": "para twoDigitList"}, children=[])
    for i in range(len(PUBLISHED)):
        paper = PUBLISHED[i]
        if paper["url"]:
            journal = A(attrs={"href": paper["url"]}, children=[paper["journal"]])
        else:
            journal = Fragment(children=[paper["journal"]])
        div1 = Div(attrs={"class": "twoDigitList_1st"}, children=[str(i+1), "."])
        div2 = Div(attrs={"class": "twoDigitList_2nd"}, children=[
            format_coauthors(paper["coauthors"]),
            paper["title"],
            ", ",
            journal,
            "."
        ])
        li = Li(children=[div1, div2])
        ul.append_child(li)
    published = section(children=[
        section_title("Published"),
        ul
    ])

    ul = Ul(attrs={"class": "para twoDigitList"}, children=[])
    for i in range(len(PREPRINTS)):
        paper = PREPRINTS[i]
        arxiv = A(attrs={"href": paper["url"]}, children=[paper["at"]])
        div1 = Div(attrs={"class": "twoDigitList_1st"}, children=[str(i+1), "."])
        div2 = Div(attrs={"class": "twoDigitList_2nd"}, children=[
            format_coauthors(paper["coauthors"]),
            paper["title"],
            ", ",
            arxiv,
            "."
        ])
        li = Li(children=[div1, div2])
        ul.append_child(li)
    preprints = section(children=[
        section_title("Preprints"),
        ul
    ])

    art = article(children=[
        article_title("Papers"),
        published,
        preprints
        ])
    tfm = TextFileManager(url)
    tfm.text = str(Template(tab_title="Papers | Hideya Watanabe", base_link=base_link, active_menu="papers", art=art))
    tfm.save()


if __name__ == '__main__':
    mk_papers()
