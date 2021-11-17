from fastapi import FastAPI
#from fastaip import Request, Response
# from fastapi.responses import HTMLResponse, ORJSONResponse
from fastapi.staticfiles import StaticFiles
# from fastapi.templating import Jinja2Templates

app = FastAPI()
app.mount("/static", StaticFiles(directory="backend/static"), name="static")
