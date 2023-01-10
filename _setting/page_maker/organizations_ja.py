import os, sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
sys.path.append(os.path.dirname(__file__))
from conf_ja import *
from template_ja import Template
from myapp.textfilemanager import TextFileManager
from myapp.htmlmanager import *


def mk_organizations():
    url = ORGANIZATIONS_INDEX_PATH
    base_link = os.path.relpath(HOME_PATH, url)[3:]

    ul = Ul(attrs={"class": "para periodList"}, children=[])
    for orgn in ORGANIZATIONS_DATA:
        period = orgn["from"]
        if orgn["to"]:
            period += "&ndash;" + orgn["to"].replace("Present", "現在")
        period += ":"
        div1 = Div(attrs={"class": "periodList_1st"}, children=[period])
        div2 = Div(attrs={"class": "periodList_2nd"}, children=[
            A(attrs={"href": orgn["url"][1]}, children=[orgn["name"][1]])
        ])
        li = Li(children=[div1, div2])
        ul.append_child(li)
    art = article(children=[
        article_title("企画"),
        ul
        ])
    tfm = TextFileManager(url)
    tfm.text = str(Template(tab_title="企画 | 渡邉 英也", base_link=base_link, active_menu="organizations", art=art))
    tfm.save()


if __name__ == '__main__':
    mk_organizations()
