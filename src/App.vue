<script setup lang="ts">
// const greeting = "Hello"
// const who = "John"
import { ref } from 'vue';
const isLightOn = ref(false)
import Greeting from './components/Greeting.vue';

const toggle = () => {
  console.log(isLightOn.value)
  isLightOn.value = !isLightOn.value
}

const livingRoomLight = ref({
  status: false,
  name: "Living Room",
})

const toggleLight = () => {
  livingRoomLight.value.status = !livingRoomLight.value.status
}

const replaceLight = () => {
  livingRoomLight.value = {
    status: false,
    name: "Kitchen"
  }
}

import { reactive } from 'vue';
import BlogGallery from './components/BlogGallery.vue';
import BookGallery from './components/BookGallery.vue';
import UserInput from './components/UserInput.vue';
import PizzaItem from './components/PizzaItem.vue';
import LifecycleHook from './components/LifecycleHook.vue';
import Composable from './components/Composable.vue';
import Movies from './components/Movies.vue';
const newBook = reactive({
  title: "",
  price: 0,
  currency: "USD",
  description: "",
})
const books = reactive<Object[]>([])
const addBook = () => {
  books.push({ ...newBook })
  newBook.title = ""
  newBook.price = 0
  newBook.currency = "USD"
  newBook.description = ""
  console.log(books)
}

</script>

<template>
  <!-- <div>{{ greeting }} {{ who }}</div> -->
  <div class="container">
    <Greeting greeting="Hey" />
  </div>
  <p>Light status: {{ isLightOn }}</p>
  <button class="bg-gray-400 text-white rounded px-5 py-2.5" @click="toggle">Toggle</button>

  <div class="container">
    <div>Light status: {{ livingRoomLight.status }}</div>
    <div>Light name: {{ livingRoomLight.name }}</div>
    <button class="m-2 bg-gray-400 text-white rounded px-5 py-2.5" @click="toggleLight">Toggle</button>
    <button class="m-2 bg-gray-400 text-white rounded px-5 py-2.5" @click="replaceLight">Replace</button>
  </div>

  <div class="container">
    <fieldset class="flex flex-col border border-gray-500">
      <label>Title: <input class="m-2 p-2 bg-gray-50 rounded border border-gray-500" v-model="newBook.title"></label>
      <label>Price: <input class="m-2 p-2 bg-gray-50 rounded border border-gray-500" v-model="newBook.price"></label>
      <label>Currency: <input class="m-2 p-2 bg-gray-50 rounded border border-gray-500" v-model="newBook.currency"></label>
      <label>Description: <input class="m-2 p-2 bg-gray-50 rounded border border-gray-500" v-model="newBook.description"></label>
      <button class="m-2 bg-gray-400 text-white rounded px-5 py-2.5" @click="addBook">Add</button>
    </fieldset>
  </div>

  <div class="container">
    <BlogGallery />
  </div>

  <div class="container">
    <BookGallery />
  </div>

  <div class="container">
    <UserInput />
  </div>

  <div class="container">
    <PizzaItem />
  </div>

  <div class="container">
    <LifecycleHook />
  </div>

  <div class="container">
    <Composable />
  </div>

  <div class="container">
    <Movies />
  </div>
</template>
