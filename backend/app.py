from fastapi import FastAPI, Depends, Request
from fastapi.responses import RedirectResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from starlette.middleware.sessions import SessionMiddleware
from authlib.integrations.starlette_client import OAuth
import os
import json

from backend.database import database, models


oauth = OAuth()
oauth.register(
    client_id=os.environ.get('GOOGLE_CLIENT_ID'),
    client_secret=os.environ.get('GOOGLE_CLIENT_SECRET'),
    name='google',
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={
        'scope': 'openid email'
    }
)

app = FastAPI(root_path="/api")
app.add_middleware(SessionMiddleware, secret_key=os.environ.get('SECRET_KEY'))
app.mount("/static", StaticFiles(directory="backend/static"), name="static")


async def current_user(request: Request):
    if 'user' in request.session:
        return json.loads(request.session['user'])
   

@app.get('/login/{method}', tags=['authentication'])
async def login(request: Request, method: str):
    user = await current_user(request)
    if user:
        return RedirectResponse(url='/customize')

    url = f"http://{os.environ.get('HOST')}/api/auth/{method}"
    if method == 'google':
        return await oauth.google.authorize_redirect(request, url)
    elif method == 'facebook':
        ...
    else:
        raise NotImplementedError(f'Login method {method} is not implemented!')


@app.get('/auth/{method}', tags=['authentication'])
async def auth(request: Request, method: str):
    if method == 'google':
        # Perform Google OAuth
        token = await oauth.google.authorize_access_token(request)
        from logging import logger
        logger.info(token)
        user = await oauth.google.parse_id_token(request, token)

        session_user = await database.retrieve_user(user['sub'])
        if session_user:
            request.session['user'] = session_user
        else:
            request.session['user'] = await database.add_user(dict(user))

        return RedirectResponse(url='/customize')
    elif method == 'facebook':
        ...
    else:
        raise NotImplementedError(f'Login method {method} is not implemented!')


@app.get('/logout', tags=['authentication'])
async def logout(request: Request):
    # Remove the user
    request.session.clear()
    request.cookies.clear()
    return RedirectResponse(url='/login')


@app.get('/authenticated', tags=['authentication'])
async def me(user: models.UserModel = Depends(current_user)):
    if user:
        return JSONResponse(content={'is_authenticated': True})
    else:
        return JSONResponse(content={'is_authenticated': False})
