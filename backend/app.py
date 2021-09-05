from fastapi import FastAPI, Request, Response
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import re

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

@app.get("/build/{component}", response_class=HTMLResponse)
async def build(request: Request, component: str):
    svg_list = get_part_list()
    return templates.TemplateResponse("parts.html", {'request': request, 'mojis': svg_list[component], 'type': component})
