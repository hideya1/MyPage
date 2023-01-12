import os, sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
sys.path.append(os.path.dirname(__file__))
from conf import *
from template import Template
from myapp.textfilemanager import TextFileManager
from myapp.htmlmanager import *


def mk_talks():
    url = TALKS_INDEX_PATH
    base_link = os.path.relpath(HOME_PATH, url)[3:]

    ul = Ul(attrs={"class": "para twoColList"}, children=[])
    for i in range(len(TALKS_DATA)):
        talk = TALKS_DATA[i]
        div1 = Div(attrs={"class": "twoColList_1st__2digit"}, children=[str(i+1), "."])
        div2 = Div(attrs={"class": "twoColList_2nd"}, children=[
            talk["title"],
            ", ",
            talk["at"][0],
            ", ",
            talk["date"],
            "."
        ])
        li = Li(children=[div1, div2])
        ul.append_child(li)
    art = article(children=[
        article_title("Invited Talks"),
        ul
        ])
    tfm = TextFileManager(url)
    tfm.text = str(Template(tab_title="Talks | Hideya Watanabe", base_link=base_link, active_menu="talks", art=art))
    tfm.save()


if __name__ == '__main__':
    mk_talks()
