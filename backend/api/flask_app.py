from visual import dummyvisual
from predict import dummypredict
from flask import Flask, request, jsonify

app = Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "Welcome to Len and Davis' API"

#giv csv, store model 
@app.route('/store', methods=['GET'])
def store():
    #once we know what implement fetching the csv from firebase, that'll go in the call
    return jsonify()

@app.route('/visual', methods=['GET'])
def visual():
    return jsonify(dummyvisual())


@app.route('/predict', methods=['GET'])
def predict():
    return jsonify(dummypredict())


# when uploading to pythonanywhere,
# comment this line out
app.run()
