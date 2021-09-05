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

@app.get("/moji-test/", response_class=HTMLResponse)
async def moji_test(request: Request):
    svgs = get_moji('all')
    data = templates.get_template("moji.html").render({"svgs": svgs})
    return Response(content=data, media_type="image/svg+xml")

@app.get("/build/{component}", response_class=HTMLResponse)
async def get_build_hats(request: Request, component: str):
    svg_list = get_part_list()
    return templates.TemplateResponse("parts.html", {'request': request, 'mojis': svg_list[component], 'type': component})
