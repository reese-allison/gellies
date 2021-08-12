from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
import minify_html
import re

from core.drops.drop_tables import get_moji

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


class Gradient(BaseModel):
    html: str
    name: str

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


@app.get("/", response_class=HTMLResponse)
async def base(request: Request):
    return templates.TemplateResponse("base.html", {"request": request})


@app.get("/gradient-generator/", response_class=HTMLResponse)
async def gradients(request: Request):
    return templates.TemplateResponse("gradient-generator.html", {"request": request})


@app.post("/save/", response_class=HTMLResponse)
async def save(gradient: Gradient):
    _html = re.sub('-[0-9]*-', '-{{ moji_id }}-', gradient.html)
    _html = re.sub('\s\s\s\s\n', '', _html)
    with open(f'./templates/svgs/gradients/{gradient.name}-gradient.html', 'w+') as f:
        f.write(_html)
    return JSONResponse({'Success': True})


@app.get("/moji/{moji_id}", response_class=HTMLResponse)
async def mojis(moji_id: int, request: Request):
    if moji_id:
        svgs = db_result[moji_id]
        svgs['id'] = moji_id
    else:
        svgs = get_moji('all')
    response = {
        'html': minify_html.minify(templates.get_template("moji.html").render({"svgs": svgs})),
        'id': svgs['id']
    }
    return JSONResponse(response)
