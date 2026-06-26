<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getGameBySlug } from '@/data/games'
import { useCart } from '@/composables/useCart'

const route = useRoute()
const router = useRouter()
const { add, formatPrice } = useCart()

const game = computed(() => getGameBySlug(route.params.slug))
</script>

<template>
  <div style="padding:30px 0;">
    <div class="container">
      <div v-if="!game" style="text-align:center;padding:40px;">
        <h2>Игра не найдена</h2>
        <button @click="router.push('/')" style="margin-top:10px;padding:10px 20px;background:#667eea;color:#fff;border:none;border-radius:6px;">На главную</button>
      </div>

      <div v-else>
        <a href="/catalog" style="color:#667eea;font-size:14px;">&larr; Назад в каталог</a>

        <div style="display:flex;gap:30px;margin-top:20px;">
          <img :src="game.image" :alt="game.alt" style="width:280px;height:380px;object-fit:cover;border-radius:8px;">
          <div style="flex:1;">
            <p style="color:#667eea;font-size:12px;text-transform:uppercase;letter-spacing:1px;">{{ game.category }}</p>
            <h1 style="font-size:28px;margin:5px 0;">{{ game.title }}</h1>
            <p style="color:#aaa;margin:10px 0 15px;">{{ game.short }}</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px;">
              <div><span style="font-size:12px;color:#777;">ИГРОКИ</span><br><strong>{{ game.players }}</strong></div>
              <div><span style="font-size:12px;color:#777;">ВРЕМЯ</span><br><strong>{{ game.time }}</strong></div>
              <div><span style="font-size:12px;color:#777;">ВОЗРАСТ</span><br><strong>{{ game.age }}</strong></div>
              <div><span style="font-size:12px;color:#777;">СЛОЖНОСТЬ</span><br><strong>{{ game.complexity }}</strong></div>
            </div>
            <div style="display:flex;align-items:center;gap:20px;">
              <span style="font-size:24px;font-weight:bold;color:#667eea;">{{ formatPrice(game.price) }}</span>
              <button @click="add(game)" class="hover-up" style="background:#667eea;color:#fff;border:none;padding:12px 25px;border-radius:6px;font-size:15px;">В корзину</button>
            </div>
          </div>
        </div>

        <div style="margin-top:40px;">
          <h2 style="font-size:20px;margin-bottom:10px;">Об игре</h2>
          <p style="color:#aaa;line-height:1.7;font-size:15px;">{{ game.description }}</p>
          <h3 style="font-size:16px;margin:20px 0 10px;">Механики</h3>
          <ul style="padding-left:20px;">
            <li v-for="m in game.mechanics" :key="m" style="margin:3px 0;color:#aaa;">{{ m }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
