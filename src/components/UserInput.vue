<script setup lang="ts">
import { computed, reactive, ref } from "vue"
const firstName = ref("")
const lastName = ref("")
const languages = reactive<string[]>([])
const addToLanguageList = (event: any) => {
  if (!event.target.value) return
  languages.push(event.target.value)
  event.target.value = ""
}
const fullName = computed(() => `${firstName.value} ${lastName.value}`)
const numberOfLanguages = computed(() => languages.length)
</script>

<template>
  <input type="text" v-model="firstName" placeholder="First name" class="p-2 bg-gray-50 border border-gray-500">
  <input type="text" v-model="lastName" placeholder="Last name" class="p-2 bg-gray-50 border border-gray-500">
  <input type="text" placeholder="Add a language" class="p-2 bg-gray-50 border border-gray-500" @keyup.enter="addToLanguageList">
  <h3>{{ fullName }}</h3>
  <p>Languages({{ numberOfLanguages }}): {{ languages.toString() }}</p>
</template>