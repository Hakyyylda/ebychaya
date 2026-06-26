<script setup>
import { games } from '@/data/games'
import { useCart } from '@/composables/useCart'

const { add, state, formatPrice } = useCart()

const isInCart = (slug) => state.items.some((i) => i.slug === slug)
</script>

<template>
  <div>
    <div style="background:#7c3aed;color:#fff;padding:50px 0;text-align:center;">
      <div class="container">
        <h1 style="font-size:34px;margin-bottom:10px;">Играй, спорь и побеждай</h1>
        <p style="font-size:16px;opacity:0.9;max-width:500px;margin:0 auto 25px;">games&quarrels — магазин настольных игр, где каждый вечер превращается в новую партию.</p>
        <a href="/catalog" class="hover-up" style="background:#fff;color:#667eea;padding:12px 30px;border-radius:6px;font-weight:bold;text-decoration:none;margin-right:10px;">Смотреть каталог</a>
        <a href="/about" class="hover-up" style="background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.5);padding:12px 30px;border-radius:6px;text-decoration:none;">О нас</a>
      </div>
    </div>

    <div style="padding:30px 0;">
      <div class="container">
        <h2 style="font-size:22px;margin-bottom:20px;">Популярные игры</h2>

        <div v-for="game in games" :key="game.slug" class="hover-up" style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:15px;margin-bottom:15px;display:flex;gap:15px;">
          <img :src="game.image" :alt="game.alt" style="width:100px;height:140px;object-fit:cover;border-radius:4px;">
          <div style="flex:1;">
            <a :href="'/game/'+game.slug" style="font-size:18px;font-weight:bold;color:#333;text-decoration:none;">{{ game.title }}</a>
            <p style="color:#888;font-size:13px;margin:5px 0;">{{ game.category }} · {{ game.players }} игроков · {{ game.time }}</p>
            <p style="color:#666;font-size:14px;">{{ game.short }}</p>
            <div style="margin-top:10px;display:flex;align-items:center;gap:15px;">
              <span style="font-size:18px;font-weight:bold;color:#667eea;">{{ formatPrice(game.price) }}</span>
              <button v-if="!isInCart(game.slug)" @click="add(game)" class="hover-up" style="background:#667eea;color:#fff;border:none;padding:8px 18px;border-radius:6px;font-size:14px;">В корзину</button>
              <span v-else style="color:#999;font-size:14px;">В корзине</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
