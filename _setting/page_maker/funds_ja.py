import os, sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
sys.path.append(os.path.dirname(__file__))
from conf_ja import *
from template_ja import Template
from myapp.textfilemanager import TextFileManager
from myapp.htmlmanager import *


def mk_funds():
    url = FUNDS_INDEX_PATH
    base_link = os.path.relpath(HOME_PATH, url)[3:]

    ul = Ul(attrs={"class": "para periodList"}, children=[])
    for fund in FUNDS_DATA:
        div1 = Div(attrs={"class": "periodList_1st"}, children=[fund["from"], "&ndash;", fund["to"], ":"])
        div2 = Div(attrs={"class": "periodList_2nd"}, children=[
            fund["name"][1], ", ",
            fund["category"][1], ", ",
            "課題番号: ", A(attrs={"href": fund["url"][1]}, children=[fund["number"]])
        ])
        li = Li(children=[div1, div2])
        ul.append_child(li)
    art = article(children=[
        article_title("外部資金"),
        ul
        ])
    tfm = TextFileManager(url)
    tfm.text = str(Template(tab_title="外部資金 | 渡邉 英也", base_link=base_link, active_menu="funds", art=art))
    tfm.save()


if __name__ == '__main__':
    mk_funds()
