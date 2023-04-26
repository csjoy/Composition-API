<script setup lang="ts">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';
const list = ref([
  "Apex Legends",
  "A Plague Tale: Innocence",
  "ART SQOOL",
  "Baba Is You",
  "Devil May Cry 5",
  "The Division 2",
  "Hypnospace Outlaw",
  "Katana ZERO",
  "testing unmounted hooks"
])
onMounted(() => {
  alert("mounted: DOM ready to use")
})
onBeforeMount(() => {
  alert("beforeMount: DOM not ready to use")
})
const deleteItem = (value: string) => {
  list.value = list.value.filter((item) => item !== value)
}
onUpdated(() => {
  alert("updated: virtual DOM will update after you click OK")
})
onBeforeUpdate(() => {
  alert("beforeUpdate: we know an update is about to happen, and have the data")
})
onUnmounted(() => {
  alert("unmounted: this component has been destroyed")
})
onBeforeUnmount(() => {
  alert("beforeUnmount: about to blow up this component")
})
</script>

<template>
  <h1 class="text-2xl fond-semibold">Vue Lifecycle hooks</h1>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      {{ item }}
      <button class="px-5 py-2.5 rounded bg-rose-500 text-white" @click="deleteItem(item)">Delete</button>
    </li>
  </ul>
</template>