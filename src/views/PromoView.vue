<script setup>
import { games } from '@/data/games'
import { useCart } from '@/composables/useCart'

const { add, state, formatPrice } = useCart()
const isInCart = (slug) => state.items.some((i) => i.slug === slug)

const promos = [
  { game: games[0], oldPrice: 3500 },
  { game: games[1], oldPrice: 2700 },
]
</script>

<template>
  <div>
    <div style="background:#7c3aed;color:#fff;padding:30px 0;text-align:center;">
      <div class="container">
        <h1 style="font-size:28px;">Акции</h1>
      </div>
    </div>

    <div style="padding:30px 0;">
      <div class="container" style="display:flex;gap:20px;justify-content:center;">
        <div v-for="p in promos" :key="p.game.slug" class="hover-up" style="background:#2a2a3e;border:1px solid #3a3a4e;border-radius:8px;padding:15px;width:300px;">
          <img :src="p.game.image" :alt="p.game.alt" style="width:100%;height:200px;object-fit:cover;border-radius:4px;margin-bottom:10px;">
          <h3 style="font-size:17px;">{{ p.game.title }}</h3>
          <p style="font-size:13px;color:#777;text-decoration:line-through;">{{ formatPrice(p.oldPrice) }}</p>
          <p style="font-weight:bold;font-size:20px;color:#7c3aed;">Цена сегодня: {{ formatPrice(p.game.price) }}</p>
          <button v-if="!isInCart(p.game.slug)" @click="add(p.game)" class="hover-up" style="margin-top:8px;background:#7c3aed;color:#fff;border:none;padding:8px 20px;border-radius:6px;">Купить</button>
          <span v-else style="color:#777;">В корзине</span>
        </div>
      </div>
    </div>
  </div>
</template>
