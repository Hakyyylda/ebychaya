<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Icon from '@/components/ui/Icon.vue'
import { useCart } from '@/composables/useCart'

const { state, setQty, remove, clear, total, formatPrice } = useCart()

const orderPlaced = ref(false)
const placedTotal = ref(0)
const placedCount = ref(0)

const placeOrder = () => {
  placedTotal.value = total.value
  placedCount.value = state.items.reduce((s, i) => s + i.qty, 0)
  clear()
  orderPlaced.value = true
}
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Корзина</span>
        <h1 class="page-hero__title">Ваш заказ</h1>
        <p class="page-hero__text">
          Здесь лежат игры, которые вы отложили. Это демо-витрина — реальной оплаты нет.
        </p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div v-if="orderPlaced" class="cart-empty">
          <span class="cart-empty__icon"><Icon name="check" :size="36" /></span>
          <h2>Спасибо за «заказ»!</h2>
          <p>
            Это был тестовый заказ на {{ formatPrice(placedTotal) }} · {{ placedCount }} поз.
            В реальном магазине здесь была бы оплата и подтверждение на почту.
          </p>
          <RouterLink to="/catalog" class="btn btn-primary">К каталогу</RouterLink>
        </div>

        <div v-else-if="!state.items.length" class="cart-empty">
          <span class="cart-empty__icon"><Icon name="cart" :size="36" /></span>
          <h2>Пока пусто</h2>
          <p>Откройте каталог и добавьте пару игр — посмотрим, как работает корзина.</p>
          <RouterLink to="/catalog" class="btn btn-primary">В каталог</RouterLink>
        </div>

        <div v-else class="cart">
          <ul class="cart__list">
            <li v-for="item in state.items" :key="item.slug" class="cart__item">
              <span class="cart__cover">
                <img :src="item.image" :alt="item.title">
              </span>
              <div class="cart__info">
                <RouterLink :to="`/game/${item.slug}`" class="cart__title">
                  {{ item.title }}
                </RouterLink>
                <span class="cart__price-one">{{ formatPrice(item.price) }} / шт.</span>
              </div>
              <div class="cart__qty">
                <button
                  class="cart__qty-btn"
                  aria-label="Убрать одну"
                  @click="setQty(item.slug, item.qty - 1)"
                >
                  <Icon name="minus" :size="16" />
                </button>
                <span class="cart__qty-value">{{ item.qty }}</span>
                <button
                  class="cart__qty-btn"
                  aria-label="Добавить ещё"
                  @click="setQty(item.slug, item.qty + 1)"
                >
                  <Icon name="plus" :size="16" />
                </button>
              </div>
              <div class="cart__sum">{{ formatPrice(item.price * item.qty) }}</div>
              <button
                class="cart__remove"
                aria-label="Удалить из корзины"
                @click="remove(item.slug)"
              >
                <Icon name="trash" :size="18" />
              </button>
            </li>
          </ul>

          <aside class="cart__summary">
            <h2>Итого</h2>
            <div class="cart__summary-row">
              <span>Позиций</span>
              <span>{{ state.items.length }}</span>
            </div>
            <div class="cart__summary-row">
              <span>Штук</span>
              <span>{{ state.items.reduce((s, i) => s + i.qty, 0) }}</span>
            </div>
            <div class="cart__summary-row cart__summary-row--total">
              <span>К оплате</span>
              <span>{{ formatPrice(total) }}</span>
            </div>
            <button class="btn btn-primary cart__checkout" @click="placeOrder">
              Оформить заказ
            </button>
            <button class="cart__clear" @click="clear">Очистить корзину</button>
            <p class="cart__demo">
              Демо-режим: оплата не списывается, заказ никуда не отправляется.
            </p>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding-block: 3.5rem 2.5rem;
  background: var(--color-bg-soft);
}
.page-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--color-cream);
}
.page-hero__text {
  margin-top: 0.75rem;
  max-width: 560px;
  color: var(--color-text-muted);
}
.page-content {
  padding-block: 2.5rem 5rem;
}

.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  padding: 4rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px dashed var(--color-border);
  background: var(--color-bg-soft);
}
.cart-empty__icon {
  display: inline-grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-accent);
}
.cart-empty h2 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--color-cream);
}
.cart-empty p {
  max-width: 420px;
  color: var(--color-text-muted);
}

.cart {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 2rem;
  align-items: start;
}

.cart__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cart__item {
  display: grid;
  grid-template-columns: 80px 1fr auto auto auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
}

.cart__cover {
  width: 80px;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: var(--radius-sm);
  background: var(--color-surface);
}
.cart__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cart__info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}
.cart__title {
  font-weight: 600;
  color: var(--color-cream);
  transition: color 0.2s;
}
.cart__title:hover {
  color: var(--color-accent);
}
.cart__price-one {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.cart__qty {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}
.cart__qty-btn {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  color: var(--color-cream);
  transition: background 0.2s;
}
.cart__qty-btn:hover {
  background: var(--color-bg-soft);
}
.cart__qty-value {
  min-width: 1.5rem;
  text-align: center;
  font-weight: 600;
  color: var(--color-cream);
}

.cart__sum {
  min-width: 90px;
  text-align: right;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--color-cream);
}

.cart__remove {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: var(--color-text-muted);
  transition: color 0.2s, background 0.2s;
}
.cart__remove:hover {
  color: #e88894;
  background: var(--color-red-soft);
}

.cart__summary {
  position: sticky;
  top: calc(var(--header-height) + 1rem);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
}
.cart__summary h2 {
  margin-bottom: 1rem;
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--color-cream);
}
.cart__summary-row {
  display: flex;
  justify-content: space-between;
  padding-block: 0.5rem;
  color: var(--color-text-muted);
}
.cart__summary-row--total {
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  font-size: 1.15rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--color-cream);
}
.cart__summary-row--total span:last-child {
  color: var(--color-accent);
}
.cart__checkout {
  width: 100%;
  margin-top: 1.25rem;
}
.cart__clear {
  display: block;
  margin: 0.75rem auto 0;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s;
}
.cart__clear:hover {
  color: #e88894;
}
.cart__demo {
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  text-align: center;
}

@media (max-width: 860px) {
  .cart {
    grid-template-columns: 1fr;
  }
  .cart__item {
    grid-template-columns: 64px 1fr auto;
    grid-template-areas:
      'cover info remove'
      'cover qty  sum';
    gap: 0.75rem;
  }
  .cart__cover { grid-area: cover; width: 64px; }
  .cart__info { grid-area: info; }
  .cart__qty { grid-area: qty; justify-self: start; }
  .cart__sum { grid-area: sum; min-width: 0; }
  .cart__remove { grid-area: remove; }
}
</style>
