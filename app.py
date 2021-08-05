from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from core.drops.drop_tables import get_moji

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

db_result = {
    100: {
        'eyes': 'basic',
        'mouth': 'basic',
        'body': 'basic',
        'body-gradient': 'slime',
        'eye-gradient': 'basic'
    },
    101: {
        'eyes': 'cat',
        'mouth': 'basic',
        'body': 'basic',
        'body-gradient': 'slime',
        'eye-gradient': 'basic'
    },
    200: {
        'eyes': 'circle',
        'mouth': 'basic',
        'body': 'basic',
        'body-gradient': 'sunrise',
        'eye-gradient': 'basic'
    },
    300: {
        'eyes': 'anime-swirl',
        'mouth': 'basic',
        'body': 'basic',
        'body-gradient': 'sunrise',
        'eye-gradient': 'basic'
    },
    302: {
        'eyes': 'circle',
        'mouth': 'basic',
        'body': 'basic',
        'body-gradient': 'twinkie',
        'eye-gradient': 'basic'
    },
    402: {
        'eyes': 'basic',
        'mouth': 'basic',
        'body': 'basic',
        'body-gradient': 'bao-bun',
        'eye-gradient': 'basic'
    },
    502: {
        'eyes': 'cat',
        'mouth': 'basic',
        'body': 'basic',
        'body-gradient': 'blueberry-cobler',
        'eye-gradient': 'basic'
    }
}


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/base/", response_class=HTMLResponse)
async def base(request: Request):
    return templates.TemplateResponse("base.html", {"request": request})


@app.get("/gradients/", response_class=HTMLResponse)
async def gradients(request: Request):
    return templates.TemplateResponse("demo.html", {"request": request})


@app.get("/moji/{moji_id}", response_class=HTMLResponse)
async def mojis(moji_id: int, request: Request):
    if moji_id:
        svgs = db_result[moji_id]
        svgs['id'] = moji_id
    else:
        svgs = get_moji('random')
    response = {
        'html': templates.get_template("moji.html").render({"svgs": svgs}),
        'id': svgs['id']
    }
    return JSONResponse(response)
