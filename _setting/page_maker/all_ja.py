import os, sys
sys.path.append(__file__)
from funds_ja import mk_funds
from home_ja import mk_home
from organizations_ja import mk_organizations
from papers_ja import mk_papers
from talks_ja import mk_talks

mk_funds()
mk_home()
mk_organizations()
mk_papers()
mk_talks()
