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
    }

    const removeLastInput = () => {
        if (calculatorInput.value.endsWith(' '))
        {
            calculatorInput.value = calculatorInput.value.slice(0, -1)
        }
        calculatorInput.value = calculatorInput.value.slice(0, -1)
        if (calculatorInput.value.endsWith(' '))
        {
            calculatorInput.value = calculatorInput.value.slice(0, -1)
        }
    }

    const calculateOutput = () => {
        let calculatorValidInput = calculatorInput.value.replaceAll('÷', '/')
        calculatorValidInput = calculatorValidInput.replaceAll('×', '*')
        calculatorOutput.value = "output"
    }


</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-black">
        <div class="flex flex-col w-120 h-200 border border-gray-500 rounded-xl"> 
            <div class="flex flex-col w-110 h-40 border border-gray-500 rounded-xl m-5 bg-gray-900 text-white p-4">
                <div class="text-4xl">
                    {{ calculatorInput }}
                </div>
                <div class="flex flex-row items-end justify-end text-5xl">
                    {{ calculatorOutput }}
                </div>
            </div>

            <div class="flex flex-col mx-4 text-3xl">

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button @click="addToCalculatorInput('D')" class="input-button">
                        D
                    </button>
                    <button @click="addToCalculatorInput('E')" class="input-button">
                        E
                    </button>
                    <button @click="addToCalculatorInput('F')" class="input-button">
                        F
                    </button>
                    <button class="operation-button" @click="addOperationToCalculatorInput('÷')">
                        <Divide class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button @click="addToCalculatorInput('A')" class="input-button">
                        <span>A</span>
                    </button>
                    <button class="input-button" @click="addToCalculatorInput('B')">
                        <span>B</span>
                    </button>
                    <button class="input-button" @click="addToCalculatorInput('C')">
                        <span>C</span>
                    </button>
                    <button class="operation-button" @click="addOperationToCalculatorInput('×')">
                        <X class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button" @click="addToCalculatorInput('7')">
                        <span>7</span>
                    </button>
                    <button class="input-button" @click="addToCalculatorInput('8')">
                        <span>8</span>
                    </button>
                    <button class="input-button" @click="addToCalculatorInput('9')">
                        <span>9</span>
                    </button>
                    <button class="operation-button" @click="addOperationToCalculatorInput('-')">
                        <Minus class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button" @click="addToCalculatorInput('4')">
                        <span>4</span>
                    </button>
                    <button class="input-button" @click="addToCalculatorInput('5')">
                        <span>5</span>
                    </button>
                    <button class="input-button" @click="addToCalculatorInput('6')">
                        <span>6</span>
                    </button>
                    <button class="operation-button" @click="addOperationToCalculatorInput('+')">
                        <Plus class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button" @click="addToCalculatorInput('1')">
                        <span>1</span>
                    </button>
                    <button class="input-button" @click="addToCalculatorInput('2')">
                        <span>2</span>
                    </button>
                    <button class="input-button" @click="addToCalculatorInput('3')">
                        <span>3</span>
                    </button>
                    <button class="equal-button" @click="calculateOutput">
                        <Equal class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button" @click="addToCalculatorInput('0')">
                        <span>0</span>
                    </button>
                    <div class="flex flex-row gap-8">
                        <button class="clear-button"  @click="clearInput">
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