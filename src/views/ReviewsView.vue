<script setup>
const reviews = [
  { name: 'Екатерина', text: 'Отличный магазин, хороший выбор игр.', rating: 5 },
  { name: 'Сергей', text: 'Купил Манчкин, очень доволен.', rating: 5 },
  { name: 'Анна', text: 'Хорошие цены, вежливый персонал.', rating: 4 },
  { name: 'Дмитрий', text: 'Играем всей семьей, спасибо за советы.', rating: 5 },
  { name: 'Ольга', text: 'Заказали Каркассон, привезли быстро. Спасибо!', rating: 5 },
  { name: 'Иван', text: 'Хороший магазин, но хотелось бы больше редких игр.', rating: 4 },
  { name: 'Мария', text: 'Были на игротеке, очень понравилось. Придем еще!', rating: 5 },
  { name: 'Алексей', text: 'Посоветовали игру для компании, не прогадал.', rating: 5 },
  { name: 'Наталья', text: 'Удобно что можно прийти и поиграть перед покупкой.', rating: 4 },
  { name: 'Павел', text: 'Купил Пандемию, уже сыграли 5 партий за выходные.', rating: 5 },
  { name: 'Виктория', text: 'Отличное место для любителей настолок. Рекомендую.', rating: 5 },
  { name: 'Артем', text: 'Хороший ассортимент, вежливые консультанты.', rating: 4 },
]
</script>

<template>
  <div>
    <div style="background:#7c3aed;color:#fff;padding:30px 0;text-align:center;">
      <div class="container">
        <h1 style="font-size:28px;">Отзывы</h1>
      </div>
    </div>

    <div style="padding:30px 0;">
      <div class="container">
        <div v-for="review in reviews" :key="review.name" class="hover-up" style="background:#2a2a3e;border:1px solid #3a3a4e;border-radius:8px;padding:15px;margin-bottom:10px;">
          <p style="color:#f39c12;font-size:16px;">{{ '★'.repeat(review.rating)+'☆'.repeat(5-review.rating) }}</p>
          <p style="color:#aaa;font-style:italic;margin:5px 0;">{{ review.text }}</p>
          <p style="font-size:13px;color:#777;">— {{ review.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
