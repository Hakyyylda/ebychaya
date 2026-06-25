<script setup>
import { RouterLink, useRoute } from 'vue-router'
import Icon from '@/components/ui/Icon.vue'
import { useCart } from '@/composables/useCart'

const route = useRoute()
const { count } = useCart()

const links = [
  { name: 'home', label: 'Главная', to: '/' },
  { name: 'catalog', label: 'Каталог', to: '/catalog' },
  { name: 'reviews', label: 'Отзывы', to: '/reviews' },
  { name: 'blog', label: 'Блог', to: '/blog' },
  { name: 'events', label: 'События', to: '/events' },
  { name: 'jobs', label: 'Вакансии', to: '/jobs' },
  { name: 'about', label: 'О нас', to: '/about' },
]
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <RouterLink to="/" class="logo">
        <span class="logo__mark"><Icon name="dice" :size="22" /></span>
        <span class="logo__text">
          games<span class="logo__amp">&</span>quarrels
        </span>
      </RouterLink>

      <nav class="nav">
        <RouterLink
          v-for="link in links"
          :key="link.name"
          :to="link.to"
          class="nav__link"
          :class="{ 'nav__link--active': route.name === link.name }"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <RouterLink to="/catalog" class="btn btn-outline header__cta">
        В каталог
      </RouterLink>

      <RouterLink to="/cart" class="header__cart" aria-label="Корзина">
        <span class="header__cart-label">Корзина</span>
        <span v-if="count" class="header__cart-badge">{{ count }}</span>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
  border-bottom: 1px solid var(--color-border);
  background: rgba(24, 18, 16, 0.88);
  backdrop-filter: blur(12px);
}

.header__inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-shrink: 0;
}

.logo__mark {
  font-size: 1.4rem;
}

.logo__text {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-cream);
  letter-spacing: -0.02em;
}

.logo__amp {
  color: var(--color-accent);
}

.nav {
  display: flex;
  gap: 0.25rem;
  margin-left: auto;
}

.nav__link {
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color 0.2s, background 0.2s;
}

.nav__link:hover,
.nav__link--active {
  color: var(--color-cream);
  background: var(--color-surface);
}

.header__cta {
  flex-shrink: 0;
  padding-inline: 1.25rem;
  font-size: 0.9rem;
}

.header__cart {
  position: relative;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  height: 42px;
  padding: 0 1rem 0 0.9rem;
  border-radius: 999px;
  color: #1a1208;
  border: 1px solid var(--color-accent);
  background: var(--color-accent);
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.2s, transform 0.2s;
}
.header__cart:hover {
  background: var(--color-accent-hover);
  transform: translateY(-1px);
}
.header__cart-label {
  line-height: 1;
}
.header__cart-badge {
  display: inline-grid;
  place-items: center;
  min-width: 22px;
  height: 22px;
  padding: 0 0.45rem;
  border-radius: 999px;
  background: var(--color-accent);
  color: #1a1208;
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1;
}

@media (max-width: 860px) {
  .nav {
    display: none;
  }
}

@media (max-width: 480px) {
  .header__cta {
    display: none;
  }
  .header__cart-label {
    display: none;
  }
  .header__cart {
    width: 38px;
    height: 38px;
    padding: 0;
    justify-content: center;
  }
}
</style>
