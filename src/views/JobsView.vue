<script setup>
const jobs = [
  { title: 'Продавец-консультант', salary: 'от 60 000 руб.' },
  { title: 'Ведущий игротеки', salary: 'от 40 000 руб.' },
  { title: 'Менеджер по закупкам', salary: 'от 80 000 руб.' },
  { title: 'SMM-менеджер', salary: 'от 55 000 руб.' },
]
</script>

<template>
  <div>
    <div style="background:#7c3aed;color:#fff;padding:30px 0;text-align:center;">
      <div class="container">
        <h1 style="font-size:28px;">Вакансии</h1>
      </div>
    </div>

    <div style="padding:30px 0;">
      <div class="container">
        <div v-for="job in jobs" :key="job.title" class="hover-up" style="background:#2a2a3e;border:1px solid #3a3a4e;border-radius:8px;padding:15px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;">
          <h3 style="font-size:16px;">{{ job.title }}</h3>
          <span style="font-weight:bold;color:#667eea;">{{ job.salary }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
