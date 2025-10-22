<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventInfo from '@/components/EventInfo.vue'
import type { Event } from '@/types'
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService'  // 16.2: 导入EventService

const events = ref<Event[]>([])

onMounted(() => {
  EventService.getEvents()  // 16.2: 使用EventService代替axios
    .then((response) => {
      console.log(response.data)
      events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <div v-for="event in events" :key="event.id" class="event-container">
      <EventInfo :event="event" />
      <EventCard :event="event" />
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}
</style>