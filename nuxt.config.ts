// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Inlay Burmese Kitchen | Authentic Myanmar Food in Lewisville, TX',
      templateParams: {
        siteName: 'Inlay Burmese Kitchen',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

        // Primary SEO
        { name: 'description', content: 'Inlay Burmese Kitchen serves authentic Myanmar cuisine in Lewisville, TX. Family-run, cooked to order — Tea Leaf Salad, Coconut Noodle Soup, Palatha, and more. DFW\'s best-kept secret.' },
        { name: 'keywords', content: 'Burmese restaurant Lewisville TX, Myanmar food DFW, tea leaf salad, lahpet thoke, coconut noodle soup, palatha, Burmese food near me, authentic Myanmar cuisine Texas' },
        { name: 'author', content: 'Inlay Burmese Kitchen' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph (Facebook, LinkedIn, general link previews)
        { property: 'og:type', content: 'restaurant' },
        { property: 'og:site_name', content: 'Inlay Burmese Kitchen' },
        { property: 'og:title', content: 'Inlay Burmese Kitchen | Authentic Myanmar Food in Lewisville, TX' },
        { property: 'og:description', content: 'Family-run Burmese kitchen serving bold, layered flavors of Myanmar in Lewisville, Texas. Cooked to order, every time.' },
        { property: 'og:image', content: '/images/hero.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Inlay Burmese Kitchen — authentic Myanmar food in Lewisville, TX' },
        { property: 'og:url', content: 'https://inlayburmesekitchen.com' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Inlay Burmese Kitchen | Authentic Myanmar Food in Lewisville, TX' },
        { name: 'twitter:description', content: 'Family-run Burmese kitchen serving bold, layered flavors of Myanmar in Lewisville, Texas. Cooked to order, every time.' },
        { name: 'twitter:image', content: '/images/hero.jpg' },

        // Geo / Local SEO
        { name: 'geo.region', content: 'US-TX' },
        { name: 'geo.placename', content: 'Lewisville, Texas' },
      ],
      link: [
        { rel: 'canonical', href: 'https://inlayburmesekitchen.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Lora:ital,wght@0,400;0,500;1,400&family=Cinzel:wght@400;600&display=swap',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: 'Inlay Burmese Kitchen',
            description: 'Authentic Myanmar cuisine served family-style in Lewisville, Texas. Tea Leaf Salad, Coconut Noodle Soup, Palatha, and more — cooked to order.',
            url: 'https://inlayburmesekitchen.com',
            image: 'https://inlayburmesekitchen.com/images/hero.jpg',
            servesCuisine: ['Burmese', 'Myanmar', 'Asian'],
            priceRange: '$$',
            hasMenu: 'https://inlayburmesekitchen.com/#menu',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Lewisville',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
            openingHoursSpecification: [
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'], opens: '11:00', closes: '21:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday'], opens: '11:00', closes: '21:30' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '12:00', closes: '20:00' },
            ],
            sameAs: [],
          }),
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})
