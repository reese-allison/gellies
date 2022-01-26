from fastapi import FastAPI, requests
from fastapi import Request
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
import requests


from starlette.middleware.sessions import SessionMiddleware
from starlette.config import Config
from authlib.integrations.starlette_client import OAuth
from pymongo import MongoClient

# Configuration File

config = Config("./secret.env")

# OAuth Setup

oauth = OAuth()
oauth.register(
    name='google',
    client_id=config('GOOGLE_CLIENT_ID'),
    client_secret=config('GOOGLE_CLIENT_SECRET'),
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={
        'scope': 'openid email'
    }
)

oauth.register(

    name='facebook',
    client_id=config('FACEBOOK_CLIENT_ID'),
    client_secret=config('FACEBOOK_CLIENT_SECRET'),
    client_kwargs={
        'scope' : 'public_profile'
    },
    access_token_url = 'https://graph.facebook.com/v12.0/oauth/access_token',
    api_base_url =  'https://graph.facebook.com/v7.0/',
    authorize_url = 'https://www.facebook.com/v7.0/dialog/oauth',
    )

# Mongo Database Server Connection

client = MongoClient('mongodb://localhost:27017')
DB = client['mojidb']
mjcollection = DB['moji_user']
fbcollection = DB['facebook_user']
ggcollection = DB['google_user']

#serverStatusResult=DB.command("serverStatus")


# FastAPI Server setup

app = FastAPI(root_path="/api")
app.add_middleware(SessionMiddleware, secret_key=config('SECRET_KEY'))
app.mount("/static", StaticFiles(directory="backend/static"), name="static")

# Login Function

@app.get('/login/{method}', tags=['authentication'])
async def login(request: Request, method: str):
    url = request.url_for("auth", method=method)

    if method == 'google':
        return await oauth.google.authorize_redirect(request, url)
    elif method == 'facebook':
        return await oauth.facebook.authorize_redirect(request, url)
    else:
        raise NotImplementedError(f'Login method {method} is not implemented!')

@app.route('/auth/{method}')
async def auth(request: Request, method: str):
    if method == 'google':
        # Perform Google OAuth
        token = await oauth.google.authorize_access_token(request)
        user = await oauth.google.parse_id_token(request, token)

        # Save the user
        request.session['user'] = dict(user)

        return RedirectResponse(url='/')
    elif method == 'facebook':
        token = await oauth.facebook.authorize_access_token(request)
    
        #'https://graph.facebook.com/me?fields=id&access_token=xxxxxx'
        response = requests.post(f'https://graph.facebook.com/me?fields=id&access_token={ token["access_token"] }')
        user = response.json()['id']
        # Save the user
        #user_verify(fbcollection, {"facebook_user" : user.id})

            
        request.session['user'] = dict()

        return RedirectResponse(url='/')
    else:
        raise NotImplementedError(f'Login method {method} is not implemented!')


@app.get('/logout', tags=['authentication'])  # Tag it as "authentication" for our docs
async def logout(request: Request):
    # Remove the user
    request.session.pop('user', None)

    return RedirectResponse(url='/')

@app.get('/new-user', tags=['login'])
async def newuser(request: Request):
    

    return RedirectResponse(url='/')

'''
@app.get('/verify/username/{inputname}')
async def verify_username(inputname: str):
    if (mjcollection.find_one(input) != None )
'''


