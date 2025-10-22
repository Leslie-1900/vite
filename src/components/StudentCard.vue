<script setup lang="ts">
import type { Student } from '@/types'
defineProps<{
  student: Student
}>()
</script>

<template>
  <div class="student-card">
    <h3>{{ student.name }} {{ student.surname }}</h3>
    <p>GPA: {{ student.gpa }}</p>
  </div>
</template>

<style scoped>
.student-card {
  padding: 15px;
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}
.student-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>