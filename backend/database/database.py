import os
from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorClient
from backend.database import models

db_user = os.environ.get('MONGO_INITDB_ROOT_USERNAME')
db_pass = os.environ.get('MONGO_INITDB_ROOT_PASSWORD')
connection_string = f"mongodb://{db_user}:{db_pass}@{os.environ.get('MONGO_URL')}:27017"
client = AsyncIOMotorClient(connection_string)
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
