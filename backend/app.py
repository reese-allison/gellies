from fastapi import FastAPI, Request, Response
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import re
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
    svg_list = get_part_list()
    return Response(content=json.dumps(svg_list))


@app.get("/part/{direct}/{item}", response_class=HTMLResponse)
async def part_pull(request: Request, direct: str, item: str):
    if direct:
        item_types = {
            "body" : "body", 
            "eyes" : "eyes",
            "mouth" : "mouth",
            "gradient" : "gradient",
            "headwear" : "headwear",
            "pattern" : "pattern" #Dict is no longer needed, shorten
        }
        type = item_types.get(direct, Exception)
        print(request, direct, item, type)
    return templates.TemplateResponse(
        "selection.html", {'request' : request, "moji_id": 'menu', "paths": {"type": type, "item" : item, "direct" : direct}})

@app.get("/build/{component}", response_class=HTMLResponse)
async def build(request: Request, component: str):
    svg_list = get_part_list()
    return templates.TemplateResponse("parts.html", {'request': request, 'mojis': svg_list[component], 'type': component})
