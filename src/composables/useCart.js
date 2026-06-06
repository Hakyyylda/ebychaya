import { reactive, computed, watch } from 'vue'

const STORAGE_KEY = 'g&q:cart'

const loadInitial = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const state = reactive({
  items: loadInitial(),
})

watch(
  () => state.items,
  (items) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* localStorage недоступен — молча игнорируем */
    }
  },
  { deep: true },
)

const findItem = (slug) => state.items.find((i) => i.slug === slug)

export function useCart() {
  const add = (game, qty = 1) => {
    const existing = findItem(game.slug)
    if (existing) {
      existing.qty += qty
    } else {
      state.items.push({
        slug: game.slug,
        title: game.title,
        price: game.price,
        image: game.image,
        qty,
      })
    }
  }

  const remove = (slug) => {
    const idx = state.items.findIndex((i) => i.slug === slug)
    if (idx !== -1) state.items.splice(idx, 1)
  }

  const setQty = (slug, qty) => {
    const item = findItem(slug)
    if (!item) return
    if (qty <= 0) remove(slug)
    else item.qty = qty
  }

  const clear = () => {
    state.items.splice(0, state.items.length)
  }

  const count = computed(() =>
    state.items.reduce((sum, i) => sum + i.qty, 0),
  )

  const total = computed(() =>
    state.items.reduce((sum, i) => sum + i.price * i.qty, 0),
  )

  const formatPrice = (value) =>
    new Intl.NumberFormat('ru-RU').format(value) + ' ₽'

  return { state, add, remove, setQty, clear, count, total, formatPrice }
}
