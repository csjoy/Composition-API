<script setup lang="ts">
import { computed, reactive, ref } from "vue"

const searchBook = ref("vue")
const filteredBooks = computed(() => books.filter(book => book.title.toLowerCase().includes(searchBook.value)))

const books = reactive([
  {
    title: "Vue 3",
    description: "Vue 3 is awesome",
  },
  {
    title: "Vue 2",
    description: "Vue 2 is awesome",
  },
  {
    title: "Pinia state management",
    description: "Pinia is awesome",
  },
  {
    title: "Vue Router",
    description: "Vue Router is awesome",
  },
  {
    title: "Testing with Playwright",
    description: "Playwright is awesome",
  },
  {
    title: "Testing with Cypress",
    description: "Cypress is awesome",
  },
])



</script>

<template>
  <label class="m-2">What are you searching for?
    <input type="text" v-model="searchBook" placeholder="Search by book's title" class="p-2 rounded bg-gray-50 border border-gray-500">
  </label>
  <ul class="grid grid-cols-3">
    <li v-for="(blog, index) in filteredBooks" :key="index">
      <article>
        <h3 class="text-2xl font-semibold">{{ blog.title }}</h3>
        <p>{{ blog.description }}</p>
      </article>
    </li>
  </ul>
</template>