from myapp.foldermanager import FolderManager
from myapp.jsonmanager import JsonManager


CSS = FolderManager("css")
MY_STYLE_PATH = CSS.child_path("my_style.css")

FUNDS = FolderManager("funds")
FUNDS_INDEX_PATH = FUNDS.child_path("index.html")
FUNDS_DATA = JsonManager(FUNDS.child_path("data.json")).dictionary

HOME_PATH = "home.html"

IMAGE = FolderManager("image")
LOGO_IMG_PATH = IMAGE.child_path("logo.jpg")

ORGANIZATIONS = FolderManager("organizations")
ORGANIZATIONS_INDEX_PATH = ORGANIZATIONS.child_path("index.html")
ORGANIZATIONS_DATA = JsonManager(ORGANIZATIONS.child_path("data.json")).dictionary

PAPERS = FolderManager("papers")
PAPERS_INDEX_PATH = PAPERS.child_path("index.html")
PAPERS_DATA = JsonManager(PAPERS.child_path("data.json")).dictionary
PUBLISHED = PAPERS_DATA["published"]
PREPRINTS = PAPERS_DATA["preprints"]

PROFILE = FolderManager("profile")
PROFILE_INDEX_PATH = PROFILE.child_path("index.html")
PROFILE_DATA = JsonManager(PROFILE.child_path("data.json")).dictionary
KEYWORDS = PROFILE_DATA["keywords"]
EDUCATION = PROFILE_DATA["education"]
HISTORY = PROFILE_DATA["history"]

TALKS = FolderManager("talks")
TALKS_INDEX_PATH = TALKS.child_path("index.html")
TALKS_DATA = JsonManager(TALKS.child_path("data.json")).dictionary


MENU = {
    "home": {"name": "HOME", "url": HOME_PATH},
    "papers": {"name": "PAPERS", "url": PAPERS_INDEX_PATH},
    "talks": {"name": "TALKS", "url": TALKS_INDEX_PATH},
    "organizations": {"name": "ORGANIZATIONS", "url": ORGANIZATIONS_INDEX_PATH},
    "funds": {"name": "FUNDS", "url": FUNDS_INDEX_PATH},
}
