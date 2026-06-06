<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Icon from '@/components/ui/Icon.vue'
import { games } from '@/data/games'
import { useCart } from '@/composables/useCart'

const { add, state, formatPrice } = useCart()

const isInCart = (slug) => state.items.some((i) => i.slug === slug)

const categories = [
  { name: 'Стратегии', count: 120, icon: 'pawn' },
  { name: 'Party & вечеринки', count: 95, icon: 'party' },
  { name: 'Кооперативы', count: 68, icon: 'handshake' },
  { name: 'Семейные', count: 140, icon: 'family' },
  { name: 'Карточные', count: 85, icon: 'cards' },
  { name: 'Дополнения', count: 200, icon: 'package' },
]

const query = ref('')
const activeCategory = ref('Все')

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return games.filter((g) => {
    const matchText =
      !q ||
      g.title.toLowerCase().includes(q) ||
      g.short.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q)
    return matchText
  })
})

const quickAdd = (e, game) => {
  e.preventDefault()
  e.stopPropagation()
  add(game)
}
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Каталог</span>
        <h1 class="page-hero__title">Настольные игры</h1>
        <p class="page-hero__text">
          Полный каталог магазина: фильтры по жанру, поиск и подробные карточки с описанием механик.
        </p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="catalog-toolbar">
          <label class="catalog-search">
            <Icon name="spy" :size="18" />
            <input
              v-model="query"
              type="search"
              placeholder="Поиск по названию или описанию…"
            >
          </label>
          <span class="catalog-count">Найдено: {{ filtered.length }}</span>
        </div>

        <h2 class="section-title" style="margin-top: 3rem;">Категории</h2>
        <div class="category-grid">
          <article v-for="cat in categories" :key="cat.name" class="category-card">
            <span class="category-card__icon"><Icon :name="cat.icon" :size="28" /></span>
            <h3>{{ cat.name }}</h3>
            <p>{{ cat.count }} позиций</p>
          </article>
        </div>

        <h2 class="section-title" style="margin-top: 3.5rem;">Все игры</h2>
        <div v-if="!filtered.length" class="catalog-empty">
          <span class="catalog-empty__icon"><Icon name="spy" :size="28" /></span>
          <p>По запросу «{{ query }}» ничего не нашлось. Попробуйте другое слово.</p>
        </div>
        <div v-else class="catalog-grid">
          <RouterLink
            v-for="game in filtered"
            :key="game.slug"
            :to="`/game/${game.slug}`"
            class="game-card"
          >
            <div class="game-card__cover">
              <img :src="game.image" :alt="game.alt" loading="lazy">
              <button
                class="game-card__add"
                :class="{ 'game-card__add--in': isInCart(game.slug) }"
                :aria-label="isInCart(game.slug) ? 'Уже в корзине' : 'Добавить в корзину'"
                @click="(e) => quickAdd(e, game)"
              >
                <span>{{ isInCart(game.slug) ? 'В корзине' : 'В корзину' }}</span>
              </button>
            </div>
            <span class="game-card__badge">{{ game.badge }}</span>
            <h3>{{ game.title }}</h3>
            <p class="game-card__meta">{{ game.category }} · {{ game.players }} игроков · {{ game.time }}</p>
            <p class="game-card__short">{{ game.short }}</p>
            <div class="game-card__footer">
              <span class="game-card__price">
                {{ formatPrice(game.price) }}
                <span v-if="isInCart(game.slug)" class="game-card__incart">В корзине</span>
              </span>
              <span class="game-card__link">Подробнее →</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding-block: 3.5rem 2.5rem;
  background:
    radial-gradient(ellipse 60% 80% at 80% 0%, rgba(212, 160, 66, 0.12), transparent),
    var(--color-bg-soft);
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

.catalog-toolbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.catalog-search {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  flex: 1 1 280px;
  max-width: 480px;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
  color: var(--color-text-muted);
}
.catalog-search:focus-within {
  border-color: var(--color-accent);
}
.catalog-search input {
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--color-cream);
  font: inherit;
  font-size: 0.95rem;
}
.catalog-search input::placeholder {
  color: var(--color-text-muted);
}

.catalog-count {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
}

.category-card {
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
  transition: border-color 0.2s, transform 0.2s;
  cursor: default;
}
.category-card:hover {
  border-color: rgba(212, 160, 66, 0.35);
  transform: translateY(-2px);
}
.category-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--color-surface);
  color: var(--color-accent);
}
.category-card h3 {
  margin-top: 0.75rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--color-cream);
}
.category-card p {
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.catalog-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 3rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px dashed var(--color-border);
  background: var(--color-bg-soft);
  text-align: center;
  color: var(--color-text-muted);
}
.catalog-empty__icon {
  display: inline-grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-accent);
}

.game-card {
  position: relative;
  display: block;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
  transition: transform 0.2s, border-color 0.2s;
  color: inherit;
}
.game-card:hover {
  transform: translateY(-4px);
  border-color: rgba(212, 160, 66, 0.4);
}

.game-card__cover {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  margin-bottom: 1rem;
  border-radius: var(--radius-sm);
  background: var(--color-surface);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}
.game-card__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.game-card:hover .game-card__cover img {
  transform: scale(1.04);
}

.game-card__add {
  position: absolute;
  bottom: 0.7rem;
  right: 0.7rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  height: 38px;
  padding: 0 0.95rem 0 0.8rem;
  border-radius: 999px;
  background: rgba(24, 18, 16, 0.85);
  color: var(--color-cream);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.2s, color 0.2s, transform 0.2s, border-color 0.2s;
}
.game-card__add:hover {
  background: var(--color-accent);
  color: #1a1208;
  border-color: transparent;
  transform: translateY(-1px);
}

.game-card__add--in {
  background: var(--color-accent);
  color: #1a1208;
  border-color: transparent;
}
.game-card__add--in:hover {
  background: rgba(24, 18, 16, 0.85);
  color: var(--color-cream);
  border-color: rgba(255, 255, 255, 0.08);
}

.game-card__badge {
  display: inline-block;
  margin-bottom: 0.5rem;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: var(--color-red-soft);
  color: #e88894;
  font-size: 0.7rem;
  font-weight: 600;
}
.game-card h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--color-cream);
}
.game-card__meta {
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
.game-card__short {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  line-height: 1.45;
  color: var(--color-text-muted);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.game-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}
.game-card__price {
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--color-accent);
}
.game-card__link {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  transition: color 0.2s;
}
.game-card:hover .game-card__link {
  color: var(--color-accent);
}

.game-card__incart {
  display: inline-flex;
  align-items: center;
  margin-left: 0.4rem;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  background: var(--color-accent);
  color: #1a1208;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  vertical-align: middle;
}

@media (max-width: 1024px) {
  .catalog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .category-grid,
  .catalog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
