from flask import Flask,render_template


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<a href='/login'>spelling</a><br/><a href='/spell'>spelling2</a>"


@app.route("/login")
def login():
    return render_template("index.html")
    # with open("index.html") as f:
    #     lines=f.readlines()
    #     return "".join(lines)

@app.route("/spell")
def spell():
    return render_template("spell.html")
@app.route("/submit")
def submit():
    return render_template("submit.html")
if __name__=="__main__":
    app.run(debug=True)