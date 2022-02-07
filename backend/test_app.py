from fastapi.testclient import TestClient
from backend.app import app
from backend.database import models
from bson import ObjectId
import pytest
from unittest.mock import AsyncMock
import json


test_user = {
    'id': ObjectId(),
    'sub': '123456789',
    'email': 'email@site.com',
}


def authenticate(test_client, mocker):
    oauth = mocker.patch('backend.app.oauth', new=AsyncMock())
    oauth.google.parse_id_token.return_value = test_user

    database = mocker.patch('backend.app.database', new=AsyncMock())
    database.retrieve_user.return_value = models.UserModel(**test_user).json()

    return test_client.get("/auth/google", allow_redirects=False)


def test_get_login():
    test_client = TestClient(app)
    response = test_client.get("/login/google", allow_redirects=False)
    assert response.status_code == 302

    with pytest.raises(NotImplementedError):
        test_client.get("/login/apple", allow_redirects=False)


def test_get_auth(mocker):
    test_client = TestClient(app)
    response = authenticate(test_client, mocker)

    assert response.status_code == 307
    assert response.headers["location"] == "/customize"

    with pytest.raises(NotImplementedError):
        test_client.get("/auth/apple", allow_redirects=False)


def test_get_me(mocker):
    test_client = TestClient(app)
    response = test_client.get("/authenticated", allow_redirects=False)
    assert json.loads(response.text)['is_authenticated'] == False
