export function useReveal() {
  if (import.meta.server) return

  onMounted(() => {
    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const siblings = Array.from(
            entry.target.parentElement!.querySelectorAll('.reveal')
          )
          const idx = siblings.indexOf(entry.target as Element)
          ;(entry.target as HTMLElement).style.transitionDelay = idx * 0.08 + 's'
          entry.target.classList.add('in-view')
          obs.unobserve(entry.target)
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => obs.observe(el))

    onUnmounted(() => obs.disconnect())
  })
}
