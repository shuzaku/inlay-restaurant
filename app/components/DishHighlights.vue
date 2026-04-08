<script setup lang="ts">
const photo1Ref = ref<HTMLElement | null>(null)
const photo2Ref = ref<HTMLElement | null>(null)
const photo3Ref = ref<HTMLElement | null>(null)

useParallax(photo1Ref, 0.12)
useParallax(photo2Ref, 0.1)
useParallax(photo3Ref, 0.12)

const dishes = [
  {
    name: 'Tea Leaf Salad',
    line: 'Twelve textures. One bowl. Nothing else like it on earth.',
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=90',
    anchor: '#menu',
  },
  {
    name: 'Coconut Noodle Soup',
    line: 'Golden, silky, warming — the bowl you\'ll be thinking about on the drive home.',
    url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&q=90',
    anchor: '#menu',
  },
  {
    name: 'Palatha',
    line: 'Flaky, buttery, griddle-cooked to order. Order it with everything.',
    url: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=1200&q=90',
    anchor: '#menu',
  },
]
</script>

<template>
  <section class="highlights">
    <div class="highlights-label">
      <span class="hl-ornament">&#x2736;</span>
      <span class="hl-text">Start Here</span>
      <span class="hl-ornament">&#x2736;</span>
    </div>

    <!-- Dish 1 — photo left, text right -->
    <div class="hl-panel hl-panel--ltr reveal">
      <div class="hl-photo-wrap parallax-wrap">
        <div
          ref="photo1Ref"
          class="hl-photo parallax-img"
          :style="{ backgroundImage: `url(${dishes[0].url})` }"
        />
        <div class="hl-photo-tint" />
      </div>
      <div class="hl-copy">
        <p class="hl-num">01</p>
        <h2 class="hl-name">{{ dishes[0].name }}</h2>
        <p class="hl-line">{{ dishes[0].line }}</p>
        <a :href="dishes[0].anchor" class="hl-cta">See it on the menu &rarr;</a>
      </div>
    </div>

    <!-- Dish 2 — text left, photo right -->
    <div class="hl-panel hl-panel--rtl reveal">
      <div class="hl-copy hl-copy--dark">
        <p class="hl-num">02</p>
        <h2 class="hl-name">{{ dishes[1].name }}</h2>
        <p class="hl-line">{{ dishes[1].line }}</p>
        <a :href="dishes[1].anchor" class="hl-cta hl-cta--light">See it on the menu &rarr;</a>
      </div>
      <div class="hl-photo-wrap parallax-wrap">
        <div
          ref="photo2Ref"
          class="hl-photo parallax-img"
          :style="{ backgroundImage: `url(${dishes[1].url})` }"
        />
        <div class="hl-photo-tint hl-photo-tint--r" />
      </div>
    </div>

    <!-- Dish 3 — photo left, text right -->
    <div class="hl-panel hl-panel--ltr reveal">
      <div class="hl-photo-wrap parallax-wrap">
        <div
          ref="photo3Ref"
          class="hl-photo parallax-img"
          :style="{ backgroundImage: `url(${dishes[2].url})` }"
        />
        <div class="hl-photo-tint" />
      </div>
      <div class="hl-copy">
        <p class="hl-num">03</p>
        <h2 class="hl-name">{{ dishes[2].name }}</h2>
        <p class="hl-line">{{ dishes[2].line }}</p>
        <a :href="dishes[2].anchor" class="hl-cta">See it on the menu &rarr;</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlights {
  background: var(--warm-white);
  padding-top: 2rem;
}

.highlights-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 0 0 1.5rem;
}
.hl-ornament { color: var(--gold); font-size: 0.9rem; }
.hl-text {
  font-family: var(--font-ornament);
  font-size: 0.62rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Each panel is a full-width 50/50 split */
.hl-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 70vh;
}

/* Photo side */
.hl-photo-wrap {
  position: relative;
  overflow: hidden;
}
.hl-photo {
  position: absolute;
  inset: -15%;
  background-size: cover;
  background-position: center;
}

/* Gradient tint bleeds inward toward the text side */
.hl-photo-tint {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    transparent 55%,
    var(--warm-white) 100%
  );
}
.hl-photo-tint--r {
  background: linear-gradient(
    to left,
    transparent 55%,
    var(--ink) 100%
  );
}

/* RTL panel: dark background on text side */
.hl-panel--rtl {
  background: var(--ink);
}

/* Copy side */
.hl-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 5rem 5rem 4rem;
  background: var(--warm-white);
}
.hl-copy--dark {
  background: var(--ink);
  padding: 5rem 4rem 5rem 5rem;
}

.hl-num {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--gold);
  margin-bottom: 1.25rem;
}
.hl-name {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 900;
  line-height: 1.05;
  color: var(--deep);
  margin-bottom: 1.25rem;
}
.hl-copy--dark .hl-name { color: var(--cream); }

.hl-line {
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.7;
  color: var(--muted);
  max-width: 380px;
  margin-bottom: 2.5rem;
}
.hl-copy--dark .hl-line { color: rgba(245,237,216,0.65); }

.hl-cta {
  font-family: var(--font-ornament);
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--crimson);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: gap 0.2s, color 0.2s;
  width: fit-content;
}
.hl-cta::after {
  content: '';
  display: block;
  height: 1px;
  width: 32px;
  background: var(--crimson);
  transition: width 0.3s;
}
.hl-cta:hover { color: var(--gold); gap: 0.6rem; }
.hl-cta:hover::after { width: 48px; background: var(--gold); }

.hl-cta--light { color: var(--pale-gold); }
.hl-cta--light::after { background: var(--pale-gold); }
.hl-cta--light:hover { color: var(--gold); }
.hl-cta--light:hover::after { background: var(--gold); }

/* Stack panels cleanly — no clip-path between panels (avoids whitespace gaps) */
.hl-panel--ltr,
.hl-panel--rtl {
  position: relative;
}

@media (max-width: 900px) {
  .hl-panel,
  .hl-panel--ltr,
  .hl-panel--rtl {
    grid-template-columns: 1fr;
  }
  .hl-panel--rtl {
    direction: ltr; /* reset so photo comes first on mobile too */
  }
  .hl-photo-wrap { height: 55vw; min-height: 260px; }
  .hl-copy,
  .hl-copy--dark { padding: 3rem 2rem; }
  .hl-photo-tint,
  .hl-photo-tint--r { display: none; }
}
</style>
