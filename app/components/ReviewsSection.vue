<script setup lang="ts">
const bgRef = ref<HTMLElement | null>(null)
useParallax(bgRef, 0.08)

const reviews = [
  {
    text: '"The food was simply outstanding, with each dish being unique and bursting with flavor. Not a single item disappointed us. The fish wrapped in banana leaf — so delicious! The staff went above and beyond."',
    author: 'Shafia A.',
    initial: 'S',
    platform: 'Google Review',
  },
  {
    text: '"Holy smokes! The palatha absolutely crushes naan bread in a 1v1 battle. Think a mix between a buttery croissant and the best tortilla you\'ve ever eaten. 10/10 will be eating here again."',
    author: 'Tim C.',
    initial: 'T',
    platform: 'Google Review',
  },
  {
    text: '"Familiarity with Burmese food is not required — the team is happy to assist. Super friendly and informative about all the dishes. A local gem you absolutely owe it to yourself to visit."',
    author: 'Cameron M.',
    initial: 'C',
    platform: 'Yelp Review',
  },
  {
    text: '"Best hidden gem in Lewisville. The Tea Leaf Salad alone is worth the drive. Everything is made fresh — you can taste the care in every bite. Already planning my return visit."',
    author: 'Priya R.',
    initial: 'P',
    platform: 'Google Review',
  },
  {
    text: '"Absolutely blown away. We ordered six dishes and every single one was exceptional. The coconut noodle soup is transcendent. My partner who \"doesn\'t like Asian food\" ate three bowls."',
    author: 'Marcus L.',
    initial: 'M',
    platform: 'Google Review',
  },
]
</script>

<template>
  <section class="reviews">
    <!-- Full-bleed background photo with parallax -->
    <div class="reviews-bg-wrap parallax-wrap">
      <div
        ref="bgRef"
        class="reviews-bg parallax-img"
      />
      <div class="reviews-bg-overlay" />
    </div>

    <div class="reviews-inner">
      <div class="reviews-header reveal">
        <p class="section-label">What Guests Say</p>
        <h2 class="section-title">Voices from the <em>Table</em></h2>
        <p class="reviews-sub">Over 250 verified reviews &middot; Average 4.6 &#x2605;</p>
      </div>

      <!-- Horizontal scroll carousel -->
      <div class="reviews-carousel">
        <div class="carousel-track">
          <div v-for="review in reviews" :key="review.author" class="review-card reveal">
            <div class="review-accent" />
            <div class="review-stars">
              <span v-for="i in 5" :key="i" class="star">&#x2605;</span>
            </div>
            <p class="review-text">{{ review.text }}</p>
            <div class="review-author">
              <div class="author-av">{{ review.initial }}</div>
              <div>
                <div class="author-name">{{ review.author }}</div>
                <div class="author-src">{{ review.platform }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews {
  background: var(--warm-white);
  padding: 7rem 0;
  position: relative;
  overflow: hidden;
}

/* Background photo at low opacity */
.reviews-bg-wrap {
  position: absolute;
  inset: -15%;
  z-index: 0;
}
.reviews-bg {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80');
  background-size: cover;
  background-position: center;
}
.reviews-bg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(253,248,239,0.93);
}

.reviews-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 1;
}
.reviews-header { text-align: center; margin-bottom: 3rem; }
.reviews-header .section-title { color: var(--deep); }
.reviews-header .section-title em { color: var(--crimson); }
.reviews-sub {
  margin-top: 0.75rem;
  font-family: var(--font-ornament);
  font-size: 0.62rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Centered wrapping grid */
.reviews-carousel {
  width: 100%;
}
.carousel-track {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.review-card {
  background: var(--warm-white);
  padding: 2.5rem 2rem;
  position: relative;
  flex: 0 0 340px;
  max-width: 340px;
  border: 1px solid var(--border);
}
.review-stars { display: flex; gap: 0.2rem; margin-bottom: 1.2rem; }
.star { color: var(--gold); font-size: 0.9rem; }
.review-text { font-size: 0.92rem; line-height: 1.8; color: var(--muted); font-style: italic; margin-bottom: 1.5rem; }
.review-author { display: flex; align-items: center; gap: 0.75rem; }
.author-av {
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--crimson);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 0.9rem; font-weight: 700;
  color: var(--cream); flex-shrink: 0;
}
.author-name { font-family: var(--font-display); font-size: 0.9rem; font-weight: 600; color: var(--deep); }
.author-src { font-family: var(--font-ornament); font-size: 0.58rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); margin-top: 0.15rem; }
.review-accent { position: absolute; top: 0; left: 0; width: 0; height: 3px; background: var(--gold); transition: width 0.4s; }
.review-card:hover .review-accent { width: 100%; }

@media (max-width: 900px) {
  .reviews-inner { padding: 0 1.5rem; }
  .review-card { flex: 0 0 100%; max-width: 100%; }
}
</style>
