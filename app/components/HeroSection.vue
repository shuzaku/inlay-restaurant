<script setup lang="ts">
const foodRef = ref<HTMLElement | null>(null)
const bgRef = ref<HTMLElement | null>(null)

useParallax(bgRef, 0.25)
useParallax(foodRef, 0.08)

const ingredients = [
  {
    url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&q=80',
    label: 'Fermented Tea',
  },
  {
    url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80',
    label: 'Lemongrass',
  },
  {
    url: 'https://images.unsplash.com/photo-1596097635121-14b38c5d7a60?w=300&q=80',
    label: 'Turmeric',
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80',
    label: 'Coconut',
  },
  {
    url: 'https://images.unsplash.com/photo-1587735243475-37a3b3f1db86?w=300&q=80',
    label: 'Tamarind',
  },
]
</script>

<template>
  <section class="hero">
    <!-- Parallax photo background -->
    <div class="hero-bg-wrap parallax-wrap">
      <div
        ref="bgRef"
        class="hero-bg parallax-img"
      />
    </div>

    <!-- Dark overlay + pattern -->
    <div class="hero-overlay" />
    <div class="hero-pattern" />

    <div class="hero-left">
      <p class="hero-eyebrow">Authentic Myanmar Cuisine &middot; Lewisville, TX</p>
      <h1 class="hero-title">A Hidden<br><em>Treasure</em>of Burma</h1>
      <p class="hero-sub">Myanmar &middot; Since 2021</p>
      <p class="hero-desc">
        Most people have never tried Burmese food. That&rsquo;s exactly why you should.
        Bold spices, layered broths, unexpected textures &mdash; Myanmar&rsquo;s cuisine is
        Southeast Asia&rsquo;s best-kept secret. Let us be your guide.
      </p>
      <div class="hero-actions">
        <a href="#menu" class="btn-primary">Explore the Menu</a>
        <a href="#learn" class="btn-ghost">Learn the Cuisine</a>
      </div>
    </div>

    <div class="hero-right">
      <!-- Eye-popping food photo panel -->
      <div class="hero-food-wrap parallax-wrap">
        <div
          ref="foodRef"
          class="hero-food parallax-img"
        />
        <!-- Left-side gradient bleed into the dark text area -->
        <div class="hero-food-fade" />
        <!-- Floating dish label -->
        <div class="hero-food-label">
          <span class="food-label-line" />
          <span class="food-label-text">Tea Leaf Salad &mdash; Lahpet Thoke</span>
        </div>
      </div>
    </div>

    <!-- Ingredient strip -->
    <div class="ingredient-strip">
      <div
        v-for="(ing, i) in ingredients"
        :key="ing.label"
        class="ingredient-pill"
        :style="{ animationDelay: `${1 + i * 0.15}s` }"
      >
        <div
          class="ingredient-img"
          :style="{ backgroundImage: `url(${ing.url})` }"
        />
        <span class="ingredient-label">{{ ing.label }}</span>
      </div>
    </div>

    <div class="scroll-hint">
      <span>Discover</span>
      <div class="scroll-arrow" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  position: relative;
  overflow: hidden;
}

/* Full-bleed parallax photo layer */
.hero-bg-wrap {
  position: absolute;
  inset: -15%;
  z-index: 0;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=85');
  background-size: cover;
  background-position: center 40%;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(26,15,10,0.92) 0%,
    rgba(26,15,10,0.75) 50%,
    rgba(26,15,10,0.55) 100%
  );
  z-index: 1;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(ellipse 80% 60% at 65% 50%, rgba(139,26,26,0.22) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 80% 20%, rgba(201,147,58,0.15) 0%, transparent 60%);
  z-index: 1;
}

.hero-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  z-index: 2;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9933a'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 5rem 6rem 6rem;
  position: relative;
  z-index: 3;
}
.hero-eyebrow {
  font-family: var(--font-ornament);
  font-size: 0.68rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.5rem;
  animation: fadeUp 0.8s ease 0.2s both;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3.2rem, 5.5vw, 5.5rem);
  font-weight: 900;
  line-height: 1.0;
  color: var(--cream);
  margin-bottom: 0.5rem;
  animation: fadeUp 0.8s ease 0.4s both;
}
.hero-title em { display: block; font-style: italic; color: var(--pale-gold); font-weight: 400; }
.hero-sub {
  font-family: var(--font-ornament);
  font-size: 0.72rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 2.5rem;
  animation: fadeUp 0.8s ease 0.55s both;
}
.hero-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(245,237,216,0.78);
  max-width: 440px;
  margin-bottom: 3rem;
  animation: fadeUp 0.8s ease 0.7s both;
}
.hero-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  animation: fadeUp 0.8s ease 0.85s both;
}

/* Right column — large food photo, bleeds past grid edge */
.hero-right {
  position: relative;
  z-index: 3;
  overflow: hidden;
  margin-right: -6rem; /* aggressive bleed past right edge */
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%); /* diagonal left cut */
}

/* Food photo container */
.hero-food-wrap {
  position: absolute;
  inset: -20%;
  animation: scaleIn 1.4s ease 0.3s both;
}
.hero-food {
  position: absolute;
  inset: 0;
  /* Vibrant overhead shot of tea leaf salad — jewel-toned, rich colors */
  background-image: url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1400&q=95');
  background-size: cover;
  background-position: center center;
}

/* Bleed the left edge of the photo into the dark hero bg */
.hero-food-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(26,15,10,0.85) 0%,
    rgba(26,15,10,0.3) 20%,
    transparent 45%
  );
  pointer-events: none;
}

/* Floating dish label pinned to bottom-left of the photo */
.hero-food-label {
  position: absolute;
  bottom: 7rem;
  left: 3rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: fadeUp 0.8s ease 1.1s both;
}
.food-label-line {
  display: block;
  width: 28px;
  height: 1px;
  background: var(--gold);
  flex-shrink: 0;
}
.food-label-text {
  font-family: var(--font-ornament);
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(201,147,58,0.75);
  white-space: nowrap;
}

/* Ingredient strip — spans full bottom width, breaks out of the column grid */
.ingredient-strip {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 6rem;
  background: rgba(26,15,10,0.6);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(201,147,58,0.2);
  position: relative;
  z-index: 3;
  overflow-x: auto;
  scrollbar-width: none;
}
.ingredient-strip::-webkit-scrollbar { display: none; }

.ingredient-pill {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;
  animation: slideInRight 0.6s ease both;
}
.ingredient-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(201,147,58,0.35);
  flex-shrink: 0;
}
.ingredient-label {
  font-family: var(--font-ornament);
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(245,237,216,0.55);
  white-space: nowrap;
}

.scroll-hint {
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-ornament);
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(201,147,58,0.6);
  animation: fadeIn 1s ease 1.5s both;
}
.scroll-arrow {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 50vw auto;
  }
  .hero-left { padding: 7rem 2rem 3rem; }
  .hero-right {
    margin-right: 0;
    clip-path: none;
    min-height: 50vw;
    position: relative;
  }
  .hero-food-wrap { inset: 0; animation: none; }
  .hero-food-fade {
    background: linear-gradient(
      to bottom,
      rgba(26,15,10,0.6) 0%,
      transparent 40%,
      transparent 80%,
      rgba(26,15,10,0.4) 100%
    );
  }
  .hero-food-label { bottom: 2rem; left: 1.5rem; }
  .ingredient-strip { padding: 1.25rem 1.5rem; }
  .scroll-hint { bottom: 6rem; }
}
@media (max-width: 600px) {
  .hero-title { font-size: 2.6rem; }
}
</style>
