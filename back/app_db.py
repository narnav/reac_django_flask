import json
from flask import Flask, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# setting the DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shop.sqlite3'
app.config['SECRET_KEY'] = "random string"

# connect DB to our application
db = SQLAlchemy(app)

# allow calls to my server
CORS(app)

# add a table to DB


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    desc = db.Column(db.String(100))
    price = db.Column(db.Float())

    def __init__(self, desc, price):
        self.desc = desc
        self.price = price


@app.route('/')
def hello():
    return 'Hello, World!'

# full CRUD


@app.route('/newprod', methods=['GET', 'POST', 'DELETE', 'PUT'])
def products():
    if request.method == "POST":  # create a new row
        request_data = request.get_json()
        desc = request_data["desc"]
        price = request_data["price"]
        newProduct = Product(desc, price)
        db.session.add(newProduct)
        db.session.commit()
        return "a new product was create"

    if request.method == "GET":  # read from data base
        res = []
        for prod in Product.query.all():
            res.append({"desc": prod.desc, "price": prod.price, "id": prod.id})
        return (json.dumps(res))
    if request.method == "PUT":  # read from data base
        return "PUT...."
    if request.method == "DELETE":  # read from data base
        return "del...."


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
