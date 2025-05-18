from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    return jsonify({"message": f"Hello {data['name']}! Data received successfully."})

@app.route('/', methods=['GET'])
def home():
    return "Backend is running!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
