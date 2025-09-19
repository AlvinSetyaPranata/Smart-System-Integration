from fastapi import APIRouter, Request

router = APIRouter()

@router.post("/upload", tags=["uploads"])
async def upload_data(request: Request):

    print(await request.body())

    return [{"username" : "Alvin1"}, {"username" : "Yudi"}]