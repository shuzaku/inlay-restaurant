<script setup lang="ts">
defineProps<{
  image: string
  quote: string
  attr?: string
}>()
</script>

<template>
  <div class="parallax-divider">
    <div class="pd-bg">
      <img class="pd-bg-img" :src="image" alt="" loading="lazy" decoding="async" />
    </div>
    <div class="pd-overlay" />
    <div class="pd-content">
      <div class="pd-ornament">&#x2736;</div>
      <blockquote class="pd-quote">{{ quote }}</blockquote>
      <p v-if="attr" class="pd-attr">{{ attr }}</p>
    </div>
  </div>
</template>

<style scoped>
.parallax-divider {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Cover image (img avoids background-attachment:fixed bugs with overflow-x:hidden / Safari) */
.pd-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.pd-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.pd-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26,15,10,0.68);
}

.pd-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 780px;
  padding: 0 3rem;
}
.pd-ornament {
  font-size: 1.5rem;
  color: var(--gold);
  margin-bottom: 1.5rem;
  animation: shimmer 3s ease-in-out infinite;
}
.pd-quote {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3vw, 2.1rem);
  font-style: italic;
  font-weight: 600;
  color: var(--cream);
  line-height: 1.55;
  text-shadow: 0 2px 20px rgba(26,15,10,0.7);
}
.pd-attr {
  margin-top: 1.5rem;
  font-family: var(--font-ornament);
  font-size: 0.62rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold);
}


@media (max-width: 600px) {
  .parallax-divider { height: 50vh; }
}
</style>
