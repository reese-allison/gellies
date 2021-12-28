from fastapi import FastAPI, Depends
from fastapi.security import HTTPBearer
import google.oauth2.credentials
import google_auth_oauthlib.flow
#from fastaip import Request, Response
# from fastapi.responses import HTMLResponse, ORJSONResponse
from fastapi.staticfiles import StaticFiles
# from fastapi.templating import Jinja2Templates


#pathed in host/api/{your url}

token_access_scheme = HTTPBearer()

app = FastAPI()

flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
    'backend\client_secret.json',
    scopes=['https://www.googleapis.com/auth/userinfo.email']
    )

flow.redirect_uri = 'http://localhost/save'

authorization_url, state = flow.authorization_url(
    access_type='offline',
    include_granted_scopes='true')

@app.get("/private")
def private(token: str = Depends(token_access_scheme)):
    """A valid access token is required to access this route"""
 
    result = token.credentials

    return result

app.mount("/static", StaticFiles(directory="backend/static"), name="static")

