<script setup lang="ts">
const terms = [
  {
    term: 'Lahpet',
    pron: '"Lah-peh"',
    def: "Fermented tea leaves — you'll find them in our Tea Leaf Salad, and once you try it, you'll wonder why it isn't on every menu in the country.",
    img: '/images/tea-salad.jpg',
  },
  {
    term: 'Thoke',
    pron: '"Thoh-kay"',
    def: 'Burmese for "salad" — but nothing like a Western salad. Hand-tossed, warm, layered with crunch, heat, and tang all at once.',
    img: '/images/adam-tea.jpg',
  },
  {
    term: 'Palatha',
    pron: '"Pa-lah-tah"',
    def: 'Our griddle-cooked flatbread — flaky, buttery, and built for tearing. Order one. Then order another.',
    img: '/images/palatha.jpg',
  },
]
</script>

<template>
  <section class="glossary" id="glossary">
    <!-- Myanmar script watermark -->
    <div class="glossary-watermark" aria-hidden="true">
      <span>မြန်မာ</span>
    </div>

    <div class="glossary-inner">
      <div class="glossary-header">
        <div class="reveal">
          <p class="section-label">Before You Order</p>
          <h2 class="section-title">A Few Words<br><em>to Know</em></h2>
        </div>
        <div class="reveal">
          <p class="glossary-intro">Three words you&rsquo;ll see on our menu. You don&rsquo;t need to know them &mdash; but if you do, you&rsquo;ll sound like a regular on your first visit.</p>
        </div>
      </div>

      <div class="glossary-grid">
        <div v-for="item in terms" :key="item.term" class="glossary-item reveal">
          <!-- Context photo -->
          <div
            class="glossary-photo"
            :style="{ backgroundImage: `url(${item.img})` }"
          />
          <div class="glossary-content">
            <div class="glossary-term">{{ item.term }}</div>
            <div class="glossary-pron">Pronunciation: {{ item.pron }}</div>
            <p class="glossary-def">{{ item.def }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glossary {
  background: var(--cream);
  padding: 7rem 0;
  position: relative;
  overflow: hidden;
}
.glossary::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--gold), transparent);
}

/* Large Myanmar script watermark */
.glossary-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(8rem, 20vw, 20rem);
  font-weight: 900;
  color: rgba(201,147,58,0.06);
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  z-index: 0;
  line-height: 1;
}

.glossary-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 1;
}
.glossary-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 4rem;
}
.glossary-intro { font-size: 1.05rem; line-height: 1.8; color: var(--muted); margin-top: 1.2rem; }

.glossary-grid { display: grid; grid-template-columns: repeat(3, 1fr); }

.glossary-item {
  padding: 2rem;
  border-bottom: none;
  border-right: 1px solid var(--border);
  transition: background 0.25s;
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
}
.glossary-item:last-child { border-right: none; }
.glossary-item:hover { background: rgba(201,147,58,0.05); }

/* Context photo square */
.glossary-photo {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  border: 1px solid var(--border);
  opacity: 0.75;
  transition: opacity 0.3s;
}
.glossary-item:hover .glossary-photo { opacity: 1; }

.glossary-content { flex: 1; }
.glossary-term { font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; color: var(--crimson); margin-bottom: 0.25rem; }
.glossary-pron { font-family: var(--font-ornament); font-size: 0.6rem; letter-spacing: 0.15em; color: var(--gold); margin-bottom: 0.6rem; }
.glossary-def { font-size: 0.9rem; line-height: 1.7; color: var(--muted); }

@media (max-width: 900px) {
  .glossary-inner { padding: 0 1.5rem; }
  .glossary-header { grid-template-columns: 1fr; gap: 1.5rem; }
  .glossary-grid { grid-template-columns: 1fr; }
  .glossary-item { border-right: none; border-bottom: 1px solid var(--border); }
  .glossary-item:last-child { border-bottom: none; }
}
</style>
