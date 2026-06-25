<script setup>
import Icon from '@/components/ui/Icon.vue'

const reviews = [
  {
    name: 'Екатерина',
    game: 'Каркассон',
    rating: 5,
    text: 'Купили с мужем после того, как поиграли в гостях. Теперь каждый вечер — партия-другая. Очень уютная игра, а в магазине подсказали отличное дополнение к ней.',
    date: '12 мая 2026',
  },
  {
    name: 'Сергей',
    game: 'Манчкин',
    rating: 5,
    text: 'Друзья сказали, что это «игра для тех, кто любит спорить». Не соврали. За вечер поругались раз пять, но в итоге все смеялись. Отличный магазин, привезу ещё.',
    date: '28 апреля 2026',
  },
  {
    name: 'Анна',
    game: 'Кодовые имена',
    rating: 4,
    text: 'Покупала для тимбилдинга в офисе. Коллеги в восторге! Простые правила, а эмоций — море. Всем рекомендую, особенно большим компаниям.',
    date: '15 апреля 2026',
  },
  {
    name: 'Дмитрий',
    game: 'Пандемия',
    rating: 5,
    text: 'Наконец-то нашли кооператив, который нравится всей семье. Играем с детьми 8 и 11 лет — они уже обыгрывают нас. Магазин посоветовал идеальный вариант.',
    date: '2 апреля 2026',
  },
  {
    name: 'Ольга',
    game: 'Каркассон',
    rating: 5,
    text: 'Обожаю эту игру! Купила сначала себе, потом ещё двум подругам в подарок. Магазин сделал скидку на оптовую покупку. Буду заказывать ещё.',
    date: '20 марта 2026',
  },
  {
    name: 'Иван',
    game: 'Манчкин',
    rating: 4,
    text: 'Студенческая классика. Купили в общагу — теперь к нам приходят играть даже с соседнего этажа. Правда, карты быстро заламинировали от частого использования.',
    date: '8 марта 2026',
  },
]
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Отзывы</span>
        <h1 class="page-hero__title">Что говорят игроки</h1>
        <p class="page-hero__text">
          Реальные отзывы наших гостей — спасибо, что делитесь впечатлениями. 
          Вы тоже можете оставить отзыв в магазине или на этой странице чуть позже.
        </p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="reviews-grid">
          <article v-for="review in reviews" :key="review.name" class="review-card">
            <div class="review-card__stars">
              <span v-for="i in 5" :key="i">
                <Icon :name="i <= review.rating ? 'star' : 'star-empty'" :size="16" />
              </span>
            </div>
            <p class="review-card__text">{{ review.text }}</p>
            <div class="review-card__footer">
              <div class="review-card__author">
                <span class="review-card__avatar">{{ review.name[0] }}</span>
                <div>
                  <strong>{{ review.name }}</strong>
                  <span>{{ review.game }}</span>
                </div>
              </div>
              <time class="review-card__date">{{ review.date }}</time>
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
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
.review-card {
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
  display: flex;
  flex-direction: column;
}
.review-card__stars {
  display: flex;
  gap: 0.2rem;
  color: var(--color-accent);
  margin-bottom: 0.75rem;
}
.review-card__text {
  flex: 1;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text);
  font-style: italic;
}
.review-card__footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}
.review-card__author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.review-card__avatar {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-accent);
  font-weight: 700;
  font-size: 0.9rem;
}
.review-card__author strong {
  display: block;
  color: var(--color-cream);
  font-size: 0.9rem;
}
.review-card__author span {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
.review-card__date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
@media (max-width: 768px) {
  .reviews-grid {
    grid-template-columns: 1fr;
  }
}
</style>
