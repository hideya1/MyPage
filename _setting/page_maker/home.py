import os, sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
sys.path.append(os.path.dirname(__file__))
from conf import *
from template import Template
from myapp.textfilemanager import TextFileManager
from myapp.htmlmanager import *

def mk_home():
    url = HOME_PATH

    keywords = subsection(children=[
            subsection_title("Keywords"),
        ])
    p = paragraph(children=[])
    for i in range(len(KEYWORDS)):
        text = KEYWORDS[i][0]
        if i != len(KEYWORDS)-1:
            text += ", "
        else:
            text += "."
        p.append_child(Fragment([text]))
    keywords.append_child(p)
    interests = section(children=[
        section_title("Research Interests"),
        paragraph(["Representation theory of Lie algebras and related objects, and their interrelations."]),
        keywords
    ])

    ul = Ul(attrs={"class": "para eduList"}, children=[])
    for edu in EDUCATION:
        div1 = Div(attrs={"class": "eduList_1st"}, children=[edu["type"][0] + ":"])
        div2 = Div(attrs={"class": "eduList_2nd"}, children=[
            A(attrs={"href": edu["url"][0]}, children=[edu["univ"][0]]),
            ", ",
            edu["date"],
            ", ",
            "Supervisor: ",
            edu["advisor"][0],
            "."
            ])
        li = Li(children=[div1, div2])
        ul.append_child(li)
    education = section(children=[
        section_title("Education"),
        ul
    ])

    ul = Ul(attrs={"class": "para periodList"}, children=[])
    for his in HISTORY:
        div1 = Div(attrs={"class": "periodList_1st"}, children=[his["from"], "&ndash;", his["to"], ":"])
        div2 = Div(attrs={"class": "periodList_2nd"}, children=[
            A(attrs={"href": his["url"][0]}, children=[his["at"][0]]),
            ", ",
            his["as"][0]
        ])
        li = Li(children=[div1, div2])
        ul.append_child(li)
    history = section(children=[
        section_title("Research History"),
        ul
    ])

    art = article(children=[
        article_title("Profile"),
        interests,
        education,
        history
        ])
    tfm = TextFileManager(url)
    tfm.text = str(Template(tab_title="Hideya Watanabe", base_link="", active_menu="home", art=art))
    tfm.save()


if __name__ == '__main__':
    mk_home()
