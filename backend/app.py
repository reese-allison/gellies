from fastapi import FastAPI, Request, Response
from fastapi.responses import HTMLResponse, ORJSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import json
from time import time

from backend.core.drops.drop_tables import get_random_moji, get_component


app = FastAPI()
app.mount("/static", StaticFiles(directory="backend/static"), name="static")
t = Jinja2Templates(directory="backend/templates")


@app.get("/random-moji/", response_class=HTMLResponse)
async def get_moji(request: Request, moji_id: str, orientation: str = None):
    svgs = get_random_moji('all')
    svgs['id'] = moji_id
    if not orientation:
        orientation = 'front'
    data = t.get_template(f"moji/moji-{orientation}.html").render({"svgs": svgs, "animations": True})
    return Response(content=data, media_type="image/svg+xml")


@app.get("/parts/{component}", response_class=HTMLResponse)
async def get_parts(request: Request, component: str):
    components = get_component(component)
    components = {k: t.get_template("parts.html").render({'request': request, 'type': component, 'id': k}) for k in components}
    return ORJSONResponse(components, headers={'Cache-Control': 'public, max-age=604800'})


@app.get("/build/", response_class=HTMLResponse)
async def get_build(request: Request):
    components = dict(request.query_params)
    components['id'] = 'build'
    data = t.get_template(f"build.html").render({"svgs": components})
    return Response(content=data, media_type="image/svg+xml")
