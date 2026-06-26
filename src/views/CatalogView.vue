<script setup>
import { ref, computed } from 'vue'
import { games } from '@/data/games'
import { useCart } from '@/composables/useCart'

const { add, state, formatPrice } = useCart()

const isInCart = (slug) => state.items.some((i) => i.slug === slug)
const query = ref('')

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return games
  return games.filter(g => g.title.toLowerCase().includes(q) || g.short.toLowerCase().includes(q))
})
</script>

<template>
  <div>
    <div style="background:#7c3aed;color:#fff;padding:30px 0;text-align:center;">
      <div class="container">
        <h1 style="font-size:28px;margin-bottom:10px;">Каталог</h1>
        <input v-model="query" type="text" placeholder="Поиск..." style="padding:10px 15px;border:none;border-radius:6px;width:300px;font-size:14px;background:#2a2a3e;color:#e0e0e0;">
        <p style="margin-top:8px;font-size:13px;opacity:0.8;">Найдено: {{ filtered.length }}</p>
      </div>
    </div>

    <div style="padding:30px 0;">
      <div class="container">
        <div v-for="game in filtered" :key="game.slug" class="hover-up" style="background:#2a2a3e;border:1px solid #3a3a4e;border-radius:8px;padding:15px;margin-bottom:15px;display:flex;gap:15px;">
          <img :src="game.image" :alt="game.alt" style="width:100px;height:140px;object-fit:cover;border-radius:4px;">
          <div style="flex:1;">
            <a :href="'/game/'+game.slug" style="font-size:18px;font-weight:bold;color:#e0e0e0;text-decoration:none;">{{ game.title }}</a>
            <p style="color:#aaa;font-size:13px;margin:5px 0;">{{ game.category }} · {{ game.players }} игроков · {{ game.time }}</p>
            <p style="color:#aaa;font-size:14px;">{{ game.short }}</p>
            <div style="margin-top:10px;display:flex;align-items:center;gap:15px;">
              <span style="font-size:18px;font-weight:bold;color:#667eea;">{{ formatPrice(game.price) }}</span>
              <button v-if="!isInCart(game.slug)" @click="add(game)" class="hover-up" style="background:#667eea;color:#fff;border:none;padding:8px 18px;border-radius:6px;font-size:14px;">В корзину</button>
              <span v-else style="color:#777;font-size:14px;">В корзине</span>
            </div>
          </div>
        </div>
        <p v-if="!filtered.length" style="text-align:center;color:#777;padding:30px;">Ничего не найдено.</p>
      </div>
    </div>
  </div>
</template>
