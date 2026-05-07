import pytest
import json
from backend.app import app

def test_calculate_addition_simple_success():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "1 + 1"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 200
    assert data["result"] == "2"

def test_calculate_addition_mixed_success():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "A + 3"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 200
    assert data["result"] == "D"

def test_calculate_addition_same_success():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "6 + 6"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 200
    assert data["result"] == "C"

def test_calculate_addition_error():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "2 + +"}), content_type='application/json')

    data = json.loads(res.data)
    
    assert res.status_code == 400
    assert "error" in data
    assert data["error"] == "Input values must be a hexadecimal"

def test_calculate_subtraction_simple_success():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "5 - 1"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 200
    assert data["result"] == "4"

def test_calculate_subtraction_mixed_success():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "A - 1"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 200
    assert data["result"] == "9"

def test_calculate_subtraction_same_success():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "C - C"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 200
    assert data["result"] == "0"

def test_calculate_subtraction_error():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "20 - 30"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 400
    assert "error" in data
    assert data["error"] == "Output of subtraction must not be negative"

def test_calculate_multiplication_simple_success():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "3 * 2"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 200
    assert data["result"] == "6"

def test_calculate_multiplication_mixed_success():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "A * 2"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 200
    assert data["result"] == "14"

def test_calculate_multiplication_same_success():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "5 * 5"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 200
    assert data["result"] == "19"

def test_calculate_multiplication_error():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "FFF * FF"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 400
    assert "error" in data
    assert data["error"] == "Input values must be 1 or 2 digits"

def test_calculate_division_simple_success():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "8 / 2"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 200
    assert data["result"] == "4"

def test_calculate_division_mixed_success():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "A / 2"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 200
    assert data["result"] == "5"

def test_calculate_division_same_success():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "2 / 2"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 200
    assert data["result"] == "1"

def test_calculate_division_error():
    client = app.test_client()

    res = client.post('/calculate', data=json.dumps({"expression" : "4 / 0"}), content_type='application/json')

    data = json.loads(res.data)

    assert res.status_code == 400
    assert "error" in data
    assert data["error"] == "Division by 0 is not allowed"