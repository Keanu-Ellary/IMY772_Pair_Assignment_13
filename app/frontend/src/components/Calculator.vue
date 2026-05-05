<script setup>
    import { Delete, Trash, Divide, Plus, Minus, X, Equal  } from 'lucide-vue-next'
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-black">
        <div class="flex flex-col w-120 h-200 border border-gray-500 rounded-xl"> 
            <div class="flex flex-col w-110 h-40 border border-gray-500 rounded-xl m-5 bg-gray-900">
                <div>

                </div>
                <div>

                </div>
            </div>

            <div class="flex flex-col mx-4 text-3xl">

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button">
                        <span>D</span>
                    </button>
                    <button class="input-button">
                        <span>E</span>
                    </button>
                    <button class="input-button">
                        <span>F</span>
                    </button>
                    <button class="operation-button">
                        <Divide class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button">
                        <span>A</span>
                    </button>
                    <button class="input-button">
                        <span>B</span>
                    </button>
                    <button class="input-button">
                        <span>C</span>
                    </button>
                    <button class="operation-button">
                        <X class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button">
                        <span>7</span>
                    </button>
                    <button class="input-button">
                        <span>8</span>
                    </button>
                    <button class="input-button">
                        <span>9</span>
                    </button>
                    <button class="operation-button">
                        <Minus class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button">
                        <span>4</span>
                    </button>
                    <button class="input-button">
                        <span>5</span>
                    </button>
                    <button class="input-button">
                        <span>6</span>
                    </button>
                    <button class="operation-button">
                        <Plus class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button">
                        <span>1</span>
                    </button>
                    <button class="input-button">
                        <span>2</span>
                    </button>
                    <button class="input-button">
                        <span>3</span>
                    </button>
                    <button class="equal-button">
                        <Equal class="w-10 h-8"/>
                    </button>
                </div>

                <div class="flex flex-row gap-2 justify-between my-4">
                    <button class="input-button">
                        <span>0</span>
                    </button>
                    <div class="flex flex-row gap-8">
                        <button class="clear-button">
                            <Trash class="w-12 h-8"/>
                        </button>
                        <button class="clear-button">
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