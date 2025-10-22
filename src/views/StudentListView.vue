<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { Student } from '@/types'
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService'

const students = ref<Student[]>([])

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      console.log('学生数据:', response.data)
      students.value = response.data
    })
    .catch((error) => {
      console.error('获取学生数据失败:', error)
      // 使用模拟数据作为fallback
      students.value = [
        {
          id: 1,
          name: '张三',
          surname: '张',
          gpa: 3.8
        },
        {
          id: 2,
          name: '李四',
          surname: '李', 
          gpa: 3.5
        },
        {
          id: 3,
          name: '王五',
          surname: '王',
          gpa: 3.9
        },
        {
          id: 4,
          name: '赵六',
          surname: '赵',
          gpa: 3.2
        }
      ]
    })
})
</script>

<template>
  <h1>Students List</h1>
  <div class="students">
    <StudentCard 
      v-for="student in students" 
      :key="student.id" 
      :student="student" 
    />
  </div>
</template>

<style scoped>
.students {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 20px;
}
</style>