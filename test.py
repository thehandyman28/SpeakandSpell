
import os
from os import environ

from openai import OpenAI
apiKey=environ.get('api_key')

client = OpenAI(
    # This is the default and can be omitted
    # api_key=os.environ.get("OPENAI_API_KEY"),
    api_key=apiKey
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "generate a simple sentence with the word milk in it",
        }
    ],
    model="gpt-3.5-turbo",
)
print(chat_completion.choices[0].message.content)
