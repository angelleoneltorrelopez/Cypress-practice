<template>
    <div class="container text-center">
        <div class="card">
            <div class="card-body">
                <div class="btn-group" role="group" aria-label="Basic example"></div>
                <button class="btn btn-primary" aria-label="decrement" @click="count--">-</button>
                <span data-cy="counter">{{ count }}</span>
                <button class="btn btn-primary" aria-label="increment" @click="count++">+</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['initial'])

const emit = defineEmits(['change'])

const count = ref(props.initial || 0)
</script>
