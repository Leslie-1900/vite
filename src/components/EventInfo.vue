<script setup lang="ts">
import type { Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-info">
    <div class="info-item">{{ event.category }}</div>
    <div class="info-item">{{ event.organizer }}</div>
  </div>
</template>

<style scoped>
.event-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  margin-bottom: 18px;
}

.info-item {
  font-size: 14px;
  text-align: right;
  color: #666;
}
</style>