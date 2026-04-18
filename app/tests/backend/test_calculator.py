import pytest

from backend.calculator import (
    calculate,
    calculate_multiple
)

def test_calculate_addition_success():
    res = calculate("6 + 6")
    assert res == "C"
    
def test_calculate_subtaction_success():
    res = calculate("6 - 6")
    assert res == "0"
    
def test_calculate_division_success():
    res = calculate("6 / 6")
    assert res == "1"
    
def test_calculate_multiplication_success():
    res = calculate("6 * 6")
    assert res == "24"
    
def test_calculate_expression_success():
    res = calculate_multiple("6 * 6 + 2")
    assert res == "26"