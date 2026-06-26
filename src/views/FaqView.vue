<script setup>
const faq = [
  { q: 'Можно ли вернуть игру?', a: 'Да, в течение 14 дней, если товар не вскрыт.' },
  { q: 'Как записаться на игротеку?', a: 'Через страницу События или по телефону.' },
  { q: 'Есть ли подарочные сертификаты?', a: 'Да, на любую сумму. Можно приобрести в магазине.' },
  { q: 'Проводите ли вы мастер-классы?', a: 'Да, каждую субботу в 15:00. Вход свободный.' },
  { q: 'Сколько длится доставка?', a: 'По Москве 1-2 дня, по России 3-7 дней.' },
  { q: 'Как узнать о новинках?', a: 'Подпишитесь на наш Telegram или Instagram.' },
  { q: 'Работаете ли вы с юрлицами?', a: 'Да, предоставляем закрывающие документы.' },
  { q: 'Можно ли забронировать игру?', a: 'Да, бронь действует 24 часа.' },
  { q: 'Есть ли скидки для именинников?', a: 'Да, скидка 10% в день рождения.' },
  { q: 'Какие игры подойдут для двоих?', a: 'Посмотрите раздел «Стратегии» — там много игр на 2 игроков.' },
]
</script>

<template>
  <div>
    <div style="background:#7c3aed;color:#fff;padding:30px 0;text-align:center;">
      <div class="container">
        <h1 style="font-size:28px;">Частые вопросы</h1>
      </div>
    </div>

    <div style="padding:30px 0;">
      <div class="container" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:15px;">
        <div v-for="(item, i) in faq" :key="i" class="hover-up" style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:15px;">
          <h3 style="font-size:16px;color:#7c3aed;">{{ item.q }}</h3>
          <p style="color:#666;margin-top:5px;">{{ item.a }}</p>
        </div>
    </div>
  </div>
</div>
</template>
