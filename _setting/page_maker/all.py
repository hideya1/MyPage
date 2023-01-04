import os, sys
sys.path.append(__file__)
from funds import mk_funds
from home import mk_home
from organization import mk_organizations
from profile import mk_profile
from papers import mk_papers
from talks import mk_talks

mk_funds()
mk_home()
mk_organizations()
mk_profile()
mk_papers()
mk_talks()
