import os, sys
sys.path.append(os.path.dirname(__file__))
from conf_ja import *
from myapp.htmlmanager import *


class Template(Composite):
    def __init__(self, tab_title, base_link, active_menu, art) -> None:
        self.head = head_template(tab_title, base_link, css_link=MY_STYLE_PATH)
        header = header_logo_title(
                        logo_path=LOGO_IMG_PATH,
                        title="渡邉 英也",
                        link=base_link
                    )
        header.append_child(menu(menu_data=MENU, active_menu=active_menu))
        self.node = Page(
            root = Root(
                lang="en",
                head = self.head,
                body=Page_Body(
                    header=header,
                    main=main([
                        art
                    ]),
                    footer=footer(["contact: watanabehideya [at] gmail.com"])
                ).node
            ).node
        ).node

