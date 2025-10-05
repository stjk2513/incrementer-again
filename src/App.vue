<template>
  <h1>{{ counter.count }}</h1>
  <div>
    <button data-testid="increment-btn" @click="counter.increment">+</button>
    <button data-testid="decrement-btn" @click="counter.decrement">-</button>
  </div>
  <div>
    <button data-testid="reset-btn" @click="counter.reset">reset</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "./stores/counter";

const counter = useCounterStore();
</script>
