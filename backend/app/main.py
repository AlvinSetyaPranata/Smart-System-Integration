from fastapi import FastAPI
from routers.data import router as data_path

app = FastAPI()

app.include_router(data_path, prefix="/api")


@app.get("/")
async def root():
    return {"message": "Hello World"}



# Root


