import os, sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
sys.path.append(os.path.dirname(__file__))
from conf_ja import *
from template_ja import Template
from myapp.textfilemanager import TextFileManager
from myapp.htmlmanager import *


def mk_talks():
    url = TALKS_INDEX_PATH
    base_link = os.path.relpath(HOME_PATH, url)[3:]

    ul = Ul(attrs={"class": "para twoDigitList"}, children=[])
    for i in range(len(TALKS_DATA)):
        talk = TALKS_DATA[i]
        try:
            at = talk["at"][1]
        except:
            at = talk["at"][0]
        div1 = Div(attrs={"class": "twoDigitList_1st"}, children=[str(i+1), "."])
        div2 = Div(attrs={"class": "twoDigitList_2nd"}, children=[
            talk["title"],
            ", ",
            at,
            ", ",
            talk["date"],
            "."
        ])
        li = Li(children=[div1, div2])
        ul.append_child(li)
    art = article(children=[
        article_title("招待講演"),
        ul
        ])
    tfm = TextFileManager(url)
    tfm.text = str(Template(tab_title="講演 | 渡邉 英也", base_link=base_link, active_menu="talks", art=art))
    tfm.save()


if __name__ == '__main__':
    mk_talks()
