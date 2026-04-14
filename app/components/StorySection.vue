<script setup lang="ts">
const imgRef = ref<HTMLElement | null>(null)
useParallax(imgRef, 0.12)

const cards = [
  { n: '1', icon: '🌿', title: 'Sourced Daily', body: "Ingredients sourced daily, paired with imported Burmese spices you won't find anywhere else in DFW." },
  { n: '2', icon: '👨‍🍳', title: 'Family Recipes', body: 'Every dish follows time-honored recipes from Myanmar. Nothing is rushed. Everything is cooked to order.' },
  { n: '3', icon: '🗺️', title: 'Guided Discovery', body: 'First time? Our staff will guide you through every dish and recommend their favorites with genuine warmth.' },
  { n: '4', icon: '🤝', title: 'Come As You Are', body: "No dress code, no reservations, no prior knowledge required. Walk in, sit down, and let us take care of you." },
]
</script>

<template>
  <section class="story" id="story">
    <!-- Two-column: copy left, sticky photo right -->
    <div class="story-inner">
      <div class="story-left">
        <p class="section-label">Our Story</p>
        <h2 class="section-title">Lewisville&rsquo;s<br><em>Best-Kept Secret</em></h2>
        <div class="story-body">
          <p>Inlay Burmese Kitchen is a family-run kitchen bringing the bold, layered flavors of Myanmar to North Texas. Every dish is cooked to order, built on recipes passed down through generations &mdash; never written down, never rushed.</p>
          <p>We named ourselves after Inle Lake, where our recipes come from. But this is a Lewisville restaurant, and we cook for Lewisville. Come hungry. Leave a regular.</p>
          <p>Never tried Burmese food? Good. Our staff will walk you through everything. First-timers are our favorite guests.</p>
        </div>
        <div class="story-stat-row">
          <div class="story-stat">
            <div class="num">4.6&#x2605;</div>
            <div class="lbl">Average Rating</div>
          </div>
          <div class="story-stat">
            <div class="num">250+</div>
            <div class="lbl">Guest Reviews</div>
          </div>
          <div class="story-stat">
            <div class="num">40+</div>
            <div class="lbl">Menu Items</div>
          </div>
        </div>
      </div>

      <!-- Sticky parallax photo — bleeds beyond section bottom -->
      <div class="story-photo-col">
        <div class="story-photo-wrap parallax-wrap">
          <div
            ref="imgRef"
            class="story-photo parallax-img"
          />
          <div class="story-photo-overlay" />
          <div class="story-photo-badge">
            <span class="badge-icon">&#x1F373;</span>
            <span class="badge-text">Family Kitchen &middot; Since 2021</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Horizontal scrolling card strip below -->
    <div class="story-cards-strip">
      <div class="strip-track">
        <div
          v-for="card in cards"
          :key="card.n"
          class="story-card reveal"
          :data-n="card.n"
        >
          <h3>{{ card.title }}</h3>
          <p>{{ card.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story {
  background: var(--deep);
  padding: 7rem 0 0;
  position: relative;
  overflow: visible; /* allow photo to bleed down */
}
.story::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--gold), transparent);
}

.story-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 5rem;
  align-items: start;
  position: relative;
}

.story-left {
  padding-bottom: 5rem;
}
.section-label { color: var(--pale-gold); }
.section-title { color: var(--cream); }
.section-title em { color: var(--pale-gold) !important; font-style: italic; }

.story-body {
  font-size: 1.05rem;
  line-height: 1.9;
  color: rgba(245,237,216,0.75);
  margin-top: 1.5rem;
}
.story-body p + p { margin-top: 1.25rem; }

.story-stat-row {
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(201,147,58,0.15);
}
.story-stat .num {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--pale-gold);
  line-height: 1;
}
.story-stat .lbl {
  font-family: var(--font-ornament);
  font-size: 0.62rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(245,237,216,0.5);
  margin-top: 0.4rem;
}

/* Sticky photo column — extends below section */
.story-photo-col {
  position: sticky;
  top: 7rem;
  height: calc(100vh - 9rem);
  max-height: 750px;
}
.story-photo-wrap {
  position: relative;
  height: 100%;
  overflow: hidden;
  /* Bleed 120px beyond section bottom */
  margin-bottom: -120px;
}
.story-photo {
  position: absolute;
  inset: -15%;
  background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85');
  background-size: cover;
  background-position: center 30%;
}
.story-photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(26,15,10,0.2) 0%,
    rgba(139,26,26,0.12) 100%
  );
}
.story-photo-badge {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(26,15,10,0.75);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(201,147,58,0.3);
  padding: 0.6rem 1rem;
}
.badge-icon { font-size: 1.1rem; }
.badge-text {
  font-family: var(--font-ornament);
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
}

/* Horizontal scrolling card strip */
.story-cards-strip {
  margin-top: 4rem;
  overflow: hidden;
}
.strip-track {
  display: flex;
  gap: 1px;
  background: rgba(201,147,58,0.12);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding-left: calc((100vw - 1200px) / 2 + 3rem);
  padding-right: calc((100vw - 1200px) / 2 + 3rem);
}
.strip-track::-webkit-scrollbar { display: none; }

.story-card {
  background: rgba(45,21,16,0.9);
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;
  transition: background 0.3s;
  flex: 0 0 300px;
  scroll-snap-align: start;
}
.story-card:hover { background: rgba(139,26,26,0.2); }
.story-card::before {
  content: attr(data-n);
  position: absolute;
  top: -0.5rem; right: 1rem;
  font-family: var(--font-display);
  font-size: 5rem;
  font-weight: 900;
  color: rgba(201,147,58,0.06);
  line-height: 1;
  pointer-events: none;
}
.story-card h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--pale-gold);
  margin-bottom: 0.6rem;
}
.story-card p { font-size: 0.88rem; line-height: 1.7; color: rgba(245,237,216,0.6); }

@media (max-width: 900px) {
  .story-inner { grid-template-columns: 1fr; gap: 2rem; padding: 0 1.5rem; }
  .story-photo-col { position: static; height: 340px; max-height: none; }
  .story-photo-wrap { margin-bottom: 0; }
  .story-left { padding-bottom: 0; }
  .strip-track { padding-left: 1.5rem; padding-right: 1.5rem; }
}
</style>
