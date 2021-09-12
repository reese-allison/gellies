from fastapi import FastAPI, Request, Response
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import json
from time import time

from backend.core.drops.drop_tables import get_random_moji, get_component, get_all_components


app = FastAPI()
app.mount("/static", StaticFiles(directory="backend/static"), name="static")
templates = Jinja2Templates(directory="backend/templates")


@app.get("/random-moji/", response_class=HTMLResponse)
async def get_moji(request: Request, orientation: str = None):
    svgs = get_random_moji('all')
    if not orientation:
        orientation = 'front'
    data = templates.get_template(f"moji/moji-{orientation}.html").render({"svgs": svgs, "animations": True})
    return Response(content=data, media_type="image/svg+xml")


@app.get("/parts/{component}", response_class=HTMLResponse)
async def get_parts(request: Request, component: str):
    components = get_component(component)
    return templates.TemplateResponse("parts.html", {'request': request, 'mojis': components, 'type': component})


@app.get("/parts-list/", response_class=HTMLResponse)
async def get_parts_list(request: Request):
    components = get_all_components()
    return JSONResponse(components)


@app.get("/build/", response_class=HTMLResponse)
async def get_build(request: Request):
    components = dict(request.query_params)
    components['id'] = 'build'
    data = templates.get_template(f"moji/moji-front.html").render({"svgs": components})
    return Response(content=data, media_type="image/svg+xml")
