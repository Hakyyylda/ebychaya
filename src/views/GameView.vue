<script setup>
import { computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import Icon from '@/components/ui/Icon.vue'
import { getGameBySlug, games } from '@/data/games'
import { useCart } from '@/composables/useCart'

const route = useRoute()
const router = useRouter()
const { add, formatPrice } = useCart()

const game = computed(() => getGameBySlug(route.params.slug))
const others = computed(() => games.filter((g) => g.slug !== route.params.slug).slice(0, 3))

const handleAdd = () => {
  if (game.value) add(game.value)
}

const goHome = () => router.push('/')
</script>

<template>
  <div v-if="!game" class="page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Ошибка</span>
        <h1 class="page-hero__title">Игра не найдена</h1>
        <p class="page-hero__text">
          Похоже, такой страницы нет — может, ссылка устарела. Вернитесь в каталог.
        </p>
        <button class="btn btn-primary" @click="goHome">На главную</button>
      </div>
    </section>
  </div>

  <div v-else class="page">
    <section class="game">
      <div class="container">
        <RouterLink to="/catalog" class="game__back">
          <Icon name="arrow-left" :size="18" />
          Назад в каталог
        </RouterLink>

        <div class="game__layout">
          <div class="game__cover">
            <img :src="game.image" :alt="game.alt">
            <span class="game__badge">{{ game.badge }}</span>
          </div>

          <div class="game__info">
            <span class="section-label">{{ game.category }}</span>
            <h1 class="game__title">{{ game.title }}</h1>

            <p class="game__short">{{ game.short }}</p>

            <dl class="game__specs">
              <div>
                <dt>Игроки</dt>
                <dd>{{ game.players }}</dd>
              </div>
              <div>
                <dt>Время партии</dt>
                <dd>{{ game.time }}</dd>
              </div>
              <div>
                <dt>Возраст</dt>
                <dd>{{ game.age }}</dd>
              </div>
              <div>
                <dt>Сложность</dt>
                <dd>{{ game.complexity }}</dd>
              </div>
            </dl>

            <div class="game__purchase">
              <div class="game__price">{{ formatPrice(game.price) }}</div>
              <button class="btn btn-primary game__buy" @click="handleAdd">
                <Icon name="cart" :size="18" />
                В корзину
              </button>
            </div>
            <p class="game__note">
              Добавим в корзину — оформите заказ на странице оформления.
            </p>
          </div>
        </div>

        <div class="game__details">
          <h2 class="section-title">Об игре</h2>
          <p class="game__description">{{ game.description }}</p>

          <h3 class="game__mechanics-title">Основные механики</h3>
          <ul class="game__mechanics">
            <li v-for="m in game.mechanics" :key="m">{{ m }}</li>
          </ul>
        </div>

        <div v-if="others.length" class="game__other">
          <h2 class="section-title">Похожие игры</h2>
          <div class="game__other-grid">
            <RouterLink
              v-for="g in others"
              :key="g.slug"
              :to="`/game/${g.slug}`"
              class="game-mini"
            >
              <span class="game-mini__cover">
                <img :src="g.image" :alt="g.alt" loading="lazy">
              </span>
              <span class="game-mini__title">{{ g.title }}</span>
              <span class="game-mini__price">{{ formatPrice(g.price) }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--color-cream);
}
.page-hero__text {
  margin-top: 0.75rem;
  margin-bottom: 1.5rem;
  max-width: 560px;
  color: var(--color-text-muted);
}

.game {
  padding-block: 2.5rem 5rem;
}

.game__back {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1.75rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  transition: color 0.2s;
}
.game__back:hover {
  color: var(--color-accent);
}

.game__layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 3rem;
  align-items: start;
}

.game__cover {
  position: relative;
  aspect-ratio: 3 / 4;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-surface);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}
.game__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.game__badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: var(--color-red-soft);
  color: #e88894;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.game__title {
  margin-top: 0.5rem;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  line-height: 1.05;
  color: var(--color-cream);
}

.game__short {
  margin-top: 1rem;
  font-size: 1.05rem;
  line-height: 1.5;
  color: var(--color-text);
}

.game__specs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 1.5rem;
  margin-top: 1.75rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
}
.game__specs div {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.game__specs dt {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}
.game__specs dd {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-cream);
}

.game__purchase {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.game__price {
  font-family: var(--font-body);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
  color: var(--color-accent);
}
.game__buy {
  padding: 1rem 1.75rem;
  font-size: 1rem;
}
.game__note {
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.game__details {
  margin-top: 4rem;
  max-width: 760px;
}
.game__details h2 {
  margin-bottom: 1rem;
}
.game__description {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--color-text);
}
.game__mechanics-title {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--color-cream);
}
.game__mechanics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.game__mechanics li {
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  font-size: 0.85rem;
  color: var(--color-text);
}

.game__other {
  margin-top: 4rem;
}
.game__other h2 {
  margin-bottom: 1.5rem;
}
.game__other-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
.game-mini {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.9rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
  transition: transform 0.2s, border-color 0.2s;
}
.game-mini:hover {
  transform: translateY(-3px);
  border-color: rgba(212, 160, 66, 0.4);
}
.game-mini__cover {
  overflow: hidden;
  aspect-ratio: 3 / 4;
  border-radius: var(--radius-sm);
  background: var(--color-surface);
}
.game-mini__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.game-mini__title {
  margin-top: 0.4rem;
  font-weight: 600;
  color: var(--color-cream);
}
.game-mini__price {
  font-size: 0.9rem;
  font-variant-numeric: tabular-nums;
  color: var(--color-accent);
}

@media (max-width: 860px) {
  .game__layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .game__other-grid {
    grid-template-columns: 1fr;
  }
}
</style>
