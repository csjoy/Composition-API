<script setup lang="ts">
import { ref, reactive, watch } from "vue"
const discount = ref(5)
const newPrice = ref<number>()
const pizza = reactive({
  name: "Pepperoni Pizza",
  price: 10,
})
watch(discount, (newValue) => {
  newPrice.value = pizza.price - (pizza.price * newValue) / 100
}, { immediate: true })
const updateDiscount = () => {
  discount.value = discount.value + 5
}

watch(() => pizza.price, (newValue) => {
  newPrice.value = newValue - (newValue * discount.value) / 100
})
const increasePrice = () => {
  pizza.price = pizza.price + 5
}

</script>

<template>
  <h1 class="text-2xl font-semibold">{{ pizza.name }}</h1>
  <div>
    Monday Special: {{ discount }}% off!
    <del>Was ${{ pizza.price }}</del>
    <strong>Now at ${{ newPrice }} ONLY</strong>
  </div>
  <button class="m-2 bg-rose-500 px-5 py-2.5 rounded text-white" @click="updateDiscount">Get a discount!</button>
  <button class="m-2 bg-blue-500 px-5 py-2.5 rounded text-white" @click="increasePrice">Increase the Price!</button>
</template>