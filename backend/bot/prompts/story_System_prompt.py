import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from langchain.prompts import ChatPromptTemplate


system_message = """
You are a skilled {genre} author. Your task is to write {genre} stories in vivid and intriguing language.
Your stories must follow the user's detailed instructions, ensuring consistency in tone, theme, and character development.
Focus on creating immersive narratives that engage the reader and align with the input provided.
"""

human_message = """
Write a story based on the following details:

- **Genre**: {genre}
- **Title**: {title}
- **Setting**: {setting} (Include time period, location, and any relevant background information)
- **Protagonist**: {protagonist} (Provide name, age, occupation, personality traits, and motivations)
- **Antagonist**: {antagonist} (Provide name, age, occupation, personality traits, and motivations)
- **Conflict**: {conflict} (Describe the main problem the protagonist faces and the stakes involved)
- **Dialogue**: Use {dialogue} to advance the plot, reveal character, and provide information to the reader.
- **Theme**: {theme} (Develop the central theme through the plot, character interactions, and setting)
- **Tone**: {tone} (Maintain a consistent tone appropriate to the setting and characters)


Ensure the story adheres to all the user-provided details. Create a cohesive and engaging narrative that aligns with the instructions.
"""


story_generator_prompt_template = ChatPromptTemplate.from_messages([
    
    ("system", system_message),
    ("human", human_message)
    
])



def get_story_generator_prompt():
    return story_generator_prompt_template
