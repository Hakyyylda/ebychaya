<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <p class="footer__logo">games<span>&</span>quarrels</p>
        <p class="footer__tagline">
          Магазин настольных игр, где правила — повод поспорить, а победа — повод собраться снова.
        </p>
      </div>

      <div class="footer__col">
        <h3>Навигация</h3>
        <ul>
          <li><RouterLink to="/">Главная</RouterLink></li>
          <li><RouterLink to="/catalog">Каталог</RouterLink></li>
          <li><RouterLink to="/events">События</RouterLink></li>
          <li><RouterLink to="/about">О нас</RouterLink></li>
        </ul>
      </div>

      <div class="footer__col">
        <h3>Контакты</h3>
        <ul>
          <li>Москва, ул. Настольная, 42</li>
          <li>Ежедневно 11:00 — 22:00</li>
          <li>hello@gamesquarrels.ru</li>
          <li>+7 (495) 000-00-42</li>
        </ul>
      </div>
    </div>

    <div class="container footer__bottom">
      <p>© {{ new Date().getFullYear() }} games&quarrels. Все права защищены.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 4rem;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-soft);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 2.5rem;
  padding-block: 3rem;
}

.footer__logo {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-cream);
}

.footer__logo span {
  color: var(--color-accent);
}

.footer__tagline {
  margin-top: 0.75rem;
  max-width: 320px;
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

.footer__col h3 {
  margin-bottom: 1rem;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.footer__col li + li {
  margin-top: 0.45rem;
}

.footer__col a {
  color: var(--color-text-muted);
  transition: color 0.2s;
}

.footer__col a:hover {
  color: var(--color-cream);
}

.footer__col li {
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

.footer__bottom {
  padding-block: 1.25rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
