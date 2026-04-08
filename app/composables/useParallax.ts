import type { Ref } from 'vue'

export function useParallax(elRef: Ref<HTMLElement | null>, speed = 0.15) {
  if (import.meta.server) return

  onMounted(() => {
    const onScroll = () => {
      const el = elRef.value
      // Guard: must be a real DOM element with getBoundingClientRect
      if (!el || typeof el.getBoundingClientRect !== 'function') return
      const rect = el.getBoundingClientRect()
      const offset = (window.innerHeight / 2 - rect.top) * speed
      el.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // Defer initial call until after the element is fully painted
    requestAnimationFrame(onScroll)
    onUnmounted(() => window.removeEventListener('scroll', onScroll))
  })
}
