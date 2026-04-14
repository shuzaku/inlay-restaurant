<script setup lang="ts">
const navBg = ref('rgba(26,15,10,0.85)')

onMounted(() => {
  const onScroll = () => {
    navBg.value =
      window.scrollY > 60 ? 'rgba(26,15,10,0.97)' : 'rgba(26,15,10,0.85)'
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <nav :style="{ background: navBg }">
    <div class="nav-logo">Inlay Burmese Kitchen</div>
    <ul class="nav-links">
      <li><a href="#story">Our Story</a></li>
      <li><a href="#glossary">Discover</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#glossary">Glossary</a></li>
      <li><a href="#visit">Visit</a></li>
    </ul>
    <a href="tel:+19724509999" class="nav-cta">Call Us</a>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 3rem;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  animation: fadeIn 1s ease both;
  transition: background 0.3s;
}
.nav-logo {
  font-family: var(--font-ornament);
  font-size: 1rem;
  letter-spacing: 0.12em;
  color: var(--pale-gold);
  text-transform: uppercase;
}
.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  font-family: var(--font-ornament);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--cream);
}
.nav-links a { opacity: 0.7; transition: opacity 0.2s, color 0.2s; }
.nav-links a:hover { opacity: 1; color: var(--pale-gold); }
.nav-cta {
  font-family: var(--font-ornament);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid var(--gold);
  padding: 0.5rem 1.25rem;
  transition: background 0.25s, color 0.25s;
}
.nav-cta:hover { background: var(--gold); color: var(--ink); }

@media (max-width: 900px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links { display: none; }
}
</style>
