import pytest

from backend.features.addition import (
    perform_addition,
    valid_hexadecimal
)

def test_valid_addition():
    res = perform_addition("1", "1")
    assert res ==  "2"
    
def test_valid_addition():
    res = perform_addition("5", "5")
    assert res ==  "10"
    
def test_valid_addition():
    res = perform_addition("10", "10")
    assert res ==  "20"
    
def test_valid_addition():
    res = perform_addition("8A", "B7")
    assert res ==  "141"
    
def test_valid_hexadecimal():
    res = valid_hexadecimal("1F")
    assert res == True
    
def test_valid_hexadecimal():
    res = valid_hexadecimal("1FF")
    assert res == False
    