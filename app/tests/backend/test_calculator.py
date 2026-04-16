import pytest

from backend.calculator import (
    calculate,
    calculate_multiple
)

def test_calculate_addition():
    res = calculate("6 + 6")
    assert res == "C"
    
def test_calculate_subtaction():
    res = calculate("6 - 6")
    assert res == "0"
    
def test_calculate_division():
    res = calculate("6 / 6")
    assert res == "1"
    
def test_calculate_multiplication():
    res = calculate("6 * 6")
    assert res == "24"
    
def test_calculate_expression():
    res = calculate_multiple("6 * 6 + 2")
    assert res == "26"