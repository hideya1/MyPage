from myapp.foldermanager import FolderManager
from myapp.jsonmanager import JsonManager


CSS = FolderManager("css")
MY_STYLE_PATH = CSS.child_path("my_style.css")

FUNDS = FolderManager("funds")
FUNDS_INDEX_PATH = FUNDS.child_path("index_ja.html")
FUNDS_DATA = JsonManager(FUNDS.child_path("data.json")).dictionary

HOME_PATH = "home_ja.html"

IMAGE = FolderManager("image")
LOGO_IMG_PATH = IMAGE.child_path("logo.jpg")

ORGANIZATIONS = FolderManager("organizations")
ORGANIZATIONS_INDEX_PATH = ORGANIZATIONS.child_path("index_ja.html")
ORGANIZATIONS_DATA = JsonManager(ORGANIZATIONS.child_path("data.json")).dictionary

PAPERS = FolderManager("papers")
PAPERS_INDEX_PATH = PAPERS.child_path("index_ja.html")
PAPERS_DATA = JsonManager(PAPERS.child_path("data.json")).dictionary
PUBLISHED = PAPERS_DATA["published"]
PREPRINTS = PAPERS_DATA["preprints"]

PROFILE = FolderManager("profile")
PROFILE_INDEX_PATH = PROFILE.child_path("index_ja.html")
PROFILE_DATA = JsonManager(PROFILE.child_path("data.json")).dictionary
KEYWORDS = PROFILE_DATA["keywords"]
EDUCATION = PROFILE_DATA["education"]
HISTORY = PROFILE_DATA["history"]

TALKS = FolderManager("talks")
TALKS_INDEX_PATH = TALKS.child_path("index_ja.html")
TALKS_DATA = JsonManager(TALKS.child_path("data.json")).dictionary


MENU = {
    "home": {"name": "ホーム", "url": HOME_PATH},
    "papers": {"name": "論文", "url": PAPERS_INDEX_PATH},
    "talks": {"name": "講演", "url": TALKS_INDEX_PATH},
    "organizations": {"name": "企画・運営", "url": ORGANIZATIONS_INDEX_PATH},
    "funds": {"name": "外部資金", "url": FUNDS_INDEX_PATH},
}
