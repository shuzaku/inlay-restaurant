<script setup lang="ts">
const flavors = [
  {
    icon: '🍃',
    name: 'Fermented Tea Leaf',
    sub: 'Lahpet · The National Ingredient',
    desc: 'The soul of Burmese cuisine. Fermented green tea leaves tossed with fried garlic, toasted nuts, dried shrimp, and lime. Sour, savory, bitter, crunchy — all at once.',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
  },
  {
    icon: '🥥',
    name: 'Coconut Broths',
    sub: 'Ohn No Khao Swe',
    desc: 'Rich, golden, fragrant — Burmese coconut soups are layered with turmeric, lemongrass, and fish sauce. Silky, warming, and utterly unlike Thai or Indian coconut curries.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
  },
  {
    icon: '🌶️',
    name: 'Dry Curries',
    sub: 'Si Byan · Oil Returns',
    desc: 'Burmese curries are oil-based, drier, and deeply caramelized. The "oil returns" technique coaxes umami depth from tomatoes, onions, and spices cooked low and slow.',
    img: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80',
  },
  {
    icon: '🧆',
    name: 'Shan Tofu',
    sub: 'Chickpea Curd · Not Soy',
    desc: 'Made from chickpea flour, giving it a silkier, nuttier character. Golden fried, it becomes crisp outside and custard-soft inside.',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
  },
  {
    icon: '🍋',
    name: 'Sour Notes',
    sub: 'Chin · The Brightener',
    desc: 'Tamarind, lime, and fermented pastes thread sourness through Burmese cooking the way salt threads through Western cuisine.',
    img: 'https://images.unsplash.com/photo-1587735243475-37a3b3f1db86?w=400&q=80',
  },
  {
    icon: '🫘',
    name: 'Legume Depth',
    sub: 'Pe Gyaw · Split Peas',
    desc: 'Split peas, yellow lentils, and dried beans appear everywhere — fried crisp as garnish, simmered into soups, or ground into noodles.',
    img: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&q=80',
  },
]

const spreadPhotos = [
  { url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=85', label: 'Lemongrass' },
  { url: 'https://images.unsplash.com/photo-1596097635121-14b38c5d7a60?w=600&q=85', label: 'Turmeric Root' },
  { url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=85', label: 'Burmese Spices' },
  { url: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=85', label: 'Galangal' },
  { url: 'https://images.unsplash.com/photo-1530976782474-22f3dba29e9a?w=600&q=85', label: 'Fish Paste & Herbs' },
]

const speeds = [0.08, 0.14, 0.06, 0.12, 0.1]
// Collect DOM elements via function refs — avoids Vue 3 v-for ref-object binding issue
const spreadEls: (HTMLElement | null)[] = reactive(spreadPhotos.map(() => null))
const setSpreadRef = (el: HTMLElement | null, i: number) => { spreadEls[i] = el }

if (import.meta.client) {
  onMounted(() => {
    const onScroll = () => {
      spreadEls.forEach((el, i) => {
        if (!el || typeof el.getBoundingClientRect !== 'function') return
        const rect = el.getBoundingClientRect()
        const offset = (window.innerHeight / 2 - rect.top) * speeds[i]
        el.style.transform = `translateY(${offset}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    requestAnimationFrame(onScroll)
    onUnmounted(() => window.removeEventListener('scroll', onScroll))
  })
}
</script>

<template>
  <section class="education" id="learn">
    <div class="education-inner">
      <div class="education-header reveal">
        <p class="section-label">Discover Burmese Cuisine</p>
        <h2 class="section-title">What Makes<br><em>Myanmar&rsquo;s Food</em><br>Unforgettable</h2>
        <p>Burmese cuisine sits at the crossroads of India, China, and Southeast Asia &mdash; yet tastes like none of them. It developed in relative isolation, producing flavor combinations that feel both ancient and revelatory.</p>
      </div>

      <!-- Flavor cells with ingredient photo backgrounds -->
      <div class="flavors-wheel reveal">
        <div v-for="flavor in flavors" :key="flavor.name" class="flavor-cell">
          <!-- Ingredient photo at low opacity -->
          <div
            class="flavor-cell-bg"
            :style="{ backgroundImage: `url(${flavor.img})` }"
          />
          <div class="flavor-icon">{{ flavor.icon }}</div>
          <div class="flavor-name">{{ flavor.name }}</div>
          <div class="flavor-sub">{{ flavor.sub }}</div>
          <p class="flavor-desc">{{ flavor.desc }}</p>
        </div>
      </div>

      <div class="divider-ornament reveal"><span>&#x2736;</span></div>
    </div>

    <!-- Full-bleed ingredient spread — breaks out of the container -->
    <div class="ingredient-spread">
      <div
        v-for="(photo, i) in spreadPhotos"
        :key="photo.label"
        class="spread-item"
        :class="`spread-item-${i}`"
      >
        <div class="parallax-wrap spread-wrap">
          <div
            :ref="(el) => setSpreadRef(el as HTMLElement | null, i)"
            class="spread-photo parallax-img"
            :style="{ backgroundImage: `url(${photo.url})` }"
          />
        </div>
        <div class="spread-label">{{ photo.label }}</div>
      </div>
    </div>

    <div class="education-inner">
      <div class="divider-ornament reveal"><span>&#x2736;</span></div>
      <div class="table-note reveal">
        <p class="section-label" style="display:flex;justify-content:center;">The Burmese Table</p>
        <h2 class="section-title">How a Meal <em>Works</em></h2>
        <p>In Myanmar, meals are served all at once &mdash; not in courses. A main curry arrives alongside multiple sides: a clear soup, pickled vegetables, a raw salad, steamed rice, and condiments. Everything is meant to be mixed and balanced at the table. Come hungry. Come curious.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education { background: var(--warm-white); padding: 7rem 0; overflow: hidden; }
.education-inner { max-width: 1200px; margin: 0 auto; padding: 0 3rem; }

.education-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 4rem;
}
.education-header .section-title { color: var(--deep); }
.education-header .section-title em { color: var(--crimson); }
.education-header p { margin-top: 1.2rem; font-size: 1.05rem; line-height: 1.8; color: var(--muted); }

.flavors-wheel {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--border);
  margin-bottom: 3rem;
}
.flavor-cell {
  padding: 2.5rem 2rem;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  transition: background 0.35s;
}
.flavor-cell:nth-child(3n) { border-right: none; }
.flavor-cell:nth-child(n+4) { border-bottom: none; }

/* Ingredient photo behind cell content */
.flavor-cell-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.4s;
}
.flavor-cell:hover .flavor-cell-bg { opacity: 0.18; }
.flavor-cell:hover { background: var(--cream); }
.flavor-cell::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s;
  z-index: 1;
}
.flavor-cell:hover::after { transform: scaleX(1); }

.flavor-icon { font-size: 2rem; margin-bottom: 1rem; position: relative; z-index: 1; }
.flavor-name { font-family: var(--font-display); font-size: 1.25rem; font-weight: 600; color: var(--deep); margin-bottom: 0.5rem; position: relative; z-index: 1; }
.flavor-sub { font-family: var(--font-ornament); font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.8rem; position: relative; z-index: 1; }
.flavor-desc { font-size: 0.88rem; line-height: 1.7; color: var(--muted); position: relative; z-index: 1; }

/* Full-bleed ingredient spread */
.ingredient-spread {
  display: flex;
  align-items: flex-end;
  gap: 0;
  height: 380px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: 3rem;
  overflow: hidden;
}

.spread-item {
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
/* Staggered widths with overlapping negative margins */
.spread-item-0 { width: 28%; z-index: 1; }
.spread-item-1 { width: 24%; margin-left: -3%; z-index: 2; }
.spread-item-2 { width: 30%; margin-left: -4%; z-index: 3; transform: translateY(-20px); }
.spread-item-3 { width: 22%; margin-left: -3%; z-index: 2; transform: translateY(12px); }
.spread-item-4 { width: 26%; margin-left: -3%; z-index: 1; }

.spread-wrap {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.spread-photo {
  position: absolute;
  inset: -15%;
  background-size: cover;
  background-position: center;
}
.spread-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26,15,10,0.65) 0%, transparent 60%);
  z-index: 1;
}

.spread-label {
  position: absolute;
  bottom: 1.2rem;
  left: 1.2rem;
  font-family: var(--font-ornament);
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  z-index: 2;
}

.table-note { text-align: center; max-width: 620px; margin: 0 auto 2rem; }
.table-note .section-title { color: var(--deep); }
.table-note .section-title em { color: var(--crimson); }
.table-note p { margin-top: 1.2rem; font-size: 1.05rem; line-height: 1.8; color: var(--muted); }

@media (max-width: 900px) {
  .education-inner { padding: 0 1.5rem; }
  .flavors-wheel { grid-template-columns: 1fr 1fr; }
  .flavor-cell:nth-child(2n) { border-right: none; }
  .flavor-cell:nth-child(3n) { border-right: 1px solid var(--border); }
  .ingredient-spread { height: 240px; }
  .spread-item-2 { transform: none; }
  .spread-item-3 { transform: none; }
}
@media (max-width: 600px) {
  .flavors-wheel { grid-template-columns: 1fr; }
  .flavor-cell, .flavor-cell:nth-child(3n) { border-right: none; }
  .ingredient-spread { height: 180px; }
}
</style>
