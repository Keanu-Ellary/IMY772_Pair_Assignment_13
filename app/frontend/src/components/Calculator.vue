<script setup>
    import { Delete, Trash, Divide, Plus, Minus, X, Equal  } from 'lucide-vue-next'
    import { ref } from 'vue'

    const calculatorInput = ref('')
    const calculatorOutput = ref('')

    const addToCalculatorInput = (input) => {
        calculatorInput.value += input
    }

    const addOperationToCalculatorInput = (input) => {
        calculatorInput.value += " "
        calculatorInput.value += input
        calculatorInput.value += " "
    }

    const clearInput = () => {
        calculatorInput.value = ""
        calculatorOutput.value = ""
    }

    const removeLastInput = () => {
        if (calculatorInput.value.endsWith(' '))
        {
            calculatorInput.value = calculatorInput.value.slice(0, -1)
        }
        const removedInput = calculatorInput.value[calculatorInput.value.length-1]
        calculatorInput.value = calculatorInput.value.slice(0, -1)
        if (removedInput=="+" || removedInput=="-" || removedInput=="×" || removedInput=="÷" ) {
            if (calculatorInput.value.endsWith(' '))
            {
                calculatorInput.value = calculatorInput.value.slice(0, -1)
            }
        }
        
        calculatorOutput.value = ""
    }

    const validateInput = (input) => {
        if (!input.includes('+') && !input.includes('-') && !input.includes('*') && !input.includes('/')) {
            alert("Input must contain an operator")
            return false
        }

        const inputValues = input.split(' ').filter(value => value !== '');

        for (const value of inputValues) {
            if (value!=='+' && value!=='-' && value!=='*' && value!=='/') {
                if (value.length > 2) {
                    alert("Input values must be 1 or 2 digits")
                    return false
                }
            }
        }

        if (inputValues.length < 3) {
            alert("Input must have atleast 2 hexadecimals values and 1 operator")
            return false
        }

        return true
    }

    const validateOutput = (output) => {
        if (output.length > 4) {
            alert("Output is greater than 4 digits")
            return false
        }

        if (output.includes('-')) {
            alert("Output is negative")
            return false
        }

        if (output.includes('.')) {
            alert("Output has decimal places")
            return false
        }

        return true
    }

    const calculateOutput = async () => {
        let calculatorValidInput = calculatorInput.value.replaceAll('÷', '/')
        calculatorValidInput = calculatorValidInput.replaceAll('×', '*')

        const isValidInput = validateInput(calculatorValidInput)
        if (!isValidInput) {
            calculatorOutput.value = "Error";
            return;
        }
        
        const res = await fetch('http://54.167.36.77:5000/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({expression: calculatorValidInput})
        });

        const data = await res.json();

        if (data.error)
        {
            alert(data.error);
            calculatorOutput.value = "Error";
        }
        else
        {
            const isValidOutput = validateOutput(data.result)
            if (!isValidOutput) {
                calculatorOutput.value = "Error";
                return;
            }
            calculatorOutput.value = data.result;
        }
    }


</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-black">
        <div class="flex flex-col w-120 h-200 border border-gray-500 rounded-xl"> 
            <div class="flex flex-col w-110 h-40 border border-gray-500 rounded-xl m-5 bg-gray-900 text-white p-4">
                <div class="text-4xl calculator-input" data-testid="calculator-input">
                    {{ calculatorInput }}
                </div>
                <div class="flex flex-row items-end justify-end text-5xl calculator-output" data-testid="calculator-output">
                    {{ calculatorOutput }}
                </div>
            </div>

            <div class="flex flex-col mx-4 text-3xl">

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button @click="addToCalculatorInput('D')" class="input-button" data-testid="btn-d">
                        D
                    </button>
                    <button @click="addToCalculatorInput('E')" class="input-button" data-testid="btn-e">
                        E
                    </button>
                    <button @click="addToCalculatorInput('F')" class="input-button" data-testid="btn-f">
                        F
                    </button>
                    <button class="operation-button division-button" data-testid="btn-div" @click="addOperationToCalculatorInput('÷')">
                        <Divide class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button @click="addToCalculatorInput('A')" class="input-button" data-testid="btn-a">
                        <span>A</span>
                    </button>
                    <button class="input-button" data-testid="btn-b" @click="addToCalculatorInput('B')">
                        <span>B</span>
                    </button>
                    <button class="input-button" data-testid="btn-c" @click="addToCalculatorInput('C')">
                        <span>C</span>
                    </button>
                    <button class="operation-button multiplication-button" data-testid="btn-mult" @click="addOperationToCalculatorInput('×')">
                        <X class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button" data-testid="btn-7" @click="addToCalculatorInput('7')">
                        <span>7</span>
                    </button>
                    <button class="input-button" data-testid="btn-8" @click="addToCalculatorInput('8')">
                        <span>8</span>
                    </button>
                    <button class="input-button" data-testid="btn-9" @click="addToCalculatorInput('9')">
                        <span>9</span>
                    </button>
                    <button class="operation-button subtraction-button" data-testid="btn-minus" @click="addOperationToCalculatorInput('-')">
                        <Minus class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button" data-testid="btn-4" @click="addToCalculatorInput('4')">
                        <span>4</span>
                    </button>
                    <button class="input-button" data-testid="btn-5" @click="addToCalculatorInput('5')">
                        <span>5</span>
                    </button>
                    <button class="input-button" data-testid="btn-6" @click="addToCalculatorInput('6')">
                        <span>6</span>
                    </button>
                    <button class="operation-button addition-button" data-testid="btn-plus" @click="addOperationToCalculatorInput('+')">
                        <Plus class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button" data-testid="btn-1" @click="addToCalculatorInput('1')">
                        <span>1</span>
                    </button>
                    <button class="input-button" data-testid="btn-2" @click="addToCalculatorInput('2')">
                        <span>2</span>
                    </button>
                    <button class="input-button" data-testid="btn-3" @click="addToCalculatorInput('3')">
                        <span>3</span>
                    </button>
                    <button class="equal-button" data-testid="btn-equals" @click="calculateOutput">
                        <Equal class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button" data-testid="btn-0" @click="addToCalculatorInput('0')">
                        <span>0</span>
                    </button>
                    <div class="flex flex-row gap-8">
                        <button class="clear-button" data-testid="btn-clear" @click="clearInput">
                            <Trash class="w-12 h-8"/>
                        </button>
                        <button class="clear-button" @click="removeLastInput">
                            <Delete class="w-12 h-8"/>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
    .input-button {
        border: 1px solid #6b7280;
        border-radius: 0.75rem;
        padding: 1rem 2rem;
        color: white;
        background: #3e4248; 
    }

    .operation-button {
        border: 1px solid #6b7280;
        border-radius: 0.75rem;
        padding: 0rem 1rem;
        color: white;
        background: #324a7b; 
    }

    .equal-button {
        border: 1px solid #6b7280;
        border-radius: 0.75rem;
        padding: 0rem 1rem;
        color: white;
        background: #d18543; 
    }

    .clear-button {
        border: 1px solid #6b7280;
        border-radius: 0.75rem;
        padding: 0rem 1rem;
        color: white;
        background: #b42d2d; 
    }
</style>