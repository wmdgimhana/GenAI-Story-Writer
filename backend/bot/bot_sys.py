import os
from langchain_groq import ChatGroq
import os
import dotenv
from langchain_core.output_parsers import StrOutputParser
from .prompts.story_System_prompt import get_story_generator_prompt
from models.user_input import UserInput


dotenv.load_dotenv()



groq_api_key = os.getenv("GROQ_API_KEY")


# initialize llm
model = ChatGroq(model="gemma2-9b-it", api_key=groq_api_key)
output_parser = StrOutputParser()



# load the prompt generator
story_generator_prompt_template = get_story_generator_prompt()



# create the chain
chain = story_generator_prompt_template|model|output_parser



# process the chain and return output
def generate_story (inputs: UserInput):
    if inputs is None:
        return SyntaxError("All fields are required")
    
    story = chain.invoke(inputs.dict())
    return story



