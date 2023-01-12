import os, sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
sys.path.append(os.path.dirname(__file__))
from conf import *
from template import Template
from myapp.textfilemanager import TextFileManager
from myapp.htmlmanager import *


def mk_organizations():
    url = ORGANIZATIONS_INDEX_PATH
    base_link = os.path.relpath(HOME_PATH, url)[3:]

    ul = Ul(attrs={"class": "para twoColList"}, children=[])
    for orgn in ORGANIZATIONS_DATA:
        period = orgn["from"]
        if orgn["to"]:
            period += "&ndash;" + orgn["to"]
        period += ":"
        div1 = Div(attrs={"class": "twoColList_1st__period"}, children=[period])
        div2 = Div(attrs={"class": "twoColList_2nd"}, children=[
            A(attrs={"href": orgn["url"][0]}, children=[orgn["name"][0]])
        ])
        li = Li(children=[div1, div2])
        ul.append_child(li)
    art = article(children=[
        article_title("Organizations"),
        ul
        ])
    tfm = TextFileManager(url)
    tfm.text = str(Template(tab_title="Organizations | Hideya Watanabe", base_link=base_link, active_menu="organizations", art=art))
    tfm.save()


if __name__ == '__main__':
    mk_organizations()
