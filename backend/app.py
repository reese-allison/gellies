from fastapi import FastAPI, Request, Response
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
import re

from backend.core.drops.drop_tables import get_moji, get_part_list

app = FastAPI()
app.mount("/static", StaticFiles(directory="backend/static"), name="static")
templates = Jinja2Templates(directory="backend/templates")


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
async def moji_menu(request: Request):
    svg_list = get_part_list()
    # data = templates.get_template("selection.html").render({"svgs": svg_list})
    return templates.TemplateResponse("selection.html",{'request' : request, "svgs": svg_list})
    #return Response(content=data, media_type="application/xml")

@app.get("/build/eyes", response_class=HTMLResponse)
async def get_build_eyes(request: Request):
    svg_list = get_part_list()
    return templates.TemplateResponse("parts.html", {'request': request, 'mojis': svg_list["eyes"], 'type': 'eyes', 'folder': "eyes"})

@app.get("/build/bodies", response_class=HTMLResponse)
async def get_build_bodies(request: Request):
    svg_list = get_part_list()
    return templates.TemplateResponse("parts.html", {'request': request, 'mojis': svg_list["body"], 'type': 'body', 'folder': 'bodies'})

@app.get("/build/gradients", response_class=HTMLResponse)
async def get_build_gradient(request: Request):
    svg_list = get_part_list()
    return templates.TemplateResponse("parts.html", {'request': request, 'mojis': svg_list["gradient"], 'type': 'gradient', 'folder': 'gradients'})

@app.get("/build/mouths", response_class=HTMLResponse)
async def get_build_mouths(request: Request):
    svg_list = get_part_list()
    return templates.TemplateResponse("parts.html", {'request': request, 'mojis': svg_list["mouth"], 'type': 'mouth', 'folder': 'mouths'})

@app.get("/build/patterns", response_class=HTMLResponse)
async def get_build_patterns(request: Request):
    svg_list = get_part_list()
    return templates.TemplateResponse("parts.html", {'request': request, 'mojis': svg_list["pattern"], 'type': 'pattern', 'folder': 'patterns'})

#@app.get("/", response_class=HTMLResponse)
#async def index(request: Request):
#        return templates.TemplateResponse("index.html", {"request": request})

#@app.post("/part-fetch", response_class=HTMLResponse)
#async def part_fetch(appendage: Appendage):
#        Appendage