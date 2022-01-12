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

config = Config("secret.env")

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


'''
'api_base_url': 'https://graph.facebook.com/v7.0/',
        'access_token_url': 'https://graph.facebook.com/v7.0/oauth/access_token',
        'authorize_url': 'https://www.facebook.com/v7.0/dialog/oauth',
        'client_kwargs': {'scope': 'email public_profile'},'''

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
app.add_middleware(SessionMiddleware, secret_key='674B1F485B5E52D45813FE5F47678')
app.mount("/static", StaticFiles(directory="backend/static"), name="static")

# Login Function

def user_verify(collection, id):
    if (collection.find_one(id) == None):
        




# FastAPI Routes

@app.get('/login/{service}', tags=['authentication'])
async def login(service, request: Request):
    print(oauth.facebook)
    if (service == 'google'):
        return await oauth.google.authorize_redirect(request, 'http://localhost/api/auth/google-login')
    elif (service == 'facebook'):
        #code = oauth.facebook.authorize_access_token()
        return await oauth.facebook.authorize_redirect(request, 'http://localhost/api/auth/facebook-login')
    else:
        return RedirectResponse(url='/')
    # url = request.url_for("auth")
    # Change to use dynamic host url_for

    

@app.route('/auth/facebook-login')
async def auth(request: Request):
    token = await oauth.facebook.authorize_access_token(request)
    
    #'https://graph.facebook.com/me?fields=id&access_token=xxxxxx'
    response = requests.post(f'https://graph.facebook.com/me?fields=id&access_token={ token["access_token"] }')
    user = response.json()['id']
    # Save the user
    user_verify(fbcollection, {"facebook_user" : user.id})

        
    request.session['user'] = dict()

    return RedirectResponse(url='/')


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

@app.get('/new-user', tags=['login'])
async def newuser(request: Request):
    

    return RedirectResponse(url='/')

@app.get('/verify/username/{inputname}')
async def verify_username(inputname: str):
    if (mjcollection.find_one(input) != None )

