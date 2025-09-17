from fastapi import APIRouter

router = APIRouter()

@router.post("/upload", tags=["uploads"])
async def upload_data():
    return [{"username" : "Alvin1"}, {"username" : "Yudi"}]