from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<a href='/login'>spelling</a>"
@app.route("/foo")
def foo():
    return "<h1>foobar2</h1>"
@app.route("/login")
def login():
    return render_template("index.html")
    # with open("index.html") as f:
    #     lines=f.readlines()
    #     return "".join(lines)
if __name__=="__main__":
    app.run(debug=True)