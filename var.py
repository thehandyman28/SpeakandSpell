from os import environ
print("bye")
print(environ.get('TEST_KEY'))
print(environ.get('test'))
api_key=environ.get('api_key')
print(api_key)

