from fastapi import FastAPI, Request, Response
from fastapi.responses import HTMLResponse, ORJSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import json
from time import time

app = FastAPI()
app.mount("/static", StaticFiles(directory="backend/static"), name="static")
