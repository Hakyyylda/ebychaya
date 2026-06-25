<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 24,
  },
  stroke: {
    type: [Number, String],
    default: 1.6,
  },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="'currentColor'"
    :stroke-width="stroke"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    class="icon"
  >
    <g v-if="name === 'dice'">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="8" cy="16" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="1" fill="currentColor" stroke="none" />
    </g>
    <g v-else-if="name === 'castle'">
      <path d="M3 21V10l3-2v-3h2v3h2V5h2v3h2V5h2v3h2v3l3 2v11" />
      <path d="M3 21h18" />
      <path d="M10 21v-5h4v5" />
    </g>
    <g v-else-if="name === 'swords'">
      <path d="M14.5 14.5 21 21" />
      <path d="M3 3l8 8" />
      <path d="M11 5l8 8" />
      <path d="M5 11l8 8" />
      <path d="m14 14 5-5" />
      <path d="m3 21 5-5" />
    </g>
    <g v-else-if="name === 'spy'">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </g>
    <g v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </g>
    <g v-else-if="name === 'target'">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </g>
    <g v-else-if="name === 'wizard'">
      <path d="M12 3 9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1Z" />
      <circle cx="9" cy="3" r="1" fill="currentColor" stroke="none" />
    </g>
    <g v-else-if="name === 'pizza'">
      <path d="M3 21 21 3" />
      <path d="M3 21h18" />
      <path d="M9 9a1.5 1.5 0 1 0 0-.1" />
      <path d="M13 13a1.5 1.5 0 1 0 0-.1" />
      <path d="M17 17a1.5 1.5 0 1 0 0-.1" />
    </g>
    <g v-else-if="name === 'package'">
      <path d="m3 7 9-4 9 4-9 4-9-4Z" />
      <path d="M3 7v10l9 4 9-4V7" />
      <path d="M12 11v10" />
    </g>
    <g v-else-if="name === 'cards'">
      <rect x="3" y="6" width="14" height="14" rx="2" transform="rotate(-8 10 13)" />
      <rect x="7" y="4" width="14" height="14" rx="2" transform="rotate(8 14 11)" />
    </g>
    <g v-else-if="name === 'puzzle'">
      <path d="M19 11h-1V8a2 2 0 0 0-2-2h-3V5a2 2 0 1 0-4 0v1H6a2 2 0 0 0-2 2v3h1a2 2 0 1 1 0 4H4v3a2 2 0 0 0 2 2h3v-1a2 2 0 1 1 4 0v1h3a2 2 0 0 0 2-2v-3a2 2 0 1 1 0-4Z" />
    </g>
    <g v-else-if="name === 'pawn'">
      <path d="M9 3h6" />
      <path d="M10 3v3a3 3 0 0 1-2 2.8L7 11h10l-1-2.2A3 3 0 0 1 14 6V3" />
      <path d="M7 11h10" />
      <path d="M6 21h12v-3H6Z" />
      <path d="M8 14h8l-1 4H9Z" />
    </g>
    <g v-else-if="name === 'party'">
      <path d="m4 20 16-16" />
      <path d="M6 16l-2 2" />
      <path d="m10 6 4 4" />
      <path d="M16 4l4 4-4 4-4-4Z" />
      <path d="M4 14l2 2 2-2-2-2Z" />
    </g>
    <g v-else-if="name === 'handshake'">
      <path d="m11 17 2 2 5-5-3-3-2 2" />
      <path d="m8 14 4-4 3 3" />
      <path d="M3 12h2l2-2 4 4-2 2" />
      <path d="m17 6 3 3-2 2" />
      <path d="M21 9V4h-5" />
    </g>
    <g v-else-if="name === 'family'">
      <circle cx="8" cy="6" r="3" />
      <circle cx="16" cy="6" r="3" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
      <path d="M11 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
    </g>
    <g v-else-if="name === 'construction'">
      <path d="M2 18 14 6l4 4L6 22Z" />
      <path d="m11 9 4 4" />
      <path d="m15 5 4 4" />
    </g>
    <g v-else-if="name === 'calendar'">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </g>
    <g v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </g>
    <g v-else-if="name === 'users'">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15 20v-1a3.5 3.5 0 0 1 3.5-3.5H19a3 3 0 0 1 3 3v1.5" />
    </g>
    <g v-else-if="name === 'book'">
      <path d="M4 4h6a3 3 0 0 1 3 3v13" />
      <path d="M20 4h-6a3 3 0 0 0-3 3v13" />
      <path d="M4 4v15h6" />
      <path d="M20 4v15h-6" />
    </g>
    <g v-else-if="name === 'mic'">
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </g>
    <g v-else-if="name === 'pin'">
      <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </g>
    <g v-else-if="name === 'mail'">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </g>
    <g v-else-if="name === 'phone'">
      <path d="M5 4h4l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </g>
    <g v-else-if="name === 'cart'">
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 2-1.5L22 8H6" />
    </g>
    <g v-else-if="name === 'plus'">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </g>
    <g v-else-if="name === 'minus'">
      <path d="M5 12h14" />
    </g>
    <g v-else-if="name === 'trash'">
      <path d="M4 7h16" />
      <path d="M10 4h4l1 3H9Z" />
      <path d="M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </g>
    <g v-else-if="name === 'check'">
      <path d="m4 12 5 5L20 6" />
    </g>
    <g v-else-if="name === 'arrow-left'">
      <path d="M19 12H5" />
      <path d="m12 5-7 7 7 7" />
    </g>
    <g v-else-if="name === 'users-three'">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
      <path d="M15 20v-1a3.5 3.5 0 0 1 3.5-3.5H19a3 3 0 0 1 3 3v1.5" />
    </g>
    <g v-else-if="name === 'star'">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none" />
    </g>
    <g v-else-if="name === 'star-empty'">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </g>
    <g v-else-if="name === 'heart'">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </g>
    <g v-else-if="name === 'clock-arrow'">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
      <path d="M5 3 3 5l2 2" />
    </g>
  </svg>
</template>

<style scoped>
.icon {
  display: inline-block;
  flex-shrink: 0;
  vertical-align: middle;
}
</style>
