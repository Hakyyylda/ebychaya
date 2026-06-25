<script setup>
import Icon from '@/components/ui/Icon.vue'

const jobs = [
  {
    title: 'Продавец-консультант',
    type: 'Полная занятость',
    dept: 'Магазин',
    text: 'Помогать гостям с выбором игр, проводить демо-сессии, поддерживать уют в зале. Знание настолок приветствуется, но научим всему.',
    salary: 'от 60 000 ₽',
  },
  {
    title: 'Ведущий игротеки',
    type: 'Частичная занятость',
    dept: 'Ивенты',
    text: 'Вести турниры и открытые столы, объяснять правила, создавать атмосферу. Харизма и умение увлечь компанию — главный навык.',
    salary: 'от 40 000 ₽',
  },
  {
    title: 'Менеджер по закупкам',
    type: 'Полная занятость',
    dept: 'Аналитика',
    text: 'Искать новинки на рынке, договариваться с издателями, формировать ассортимент. Нужен опыт в ритейле и любовь к настолкам.',
    salary: 'от 80 000 ₽',
  },
  {
    title: 'SMM-менеджер',
    type: 'Удалённо',
    dept: 'Маркетинг',
    text: 'Вести соцсети, снимать короткие видео с обзорами, анонсировать события. Креативность и чувство юмора обязательны.',
    salary: 'от 55 000 ₽',
  },
]

const perks = [
  'Скидка 30% на весь ассортимент',
  'Бесплатные игротеки для сотрудников',
  'График от 3 до 5 дней в неделю',
  'Чай, кофе и печеньки безлимитно',
  'Обучение от опытных гидов',
  'Корпоративные турниры',
]
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Вакансии</span>
        <h1 class="page-hero__title">Работа в games&quarrels</h1>
        <p class="page-hero__text">
          Мы ищем людей, которые любят настольные игры так же сильно, как мы.
          Если хочешь работать в месте, где споры по правилам — обычное дело, ждём твоё резюме.
        </p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="jobs-grid">
          <article v-for="job in jobs" :key="job.title" class="job-card">
            <div class="job-card__head">
              <span class="job-card__type">{{ job.type }}</span>
              <span class="job-card__dept">{{ job.dept }}</span>
            </div>
            <h3>{{ job.title }}</h3>
            <p>{{ job.text }}</p>
            <div class="job-card__footer">
              <span class="job-card__salary">{{ job.salary }}</span>
              <button class="btn btn-outline job-card__btn" disabled>Откликнуться</button>
            </div>
          </article>
        </div>

        <div class="jobs-perks">
          <h2 class="section-title">Что мы предлагаем</h2>
          <ul class="jobs-perks__list">
            <li v-for="perk in perks" :key="perk">
              <Icon name="check" :size="18" />
              {{ perk }}
            </li>
          </ul>
          <div class="jobs-cta">
            <p>Не нашли подходящей вакансии, но хотите работать с нами?</p>
            <p class="jobs-cta__email">Присылайте резюме на <strong>hr@gamesquarrels.ru</strong></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding-block: 3.5rem 2.5rem;
  background:
    radial-gradient(ellipse 60% 80% at 60% 0%, rgba(155, 45, 58, 0.12), transparent),
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
.jobs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
.job-card {
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
  display: flex;
  flex-direction: column;
}
.job-card__head {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.job-card__type {
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: var(--color-red-soft);
  color: #e88894;
  font-size: 0.72rem;
  font-weight: 600;
}
.job-card__dept {
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: rgba(212, 160, 66, 0.15);
  color: var(--color-accent);
  font-size: 0.72rem;
  font-weight: 600;
}
.job-card h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--color-cream);
}
.job-card p {
  margin-top: 0.5rem;
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-text-muted);
}
.job-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}
.job-card__salary {
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--color-accent);
}
.job-card__btn {
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  opacity: 0.6;
  cursor: not-allowed;
}

.jobs-perks {
  margin-top: 3.5rem;
  padding: 2rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}
.jobs-perks__list {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
.jobs-perks__list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  font-size: 0.9rem;
}
.jobs-perks__list li :deep(.icon) {
  color: var(--color-accent);
  flex-shrink: 0;
}

.jobs-cta {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
  color: var(--color-text-muted);
}
.jobs-cta__email {
  margin-top: 0.5rem;
  font-size: 1.05rem;
}
.jobs-cta__email strong {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .jobs-grid {
    grid-template-columns: 1fr;
  }
  .jobs-perks__list {
    grid-template-columns: 1fr;
  }
}
</style>
