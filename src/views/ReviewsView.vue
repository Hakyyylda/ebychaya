<script setup>
const reviews = [
  { name: 'Екатерина', text: 'Отличный магазин, хороший выбор игр.', rating: 5 },
  { name: 'Сергей', text: 'Купил Манчкин, очень доволен.', rating: 5 },
  { name: 'Анна', text: 'Хорошие цены, вежливый персонал.', rating: 4 },
  { name: 'Дмитрий', text: 'Играем всей семьей, спасибо за советы.', rating: 5 },
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
        <div v-for="review in reviews" :key="review.name" class="hover-up" style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:15px;margin-bottom:10px;">
          <p style="color:#f39c12;font-size:16px;">{{ '★'.repeat(review.rating)+'☆'.repeat(5-review.rating) }}</p>
          <p style="color:#555;font-style:italic;margin:5px 0;">{{ review.text }}</p>
          <p style="font-size:13px;color:#999;">— {{ review.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
