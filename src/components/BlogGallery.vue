<script setup lang="ts">
import { reactive, ref } from "vue"
const searchTerm = ref("")
const blogs = reactive([
  {
    title: "Vue 3",
    description: "Vue 3 is awesome",
    author: "John Doe",
    isFavorite: false
  },
  {
    title: "Vue 2",
    description: "Vue 2 is awesome",
    author: "John Doe",
    isFavorite: false
  },
  {
    title: "Pinia state management",
    description: "Pinia is awesome",
    author: "Jane Smith",
    isFavorite: false
  },
  {
    title: "Vue Router",
    description: "Vue Router is awesome",
    author: "Jane smith",
    isFavorite: false
  },
  {
    title: "Testing with Playwright",
    description: "Playwright is awesome",
    author: "Minnie Mouse",
    isFavorite: false
  },
  {
    title: "Testing with Cypress",
    description: "Cypress is awesome",
    author: "Mickey Mouse",
    isFavorite: false
  },
])

const toggleFavorite = (index: number) => {
  blogs[index].isFavorite = !blogs[index].isFavorite
}
const getFilteredBlogs = () => {
  return blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.value.toLowerCase()))
}


</script>

<template>
  <label class="m-2">What are you searching for?
    <input type="text" v-model="searchTerm" placeholder="Search by blog's title" class="p-2 rounded bg-gray-50 border border-gray-500">
  </label>
  <ul class="grid grid-cols-3">
    <li v-for="(blog, index) in getFilteredBlogs()" :key="index">
      <article>
        <h3 class="text-2xl font-semibold">{{ blog.title }}</h3>
        <h4 class="text-xl font-medium">{{ blog.author }}</h4>
        <p>{{ blog.description }}</p>
        <button class="text-white rounded px-5 py-2.5" :class="[blog.isFavorite ? 'bg-green-400' : 'bg-gray-400']" @click="toggleFavorite(index)">{{ blog.isFavorite ? 'Remove from favorites' : 'Add to favorites' }}</button>
      </article>
    </li>
  </ul>
</template>