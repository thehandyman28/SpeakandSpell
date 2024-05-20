from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<a href='/foo'>Hello, World!</a>"
@app.route("/foo")
def foo():
    return "<h1>foobar2</h1>"
@app.route("/login")
def login():
    with open("index.html") as f:
        lines=f.readlines()
        return "".join(lines)
if __name__=="__main__":
    app.run(debug=True)