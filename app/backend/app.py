from backend.calculator import calculate_multiple
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

@app.route('/calculate', methods=['POST'])
def calculate_route():
    data = request.json
    expression = data.get("expression")

    try:
        res = calculate_multiple(expression)
    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        return jsonify({"error": "Server error"}), 500
    
    return jsonify({"result": res}), 200

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)