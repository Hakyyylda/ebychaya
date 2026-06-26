<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useCart } from '@/composables/useCart'

const route = useRoute()
const { count } = useCart()
</script>

<template>
  <div style="background:#7c3aed;padding:12px 0;position:sticky;top:0;z-index:10;">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;">
      <RouterLink to="/" style="font-size:20px;font-weight:bold;color:#fff;text-decoration:none;">games&quarrels</RouterLink>
      <div style="display:flex;gap:6px;align-items:center;">
        <RouterLink to="/" :style="{color:'#fff',padding:'6px 12px',borderRadius:'6px',fontSize:'14px',textDecoration:'none',background:route.name==='home'?'rgba(255,255,255,0.2)':'transparent'}">Главная</RouterLink>
        <RouterLink to="/catalog" :style="{color:'#fff',padding:'6px 12px',borderRadius:'6px',fontSize:'14px',textDecoration:'none',background:route.name==='catalog'?'rgba(255,255,255,0.2)':'transparent'}">Каталог</RouterLink>
        <RouterLink to="/reviews" :style="{color:'#fff',padding:'6px 12px',borderRadius:'6px',fontSize:'14px',textDecoration:'none',background:route.name==='reviews'?'rgba(255,255,255,0.2)':'transparent'}">Отзывы</RouterLink>
        <RouterLink to="/blog" :style="{color:'#fff',padding:'6px 12px',borderRadius:'6px',fontSize:'14px',textDecoration:'none',background:route.name==='blog'?'rgba(255,255,255,0.2)':'transparent'}">Блог</RouterLink>
        <RouterLink to="/events" :style="{color:'#fff',padding:'6px 12px',borderRadius:'6px',fontSize:'14px',textDecoration:'none',background:route.name==='events'?'rgba(255,255,255,0.2)':'transparent'}">События</RouterLink>
        <RouterLink to="/about" :style="{color:'#fff',padding:'6px 12px',borderRadius:'6px',fontSize:'14px',textDecoration:'none',background:route.name==='about'?'rgba(255,255,255,0.2)':'transparent'}">О нас</RouterLink>
        <RouterLink to="/promo" :style="{color:'#fff',padding:'6px 12px',borderRadius:'6px',fontSize:'14px',textDecoration:'none',background:route.name==='promo'?'rgba(255,255,255,0.2)':'transparent'}">Акции</RouterLink>
        <RouterLink to="/delivery" :style="{color:'#fff',padding:'6px 12px',borderRadius:'6px',fontSize:'14px',textDecoration:'none',background:route.name==='delivery'?'rgba(255,255,255,0.2)':'transparent'}">Доставка</RouterLink>
        <RouterLink to="/faq" :style="{color:'#fff',padding:'6px 12px',borderRadius:'6px',fontSize:'14px',textDecoration:'none',background:route.name==='faq'?'rgba(255,255,255,0.2)':'transparent'}">FAQ</RouterLink>
        <RouterLink to="/cart" style="background:#fff;color:#667eea;padding:6px 14px;border-radius:6px;font-size:14px;font-weight:bold;text-decoration:none;">Корзина{{ count ? ' ('+count+')' : '' }}</RouterLink>
      </div>
    </div>
  </div>
</template>
