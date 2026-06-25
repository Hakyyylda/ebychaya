<script setup>
import Icon from '@/components/ui/Icon.vue'

const posts = [
  {
    title: 'Как выбрать настольную игру для компании друзей',
    excerpt: 'Рассказываем про главные критерии: количество игроков, сложность правил и среднее время партии.',
    date: '10 июня 2026',
    read: '5 мин',
    tag: 'Советы',
  },
  {
    title: 'Топ-5 стратегий для победы в Каркассон',
    excerpt: 'Собираете города или контролируете поля? Разбираем тактики, которые увеличат ваши шансы на победу.',
    date: '2 июня 2026',
    read: '7 мин',
    tag: 'Гайды',
  },
  {
    title: 'Почему кооперативные игры объединяют лучше соревновательных',
    excerpt: 'Личный опыт нашей игротеки: как Пандемия и другие кооперативы учат работать в команде.',
    date: '25 мая 2026',
    read: '4 мин',
    tag: 'Мнения',
  },
  {
    title: 'Что взять с собой на игротеку: чек-лист новичка',
    excerpt: 'Хорошее настроение, удобная компания и ничего лишнего — собираемся на вечер настолок правильно.',
    date: '18 мая 2026',
    read: '3 мин',
    tag: 'Памятки',
  },
  {
    title: 'Обзор новинки: расширение для Манчкина',
    excerpt: 'Разбираем свежее дополнение — новые классы, проклятия и сокровища для любителей подставы.',
    date: '10 мая 2026',
    read: '6 мин',
    tag: 'Обзоры',
  },
  {
    title: 'Настольные игры для детей: от 4 до 12 лет',
    excerpt: 'Подборка игр, которые развивают логику, память и учат взаимодействовать без скуки.',
    date: '1 мая 2026',
    read: '8 мин',
    tag: 'Советы',
  },
]
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Блог</span>
        <h1 class="page-hero__title">Статьи и новости</h1>
        <p class="page-hero__text">
          Пишем про настольные игры: обзоры новинок, гайды по стратегиям, правила
          и истории из жизни игротеки.
        </p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="blog-grid">
          <article v-for="post in posts" :key="post.title" class="blog-card">
            <span class="blog-card__tag">{{ post.tag }}</span>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <div class="blog-card__footer">
              <time>{{ post.date }}</time>
              <span class="blog-card__read">
                <Icon name="clock-arrow" :size="14" />
                {{ post.read }}
              </span>
            </div>
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
    radial-gradient(ellipse 60% 80% at 30% 0%, rgba(74, 124, 89, 0.12), transparent),
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
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
.blog-card {
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
  display: flex;
  flex-direction: column;
}
.blog-card__tag {
  display: inline-block;
  align-self: flex-start;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: var(--color-red-soft);
  color: #e88894;
  font-size: 0.72rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}
.blog-card h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--color-cream);
  line-height: 1.3;
}
.blog-card p {
  margin-top: 0.5rem;
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-text-muted);
}
.blog-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
.blog-card__read {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
