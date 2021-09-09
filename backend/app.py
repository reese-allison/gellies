from fastapi import FastAPI, Request, Response
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import json

from backend.core.drops.drop_tables import get_moji, get_part_list


app = FastAPI()
app.mount("/static", StaticFiles(directory="backend/static"), name="static")
templates = Jinja2Templates(directory="backend/templates")

@app.get("/moji/", response_class=HTMLResponse)
async def moji(request: Request, orientation: str = None):
    svgs = get_moji('all')
    if not orientation:
        orientation = 'front'
    data = templates.get_template(f"moji/moji-{orientation}.html").render({"svgs": svgs})
    return Response(content=data, media_type="image/svg+xml")

@app.get("/list", response_class=HTMLResponse)
async def lists(request: Request):
    svg_list = {}
    svg_list['body'] = get_part_list()
    svg_list['shadow'] = templates.get_template("svgs/shadow.html").render({'moji_id' : 'menu'})
    svg_list['bodyclip'] = templates.get_template("moji/body-clip.html").render({'moji_id' : 'menu'})
    return Response(content=json.dumps(svg_list))


@app.get("/part/{type}/{item}", response_class=HTMLResponse)
async def part_pull(request: Request, type: str, item: str):
    return templates.TemplateResponse(
        "selection.html", {'request' : request, "moji_id": 'menu', "paths": {"type": type, "item" : item}})

@app.get("/build/{component}", response_class=HTMLResponse)
async def build(request: Request, component: str):
    svg_list = get_part_list()
    return templates.TemplateResponse("parts.html", {'request': request, 'mojis': svg_list[component], 'type': component})
