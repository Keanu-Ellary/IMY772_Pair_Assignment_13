import pytest

from backend.calculator import (
    calculate
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