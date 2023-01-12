import os, sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
sys.path.append(os.path.dirname(__file__))
from conf_ja import *
from template_ja import Template
from myapp.textfilemanager import TextFileManager
from myapp.htmlmanager import *

def mk_home():
    url = HOME_PATH

    keywords = subsection(children=[
            subsection_title("キーワード"),
        ])
    p = paragraph(children=[])
    for i in range(len(KEYWORDS)):
        text = KEYWORDS[i][1]
        if i != len(KEYWORDS)-1:
            text += ", "
        else:
            text += "."
        p.append_child(Fragment([text]))
    keywords.append_child(p)
    interests = section(children=[
        section_title("研究対象"),
        paragraph(["Lie 代数と関連する対象の表現論と、それらの相互関係."]),
        keywords
    ])

    ul = Ul(attrs={"class": "para twoColList"}, children=[])
    for edu in EDUCATION:
        div1 = Div(attrs={"class": "twoColList_1st__6"}, children=[edu["type"][1] + ":"])
        div2 = Div(attrs={"class": "twoColList_2nd"}, children=[
            A(attrs={"href": edu["url"][1]}, children=[edu["univ"][1]]),
            ", ",
            edu["date"],
            ", ",
            "指導教員: ",
            edu["advisor"][1],
            "."
            ])
        li = Li(children=[div1, div2])
        ul.append_child(li)
    education = section(children=[
        section_title("学位"),
        ul
    ])

    ul = Ul(attrs={"class": "para twoColList"}, children=[])
    for his in HISTORY:
        div1 = Div(attrs={"class": "twoColList_1st__period"}, children=[his["from"], "&ndash;", his["to"].replace("Present", "現在"), ":"])
        div2 = Div(attrs={"class": "twoColList_2nd"}, children=[
            A(attrs={"href": his["url"][1]}, children=[his["at"][1]]),
            ", ",
            his["as"][1]
        ])
        li = Li(children=[div1, div2])
        ul.append_child(li)
    history = section(children=[
        section_title("職歴"),
        ul
    ])

    art = article(children=[
        article_title("略歴"),
        interests,
        education,
        history
        ])
    tfm = TextFileManager(url)
    tfm.text = str(Template(tab_title="渡邉 英也", base_link="", active_menu="home", art=art))
    tfm.save()


if __name__ == '__main__':
    mk_home()
