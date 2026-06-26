<script setup>
import { useCart } from '@/composables/useCart'

const { state, setQty, remove, clear, total, formatPrice } = useCart()
</script>

<template>
  <div>
    <div style="background:#7c3aed;color:#fff;padding:30px 0;text-align:center;">
      <div class="container">
        <h1 style="font-size:28px;">Корзина</h1>
      </div>
    </div>

    <div style="padding:30px 0;">
      <div class="container">
        <div v-if="!state.items.length" style="text-align:center;padding:50px 0;color:#777;">
          <p style="font-size:18px;">Корзина пуста</p>
          <a href="/catalog" style="color:#667eea;">В каталог</a>
        </div>

        <div v-else>
          <div v-for="item in state.items" :key="item.slug" class="hover-up" style="background:#2a2a3e;border:1px solid #3a3a4e;border-radius:8px;padding:15px;margin-bottom:10px;display:flex;align-items:center;gap:15px;">
            <img :src="item.image" :alt="item.title" style="width:60px;height:80px;object-fit:cover;border-radius:4px;">
            <div style="flex:1;">
              <p style="font-weight:bold;color:#e0e0e0;">{{ item.title }}</p>
              <p style="font-size:13px;color:#aaa;">{{ formatPrice(item.price) }}</p>
            </div>
            <button @click="setQty(item.slug, item.qty - 1)" style="padding:4px 10px;background:#3a3a4e;border:1px solid #ddd;border-radius:4px;">-</button>
            <span style="font-weight:bold;">{{ item.qty }}</span>
            <button @click="setQty(item.slug, item.qty + 1)" style="padding:4px 10px;background:#3a3a4e;border:1px solid #ddd;border-radius:4px;">+</button>
            <span style="font-weight:bold;color:#667eea;min-width:80px;text-align:right;">{{ formatPrice(item.price * item.qty) }}</span>
            <button @click="remove(item.slug)" style="color:#e74c3c;background:none;border:none;font-size:20px;">x</button>
          </div>

          <div class="hover-up" style="background:#2a2a3e;border:1px solid #3a3a4e;border-radius:8px;padding:20px;text-align:right;margin-top:15px;">
            <span style="font-size:18px;">Итого: </span>
            <span style="font-size:22px;font-weight:bold;color:#667eea;">{{ formatPrice(total) }}</span>
          </div>

          <div style="text-align:right;margin-top:10px;">
            <button @click="clear" style="padding:8px 16px;background:#3a3a4e;border:1px solid #ddd;border-radius:6px;color:#aaa;">Очистить корзину</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
