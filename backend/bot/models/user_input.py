from pydantic import BaseModel
from typing import List, Optional


class UserInput (BaseModel):
    genre: str
    title: str
    setting: List[str]
    protagonist: List[str]
    antagonist: List[str]
    conflict: str
    dialogue: List[str]
    theme: Optional[str] = None
    tone: Optional[str] = None
