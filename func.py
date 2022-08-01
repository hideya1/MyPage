import datetime, json
from flask import Flask, render_template, redirect, request


DATA_FILE = "test.json"


def load_data():
    try:
        with open(DATA_FILE, mode="r", encoding="utf-8") as f:
            database = json.load(f)
    except:
        database = []
    return database


def save_data(source, target, memo, date):
    database = load_data()
    database.insert(0, {
        "source": source,
        "target": target,
        "memo": memo,
        "date": date.strftime("%Y-%m-%d %H:%M")
    })
    with open(DATA_FILE, mode="w", encoding="utf-8") as f:
        json.dump(database, f, indent=4, ensure_ascii=False)


application = Flask(__name__)


@application.route("/")
def index():
    data = load_data()
    return render_template("index.html", data=data)


@application.route("/save", methods=["POST"])
def save():
    source = request.form.get("source")
    target = request.form.get("target")
    memo = request.form.get("memo")
    date = datetime.datetime.now()
    save_data(source, target, memo, date)
    return redirect("/")



if __name__ == '__main__':
    application.run("0.0.0.0", 8000, debug=True)
