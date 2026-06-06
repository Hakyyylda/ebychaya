<script setup>
import Icon from '@/components/ui/Icon.vue'

const events = [
  {
    date: '12 июня, четверг',
    title: 'Турнир по «Каркассон»',
    time: '18:30 — 22:00',
    spots: '8 мест',
    type: 'Турнир',
  },
  {
    date: '14 июня, суббота',
    title: 'Вечер кооперативов',
    time: '19:00 — 23:00',
    spots: 'Открытый стол',
    type: 'Игротека',
  },
  {
    date: '19 июня, четверг',
    title: 'Детский день настолок',
    time: '12:00 — 16:00',
    spots: 'С семьёй',
    type: 'Семейное',
  },
  {
    date: '21 июня, суббота',
    title: 'Party games marathon',
    time: '17:00 — 00:00',
    spots: '16 мест',
    type: 'Вечеринка',
  },
]
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Игротека</span>
        <h1 class="page-hero__title">События и встречи</h1>
        <p class="page-hero__text">
          Турниры, открытые столы и тематические вечера. Здесь будет расписание
          с записью на мероприятия — пока заготовка под будущий функционал.
        </p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="placeholder-banner">
          <span class="placeholder-banner__icon"><Icon name="calendar" :size="24" /></span>
          <div>
            <strong>Страница в разработке</strong>
            <p>Далее добавим календарь, форму записи и фильтр по типу события.</p>
          </div>
        </div>

        <div class="events-grid">
          <article v-for="event in events" :key="event.title" class="event-card">
            <span class="event-card__type">{{ event.type }}</span>
            <time class="event-card__date">{{ event.date }}</time>
            <h3>{{ event.title }}</h3>
            <ul class="event-card__meta">
              <li><Icon name="clock" :size="14" /> {{ event.time }}</li>
              <li><Icon name="users" :size="14" /> {{ event.spots }}</li>
            </ul>
            <button class="btn btn-outline event-card__btn" disabled>Записаться</button>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding-block: 3.5rem 2.5rem;
  background:
    radial-gradient(ellipse 60% 80% at 20% 0%, rgba(155, 45, 58, 0.15), transparent),
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

.placeholder-banner {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px dashed rgba(155, 45, 58, 0.4);
  background: rgba(155, 45, 58, 0.1);
  margin-bottom: 2.5rem;
}

.placeholder-banner span {
  font-size: 1.5rem;
}

.placeholder-banner__icon {
  display: inline-grid;
  place-items: center;
  color: var(--color-accent);
}

.placeholder-banner strong {
  display: block;
  color: var(--color-cream);
}

.placeholder-banner p {
  margin-top: 0.25rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.event-card {
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
}

.event-card__type {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: var(--color-red-soft);
  color: #e88894;
  font-size: 0.72rem;
  font-weight: 600;
}

.event-card__date {
  display: block;
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--color-accent);
}

.event-card h3 {
  margin-top: 0.35rem;
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--color-cream);
}

.event-card__meta {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.event-card__meta li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.event-card__btn {
  width: 100%;
  margin-top: 1.25rem;
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .events-grid {
    grid-template-columns: 1fr;
  }
}
</style>
