<script setup lang="ts">
import palathaImg from '~~/assets/images/palatha.jpg'

const photoRef = ref<HTMLElement | null>(null)
useParallax(photoRef, 0.1)
</script>

<template>
  <section class="feature">
    <div class="feature-inner">
      <!-- Left: parallax photo with quote overlaid -->
      <div class="feature-visual reveal">
        <div class="feature-photo-wrap parallax-wrap">
          <div
            ref="photoRef"
            class="feature-photo parallax-img"
            :style="{ backgroundImage: `url(${palathaImg})` }"
          />
          <div class="feature-photo-overlay" />
        </div>

        <!-- Quote box floats over the photo -->
        <div class="feature-box">
          <div class="fcorner tl" /><div class="fcorner tr" />
          <div class="fcorner bl" /><div class="fcorner br" />
          <blockquote class="feature-quote">&ldquo;Think of a mix between a buttery croissant and the best tortilla you&rsquo;ve ever eaten. It absolutely crushes naan bread in a head-to-head battle.&rdquo;</blockquote>
          <p class="feature-attr">&mdash; Tim C., Verified Guest Review</p>
        </div>

        <div class="also-miss">
          <p class="section-label" style="color:var(--pale-gold);margin-bottom:0.75rem;">Also Don&rsquo;t Miss</p>
          <div class="miss-list">
            <div class="miss-row"><span>Biryani Chicken Rice</span><span class="miss-note">Herb-layered</span></div>
            <div class="miss-row"><span>Coconut Rice</span><span class="miss-note">Fragrant base</span></div>
            <div class="miss-row border-none"><span>Burmese Milk Tea</span><span class="miss-note">Condensed + evaporated</span></div>
          </div>
        </div>
      </div>

      <!-- Right: text content -->
      <div class="feature-text reveal">
        <p class="section-label">The Bread</p>
        <h2 class="section-title">Order the<br><em>Palatha</em></h2>
        <div class="feature-body">
          <p>If there is one thing every first-time guest must order, it is the Palatha. Descended from Indian paratha but distinctly Burmese in execution &mdash; flaky, buttery, blistered on a hot griddle.</p>
          <p>It tears like a croissant. It folds like a flatbread. It pairs with everything: curries, tea leaf salad, even a cup of Burmese milk tea.</p>
          <p>Pair it with the Pumpkin Chicken Stew for a beginner-perfect combination. Or dip it into the Chili Lamb gravy if you&rsquo;re feeling bold.</p>
        </div>
        <div class="spotlight">
          <div class="sitem">
            <div class="sitem-icon">&#x1FAD3;</div>
            <div>
              <div class="sitem-name">Palatha</div>
              <div class="sitem-desc">Multi-layered Burmese flatbread, griddle-cooked to order</div>
            </div>
          </div>
          <div class="sitem">
            <div class="sitem-icon">&#x1F35A;</div>
            <div>
              <div class="sitem-name">Biryani Chicken Rice</div>
              <div class="sitem-desc">Long-grain rice layered with saffron, herbs, and whole spices</div>
            </div>
          </div>
          <div class="sitem">
            <div class="sitem-icon">&#x1F965;</div>
            <div>
              <div class="sitem-name">Coconut Rice</div>
              <div class="sitem-desc">Fragrant, lightly sweet &mdash; the classic pairing for spiced curries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature { background: var(--deep); padding: 7rem 0; overflow: hidden; }
.feature-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 6rem;
  align-items: center;
}

/* Parallax photo takes full height of left column */
.feature-visual { position: relative; }

.feature-photo-wrap {
  position: relative;
  height: 480px;
  overflow: hidden;
  /* Bleed slightly left of column */
  margin-left: -3rem;
}
.feature-photo {
  position: absolute;
  inset: -15%;
  background-size: cover;
  background-position: center;
}
.feature-photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(45,21,16,0.5) 0%,
    rgba(26,15,10,0.3) 100%
  );
}

/* Quote box overlaps the photo bottom-right corner */
.feature-box {
  position: relative;
  margin-top: -3rem;
  margin-left: 2rem;
  margin-right: -2rem;
  background: rgba(139,26,26,0.18);
  border: 1px solid rgba(201,147,58,0.25);
  padding: 3rem;
  backdrop-filter: blur(4px);
  z-index: 2;
}
.feature-box::before {
  content: '';
  position: absolute;
  top: -1px; left: 3rem; right: 3rem;
  height: 3px;
  background: linear-gradient(to right, transparent, var(--gold), transparent);
}
.feature-quote { font-family: var(--font-display); font-size: 1.25rem; font-style: italic; line-height: 1.65; color: var(--cream); }
.feature-attr { margin-top: 1.25rem; font-family: var(--font-ornament); font-size: 0.62rem; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(201,147,58,0.6); }
.fcorner { position: absolute; width: 28px; height: 28px; border-color: rgba(201,147,58,0.4); border-style: solid; }
.fcorner.tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
.fcorner.tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
.fcorner.bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
.fcorner.br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

.also-miss {
  margin-top: 1.5rem;
  padding: 1.5rem 2rem;
  background: rgba(201,147,58,0.06);
  border: 1px solid rgba(201,147,58,0.15);
}
.miss-list { display: flex; flex-direction: column; gap: 0.4rem; }
.miss-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
  color: rgba(245,237,216,0.7);
  padding: 0.35rem 0;
  border-bottom: 1px solid rgba(201,147,58,0.08);
}
.miss-row.border-none { border-bottom: none; }
.miss-note { color: var(--gold); }

.feature-text .section-label { color: var(--pale-gold); }
.feature-text .section-title { color: var(--cream); }
.feature-text .section-title em { color: var(--pale-gold) !important; }
.feature-body { margin-top: 1.5rem; font-size: 1rem; line-height: 1.85; color: rgba(245,237,216,0.7); }
.feature-body p + p { margin-top: 1rem; }
.spotlight { margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1rem; }
.sitem {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border: 1px solid rgba(201,147,58,0.15);
  transition: border-color 0.25s, background 0.25s;
}
.sitem:hover { border-color: rgba(201,147,58,0.4); background: rgba(201,147,58,0.05); }
.sitem-icon { font-size: 1.5rem; flex-shrink: 0; }
.sitem-name { font-family: var(--font-display); font-size: 0.95rem; font-weight: 600; color: var(--pale-gold); }
.sitem-desc { font-size: 0.82rem; color: rgba(245,237,216,0.5); margin-top: 0.2rem; }

@media (max-width: 900px) {
  .feature-inner { grid-template-columns: 1fr; gap: 3rem; padding: 0 1.5rem; }
  .feature-photo-wrap { margin-left: 0; height: 300px; }
  .feature-box { margin-left: 0; margin-right: 0; }
}
</style>
