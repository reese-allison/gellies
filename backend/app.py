from fastapi import FastAPI, Request, Response
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import minify_html
import re

from backend.core.drops.drop_tables import get_moji, get_part_list

app = FastAPI()
app.mount("/static", StaticFiles(directory="backend/static"), name="static")
templates = Jinja2Templates(directory="backend/templates")
origins = [
    "http://127.0.0.1:8080",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Gradient(BaseModel):
    html: str
    name: str

class Appendage(BaseModel):
    type: str
    item: str



db_result = {
    100: {
        'eyes': 'basic',
        'mouth': 'basic',
        'body': 'basic',
        'gradient': 'slime'
    },
    101: {
        'eyes': 'teddy',
        'mouth': 'teddy',
        'body': 'teddy',
        'gradient': 'oyster'
    }
}


@app.get("/moji-test/", response_class=HTMLResponse)
async def moji_test(request: Request):
    svgs = get_moji('all')
    data = templates.get_template("moji.html").render({"svgs": svgs})
    return Response(content=data, media_type="image/svg+xml")

@app.get("/moji-menu/", response_class=HTMLResponse)
async def moji_test(request: Request):
    svg_list = get_part_list()
    data = templates.get_template("selection.html").render({"svgs": svg_list})
    return templates.TemplateResponse("selection.html",{'request' : request, "svgs": svg_list})
    #return Response(content=data, media_type="application/xml")


#@app.get("/", response_class=HTMLResponse)
#async def index(request: Request):
#        return templates.TemplateResponse("index.html", {"request": request})

#@app.post("/part-fetch", response_class=HTMLResponse)
#async def part_fetch(appendage: Appendage):
#        Appendage