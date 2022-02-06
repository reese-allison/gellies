import os
from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorClient
from backend.database import models

client = AsyncIOMotorClient(os.environ.get('MONGO_URL'))
db = client.gellies

user_collection = db.get_collection("user_collection")


async def add_user(user_data: dict) -> dict:
    user_data['id'] = ObjectId()
    user_model = models.UserModel(**user_data)
    user = await user_collection.insert_one(user_model.mongo())
    new_user = await user_collection.find_one({"_id": user.inserted_id})
    return models.UserModel.from_mongo(new_user).json()


async def retrieve_user(sub: str) -> dict:
    user = await user_collection.find_one({"sub": sub})
    if user:
        return models.UserModel.from_mongo(user).json()
    return None
