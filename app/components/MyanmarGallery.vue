<script setup lang="ts">
const panel1Ref = ref<HTMLElement | null>(null)
const panel2Ref = ref<HTMLElement | null>(null)
const panel3Ref = ref<HTMLElement | null>(null)

useParallax(panel1Ref, 0.08)
useParallax(panel2Ref, 0.14)
useParallax(panel3Ref, 0.06)

const panels = [
  {
    url: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=85',
    label: 'Inle Lake',
    sub: 'Shan State · Myanmar',
  },
  {
    url: 'https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=900&q=85',
    label: 'Ancient Pagodas',
    sub: 'Bagan · 11th Century',
  },
  {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    label: 'Street Kitchen',
    sub: 'Yangon · Daily Life',
  },
]
</script>

<template>
  <div class="gallery-wrap">
    <!-- Full-bleed 3-panel diagonal layout — panels written explicitly to keep direct ref bindings -->
    <div class="gallery-panels">
      <div class="gallery-panel panel-0">
        <div
          ref="panel1Ref"
          class="panel-bg parallax-img"
        >
          <img class="panel-bg-img" :src="panels[0].url" alt="" loading="lazy" decoding="async" />
        </div>
        <div class="panel-overlay" />
        <div class="panel-info">
          <div class="panel-label">{{ panels[0].label }}</div>
          <div class="panel-sub">{{ panels[0].sub }}</div>
        </div>
      </div>
      <div class="gallery-panel panel-1">
        <div
          ref="panel2Ref"
          class="panel-bg parallax-img"
        >
          <img class="panel-bg-img" :src="panels[1].url" alt="" loading="lazy" decoding="async" />
        </div>
        <div class="panel-overlay" />
        <div class="panel-info">
          <div class="panel-label">{{ panels[1].label }}</div>
          <div class="panel-sub">{{ panels[1].sub }}</div>
        </div>
      </div>
      <div class="gallery-panel panel-2">
        <div
          ref="panel3Ref"
          class="panel-bg parallax-img"
        >
          <img class="panel-bg-img" :src="panels[2].url" alt="" loading="lazy" decoding="async" />
        </div>
        <div class="panel-overlay" />
        <div class="panel-info">
          <div class="panel-label">{{ panels[2].label }}</div>
          <div class="panel-sub">{{ panels[2].sub }}</div>
        </div>
      </div>
    </div>

    <!-- Floating center text over seam -->
    <div class="gallery-center-text">
      <div class="gallery-ornament">&#x2736;</div>
      <h2 class="gallery-headline">The Golden Land <em>&middot; Myanmar</em></h2>
      <p class="gallery-caption">Where every meal tells a thousand years of story</p>
    </div>
  </div>
</template>

<style scoped>
.gallery-wrap {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 72vh;
  min-height: 500px;
  overflow: hidden;
}

.gallery-panels {
  display: flex;
  height: 100%;
  width: 100%;
}

.gallery-panel {
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

/* Asymmetric widths + diagonal clip-paths between panels */
.panel-0 {
  width: 42%;
  clip-path: polygon(0 0, 110% 0, 92% 100%, 0 100%);
  z-index: 1;
}
.panel-1 {
  width: 38%;
  margin-left: -6%;
  clip-path: polygon(8% 0, 112% 0, 94% 100%, 0 100%);
  z-index: 2;
}
.panel-2 {
  width: 32%;
  margin-left: -4%;
  clip-path: polygon(6% 0, 100% 0, 100% 100%, 0 100%);
  z-index: 3;
}

.panel-bg {
  position: absolute;
  inset: -20%;
  overflow: hidden;
  transition: transform 0.1s linear;
}
.panel-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
}

.panel-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(26, 15, 10, 0.2);
  background-image: linear-gradient(
    to top,
    rgba(26,15,10,0.75) 0%,
    rgba(26,15,10,0.2) 50%,
    rgba(26,15,10,0.35) 100%
  );
  z-index: 1;
}

.panel-info {
  position: absolute;
  bottom: 2.5rem;
  left: 3rem;
  z-index: 2;
}
.panel-0 .panel-info { left: 3rem; }
.panel-1 .panel-info { left: 5rem; }
.panel-2 .panel-info { left: 4rem; }

.panel-label {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--cream);
  margin-bottom: 0.3rem;
}
.panel-sub {
  font-family: var(--font-ornament);
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
}

/* Floating text overlay centered over the full gallery */
.gallery-center-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  pointer-events: none;
}
.gallery-ornament {
  font-size: 1.4rem;
  color: var(--gold);
  margin-bottom: 0.75rem;
  animation: shimmer 3s ease-in-out infinite;
}
.gallery-headline {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: 900;
  color: var(--cream);
  text-shadow: 0 2px 24px rgba(26,15,10,0.8);
  white-space: nowrap;
}
.gallery-headline em {
  font-style: italic;
  color: var(--pale-gold);
}
.gallery-caption {
  margin-top: 0.75rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-style: italic;
  color: rgba(245,237,216,0.7);
  text-shadow: 0 1px 12px rgba(26,15,10,0.9);
}

@media (max-width: 900px) {
  .gallery-wrap { height: 55vh; }
  .gallery-panels { flex-direction: column; }
  .panel-0, .panel-1, .panel-2 {
    width: 100%;
    height: 33.333%;
    margin-left: 0;
    clip-path: none;
  }
  .gallery-center-text { width: 90%; }
  .gallery-headline { white-space: normal; font-size: 1.5rem; }
}
</style>
