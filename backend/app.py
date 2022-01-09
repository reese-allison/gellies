from fastapi import FastAPI
from fastapi import Request
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles

from starlette.middleware.sessions import SessionMiddleware
from starlette.config import Config
from authlib.integrations.starlette_client import OAuth

config = Config('./.env')

oauth = OAuth()
oauth.register(
    client_id=config('GOOGLE_CLIENT_ID'),
    client_secret=config('GOOGLE_CLIENT_SECRET'),
    name='google',
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={
        'scope': 'openid email'
    }
)

app = FastAPI(root_path="/api")
app.add_middleware(SessionMiddleware, secret_key='674B1F485B5E52D45813FE5F47678')
app.mount("/static", StaticFiles(directory="backend/static"), name="static")


@app.get('/login', tags=['authentication'])
async def login(request: Request):

    # url = request.url_for("auth")
    # Change to use dynamic host url_for

    return await oauth.google.authorize_redirect(request, 'http://localhost/api/auth/google-login')


@app.route('/auth/google-login')
async def auth(request: Request):
    # Perform Google OAuth
    token = await oauth.google.authorize_access_token(request)
    user = await oauth.google.parse_id_token(request, token)

    # Save the user
    request.session['user'] = dict(user)

    return RedirectResponse(url='/')


@app.get('/logout', tags=['authentication'])  # Tag it as "authentication" for our docs
async def logout(request: Request):
    # Remove the user
    request.session.pop('user', None)

    return RedirectResponse(url='/')
