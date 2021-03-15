from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

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
    svgs = db_result[moji_id]
    svgs['id'] = moji_id
    return templates.TemplateResponse("moji.html", {"request": request, "svgs": svgs})
