import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from bot.bot_sys import generate_story
from bot.models.user_input import UserInput



app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)





@app.post('/')
async def story_gen(query: UserInput):
    try:
       response = generate_story(query)
       return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
       





