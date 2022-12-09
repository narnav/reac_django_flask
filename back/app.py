import json
from flask import Flask
from flask_cors import CORS
api = Flask(__name__)
CORS(api)
prods = [
    {
        "desc": "Pizzaaaaa",
        "price": 32,
        "id": 1
    },
    {
        "desc": "milk",
        "price": 28,
        "id": 2
    },
    {
        "desc": "sugar",
        "price": 52,
        "id": 3
    },
    {
        "desc": "Pasta",
        "price": 24,
        "id": 4
    },
    {
        "desc": "cookies",
        "price": 2,
        "id": 5
    },
    {
        "desc": "coffee",
        "price": 120,
        "id": 6
    }
]


@api.route('/')
def hello():
    return 'Hello, World!'


@api.route('/prods')
def getData():
    return json.dumps(prods)


if __name__ == '__main__':
    api.run(debug=True)
