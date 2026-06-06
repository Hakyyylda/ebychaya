<script setup>
import { RouterLink } from 'vue-router'
import Icon from '@/components/ui/Icon.vue'
import { games } from '@/data/games'
import { useCart } from '@/composables/useCart'

const { add, state, formatPrice } = useCart()

const featuredGames = games.slice(0, 4)

const isInCart = (slug) => state.items.some((i) => i.slug === slug)

const quickAdd = (e, game) => {
  e.preventDefault()
  e.stopPropagation()
  add(game)
}

const perks = [
  {
    icon: 'target',
    title: 'Демо-столы',
    text: 'Попробуйте игру перед покупкой — у нас всегда открыты демо-копии.',
  },
  {
    icon: 'wizard',
    title: 'Гиды по правилам',
    text: 'Поможем разобраться в механиках и проведём первую партию.',
  },
  {
    icon: 'pizza',
    title: 'Игротека по вечерам',
    text: 'Среда и суббота — открытые столы, новые знакомства и турниры.',
  },
  {
    icon: 'package',
    title: 'Редкие издания',
    text: 'Под заказ привезём дополнения и локализованные версии за 3–7 дней.',
  },
]

const upcomingEvents = [
  { day: '12 июн', title: 'Турнир по «Каркассон»', time: '18:30' },
  { day: '14 июн', title: 'Вечер кооперативов', time: '19:00' },
  { day: '19 июн', title: 'Детский день настолок', time: '12:00' },
]
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__content">
          <span class="section-label">Магазин настольных игр</span>
          <h1 class="hero__title">
            Играй, спорь<br>
            <span>и побеждай</span>
          </h1>
          <p class="hero__text">
            games&quarrels — место, где кубики бросают смело, правила читают вслух,
            а каждый вечер превращается в новую партию.
          </p>
          <div class="hero__actions">
            <RouterLink to="/catalog" class="btn btn-primary">Смотреть каталог</RouterLink>
            <RouterLink to="/events" class="btn btn-outline">Ближайшие события</RouterLink>
          </div>
          <div class="hero__stats">
            <div><strong>800+</strong><span>игр в наличии</span></div>
            <div><strong>3</strong><span>игровых зала</span></div>
            <div><strong>12</strong><span>столов для партий</span></div>
          </div>
        </div>

        <div class="hero__visual">
          <div class="hero__card hero__card--main">
            <span class="hero__card-tag hero__card-tag--main">Игротека сегодня</span>
            <span class="hero__dice"><Icon name="dice" :size="48" /></span>
            <p>Новая партия<br>начинается здесь</p>
            <span class="hero__card-meta">
              <span class="hero__card-dot"></span>
              Свободно 4 стола
            </span>
          </div>
          <div class="hero__card hero__card--side">
            <span class="hero__card-tag">Для компании</span>
            <span class="hero__card-icon"><Icon name="cards" :size="28" /></span>
            <p>Вечериночные<br>хиты</p>
          </div>
          <div class="hero__card hero__card--side hero__card--green">
            <span class="hero__card-tag">Вместе</span>
            <span class="hero__card-icon"><Icon name="puzzle" :size="28" /></span>
            <p>Командные<br>вечера</p>
          </div>
        </div>
      </div>
    </section>

    <section class="featured">
      <div class="container">
        <div class="featured__head">
          <div>
            <span class="section-label">Популярное</span>
            <h2 class="section-title">Хиты полок</h2>
            <p class="section-subtitle">Игры, которые чаще всего уходят с полки — и возвращаются на игротеку.</p>
          </div>
          <RouterLink to="/catalog" class="btn btn-outline">Весь каталог →</RouterLink>
        </div>

        <div class="featured__grid">
          <RouterLink
            v-for="game in featuredGames"
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
            <p class="game-card__meta">{{ game.category }} · {{ game.players }} игроков</p>
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

    <section class="perks">
      <div class="container">
        <span class="section-label">Почему мы</span>
        <h2 class="section-title">Не просто магазин — игровое сообщество</h2>

        <div class="perks__grid">
          <article v-for="perk in perks" :key="perk.title" class="perk-card">
            <span class="perk-card__icon"><Icon :name="perk.icon" :size="28" /></span>
            <h3>{{ perk.title }}</h3>
            <p>{{ perk.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="events-preview">
      <div class="container events-preview__inner">
        <div class="events-preview__info">
          <span class="section-label">Игротека</span>
          <h2 class="section-title">Ближайшие события</h2>
          <p class="section-subtitle">
            Приходите одни или с компанией — мы найдём стол и игру под ваш настрой.
          </p>
          <RouterLink to="/events" class="btn btn-primary">Все события</RouterLink>
        </div>

        <ul class="events-list">
          <li v-for="event in upcomingEvents" :key="event.title" class="events-list__item">
            <span class="events-list__day">{{ event.day }}</span>
            <div>
              <strong>{{ event.title }}</strong>
              <span>{{ event.time }}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="cta">
      <div class="container cta__inner">
        <h2>Готовы к новой партии?</h2>
        <p>Загляните в магазин или запишитесь на игротеку — первый стол всегда найдётся.</p>
        <div class="cta__actions">
          <RouterLink to="/about" class="btn btn-primary">Как нас найти</RouterLink>
          <RouterLink to="/catalog" class="btn btn-outline">Выбрать игру</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding-block: 4rem 5rem;
  background:
    radial-gradient(ellipse 80% 60% at 70% 20%, rgba(155, 45, 58, 0.18), transparent),
    radial-gradient(ellipse 50% 40% at 10% 80%, rgba(212, 160, 66, 0.1), transparent);
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.05;
  color: var(--color-cream);
}

.hero__title span {
  color: var(--color-accent);
}

.hero__text {
  margin-top: 1.25rem;
  max-width: 480px;
  color: var(--color-text-muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.hero__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.hero__stats strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1.75rem;
  color: var(--color-cream);
}

.hero__stats span {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.hero__visual {
  position: relative;
  min-height: 360px;
}

.hero__card {
  position: absolute;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  box-shadow: var(--shadow);
  padding: 1.5rem;
}

.hero__card--main {
  inset: 10% 10% 10% 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(145deg, var(--color-surface), var(--color-red-soft));
}

.hero__dice {
  font-size: 2.5rem;
  letter-spacing: 0.3rem;
  margin-bottom: 1rem;
}

.hero__card--main p {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-cream);
}

.hero__card-tag--main {
  background: rgba(255, 255, 255, 0.18);
  color: var(--color-cream);
  margin-bottom: 0.4rem;
}

.hero__card-meta {
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-cream);
  opacity: 0.85;
}

.hero__card-dot {
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #6ed17a;
}

.hero__card-dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #6ed17a;
  animation: hero-pulse 1.8s ease-out infinite;
}

@keyframes hero-pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(3.2);
    opacity: 0;
  }
}

.hero__card--side {
  top: 0;
  right: 0;
  width: 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.hero__card-tag {
  display: inline-block;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: var(--color-red-soft);
  color: var(--color-cream);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero__card-icon {
  font-size: 1.75rem;
  line-height: 1;
}

.hero__card--side p {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-text-muted);
}

.hero__card--green {
  bottom: 0;
  left: 0;
  background: rgba(74, 124, 89, 0.25);
}

.hero__card--green .hero__card-tag {
  background: rgba(74, 124, 89, 0.5);
}

.featured {
  padding-block: 5rem;
}

.featured__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.featured__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
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

.perks {
  padding-block: 5rem;
  background: var(--color-bg-soft);
}

.perks__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 2.5rem;
}

.perk-card {
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg);
}

.perk-card__icon {
  font-size: 1.75rem;
}

.perk-card h3 {
  margin-top: 1rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--color-cream);
}

.perk-card p {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.events-preview {
  padding-block: 5rem;
}

.events-preview__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.events-list__item {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.1rem 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
}

.events-list__day {
  flex-shrink: 0;
  min-width: 4.5rem;
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-accent);
}

.events-list__item strong {
  display: block;
  color: var(--color-cream);
}

.events-list__item span {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.cta {
  padding-block: 5rem 6rem;
}

.cta__inner {
  text-align: center;
  padding: 3.5rem 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background:
    radial-gradient(circle at 50% 0%, rgba(212, 160, 66, 0.15), transparent 60%),
    var(--color-surface);
}

.cta__inner h2 {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--color-cream);
}

.cta__inner p {
  margin: 0.75rem auto 0;
  max-width: 480px;
  color: var(--color-text-muted);
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

@media (max-width: 1024px) {
  .featured__grid,
  .perks__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero__inner,
  .events-preview__inner {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    min-height: 280px;
  }

  .featured__head {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 520px) {
  .featured__grid,
  .perks__grid {
    grid-template-columns: 1fr;
  }

  .hero__stats {
    gap: 1.25rem;
  }
}
</style>
