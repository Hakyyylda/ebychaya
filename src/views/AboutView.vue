<script setup>
import Icon from '@/components/ui/Icon.vue'

const team = [
  { name: 'Алексей', role: 'Основатель, гид по стратегиям', icon: 'dice' },
  { name: 'Марина', role: 'Куратор каталога и закупок', icon: 'book' },
  { name: 'Дима', role: 'Ведущий игротеки', icon: 'mic' },
]

const contactItems = [
  { icon: 'pin', title: 'Адрес', text: 'Москва, ул. Настольная, 42' },
  { icon: 'clock', title: 'Часы работы', text: 'Ежедневно 11:00 — 22:00' },
  { icon: 'mail', title: 'Email', text: 'hello@gamesquarrels.ru' },
  { icon: 'phone', title: 'Телефон', text: '+7 (495) 000-00-42' },
]
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">О магазине</span>
        <h1 class="page-hero__title">games&quarrels</h1>
        <p class="page-hero__text">
          Мы открылись в 2019 году с простой идеей: настольные игры — это способ
          провести вечер лучше, чем любой сериал. Споры по правилам — часть fun'а.
        </p>
      </div>
    </section>

    <section class="page-content">
      <div class="container about-grid">
        <div class="about-story">
          <h2 class="section-title">Наша история</h2>
          <p>
            Начинали с одной комнаты и полки классики. Сегодня — три зала,
            демо-столы и сообщество из тысяч игроков. Мы помогаем выбрать первую игру,
            организуем турниры и привозим редкие издания под заказ.
          </p>
          <p>
            Название games&quarrels отражает наш дух: играем hard, спорим fair,
            и всегда остаёмся за одним столом.
          </p>
        </div>

        <aside class="about-contacts">
          <h2 class="section-title">Контакты</h2>
          <ul>
            <li v-for="item in contactItems" :key="item.title">
              <span class="about-contacts__icon"><Icon :name="item.icon" :size="20" /></span>
              <div>
                <strong>{{ item.title }}</strong>
                <p>{{ item.text }}</p>
              </div>
            </li>
          </ul>
        </aside>
      </div>

      <div class="container">
        <h2 class="section-title" style="margin-top: 4rem;">Команда</h2>
        <div class="team-grid">
          <article v-for="member in team" :key="member.name" class="team-card">
            <span class="team-card__avatar"><Icon :name="member.icon" :size="28" /></span>
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
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
    radial-gradient(ellipse 60% 80% at 50% 0%, rgba(74, 124, 89, 0.12), transparent),
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

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
}

.about-story p {
  margin-top: 1rem;
  color: var(--color-text-muted);
}

.about-story p + p {
  margin-top: 0.75rem;
}

.about-contacts ul {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about-contacts li {
  display: flex;
  gap: 1rem;
}

.about-contacts li span {
  font-size: 1.25rem;
}

.about-contacts__icon {
  display: inline-grid;
  place-items: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--color-surface);
  color: var(--color-accent);
}

.about-contacts strong {
  display: block;
  color: var(--color-cream);
  font-size: 0.9rem;
}

.about-contacts p {
  margin-top: 0.15rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.team-card {
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
  text-align: center;
}

.team-card__avatar {
  display: inline-grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-accent);
}

.team-card h3 {
  margin-top: 1rem;
  font-family: var(--font-display);
  color: var(--color-cream);
}

.team-card p {
  margin-top: 0.35rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .about-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
