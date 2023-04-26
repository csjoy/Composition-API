<script setup lang="ts">
import { useMovies } from '../composables/useMovies';
import { useSearch } from '../composables/useSearch';
const { movies, error, isLoading } = useMovies()
const { searchTerm, filteredItems } = useSearch(movies)
</script>

<template>
  <h1 class="text-2xl font-semibold">Movies</h1>
  <div>
    <label>Search:
      <input class="p-2 bg-gray-100 border border-gray-500" type="text" v-model="searchTerm">
    </label>
  </div>
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>
  <div v-else-if="error">
    <p>{{ error }}</p>
  </div>
  <div v-else>
    <ul>
      <li v-for="(movie, index) in filteredItems" :key="index">
        <article>
          <h3 class="text-xl font-medium">{{ movie.title }}</h3>
          <h4 class="text-lg">Released on: {{ movie.release_date }}</h4>
          <h5>Directed by: {{ movie.director }}</h5>
          <p>{{ movie.opening_crawl }}</p>
        </article>
      </li>
    </ul>
  </div>
</template>