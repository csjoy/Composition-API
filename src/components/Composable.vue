<script setup lang="ts">
import { useMessages } from '../composables/useMessages';

const { messages, deleteMessage, addMessage } = useMessages()
</script>

<template>
  <button class="px-5 py-2.5 rounded bg-gray-400 text-white" @click="addMessage('test message')">Add new message</button>

  <ul>
    <li v-for="(message, index) in messages" :key="index">
      {{ message }}
      <button class="px-5 py-2.5 rounded bg-rose-500 " @click="deleteMessage(message)">Delete</button>
    </li>
  </ul>
</template>

