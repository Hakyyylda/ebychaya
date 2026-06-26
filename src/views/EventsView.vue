<script setup>
const events = [
  { date: '12 июня', title: 'Турнир по Каркассон', time: '18:30' },
  { date: '14 июня', title: 'Вечер кооперативов', time: '19:00' },
  { date: '19 июня', title: 'Детский день', time: '12:00' },
  { date: '21 июня', title: 'Party games marathon', time: '17:00' },
]
</script>

<template>
  <div>
    <div style="background:#7c3aed;color:#fff;padding:30px 0;text-align:center;">
      <div class="container">
        <h1 style="font-size:28px;">События</h1>
      </div>
    </div>

    <div style="padding:30px 0;">
      <div class="container">
        <div v-for="event in events" :key="event.title" class="hover-up" style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:15px;margin-bottom:10px;">
          <p style="font-size:12px;color:#667eea;font-weight:bold;">{{ event.date }}</p>
          <h3 style="font-size:18px;margin:5px 0;">{{ event.title }}</h3>
          <p style="color:#888;">{{ event.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
