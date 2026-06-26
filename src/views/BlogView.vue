<script setup>
const posts = [
  { title: 'Как выбрать игру для компании', date: '10 июня 2026' },
  { title: 'Стратегии для победы в Каркассон', date: '2 июня 2026' },
  { title: 'Почему кооперативы объединяют', date: '25 мая 2026' },
  { title: 'Что взять на игротеку', date: '18 мая 2026' },
  { title: 'Обзор расширения для Манчкина', date: '10 мая 2026' },
  { title: 'Игры для детей 4-12 лет', date: '1 мая 2026' },
]
</script>

<template>
  <div>
    <div style="background:#7c3aed;color:#fff;padding:30px 0;text-align:center;">
      <div class="container">
        <h1 style="font-size:28px;">Блог</h1>
      </div>
    </div>

    <div style="padding:30px 0;">
      <div class="container">
        <div v-for="post in posts" :key="post.title" class="hover-up" style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:15px;margin-bottom:10px;">
          <h3 style="font-size:16px;">{{ post.title }}</h3>
          <p style="font-size:13px;color:#999;margin-top:5px;">{{ post.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
