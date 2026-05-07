import { describe, test, expect, vi } from 'vitest'

describe("API Integration", () => {
    // Addition
    test('Performs Addition Successfully: Simple Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 + 3"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("5");
    });
    test('Performs Addition Successfully: Mixed Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "A + 3"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("D");
    });
    test('Performs Addition Successfully: Same Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 + 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("4");
    });
    test('Performs Addition Unsuccessfully', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 + +"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input values must be a hexadecimal")
    });

    // Subtraction
    test('Performs Subtraction Successfully: Simple Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "3 - 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("1");
    });
    test('Performs Subtraction Successfully: Mixed Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "D - 3"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("A");
    });
    test('Performs Subtraction Successfully: Same Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 - 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("0");
    });
    test('Performs Subtraction Unsuccessfully', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "20 - 30"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Output of subtraction must not be negative")
    });

    // Multiplication
    test('Performs Multiplication Successfully: Simple Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "3 * 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("6");
    });
    test('Performs Multiplication Successfully: Mixed Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "D * 3"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("27");
    });
    test('Performs Multiplication Successfully: Same Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "A * A"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("64");
    });
    test('Performs Multiplication Unsuccessfully', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "FFFF * FF"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input values must be 1 or 2 digits")
    });

    // Division
    test('Performs Division Successfully: Simple Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "6 / 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("3");
    });
    test('Performs Division Successfully: Mixed Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "A / 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("5");
    });
    test('Performs Division Successfully: Same Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 / 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("1");
    });
    test('Performs Division Unsuccessfully', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 / 0"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Division by 0 is not allowed")
    });
});