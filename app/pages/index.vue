<script setup lang="ts">
import garlicRiceImg from '~~/assets/images/garlic-rice.jpg'

useReveal()
</script>

<template>
  <div>
    <TheNav />
    <HeroSection />
    <StorySection />
    <MyanmarGallery />
    <DishHighlights />
    <MenuSection />
    <ParallaxDivider
      :image="garlicRiceImg"
      quote="&ldquo;Every dish tells a story of the land, the people, and a thousand years of tradition. Burmese cuisine is Southeast Asia&rsquo;s greatest undiscovered treasure.&rdquo;"
      attr="— On Myanmar's Culinary Heritage"
    />
    <GlossarySection />
    <FeatureSection />
    <ReviewsSection />
    <ParallaxDivider
      image="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=85"
      quote="&ldquo;From the floating gardens of Inle Lake to your table in Lewisville &mdash; the flavors of Myanmar, served with pride.&rdquo;"
      attr="— Inlay Burmese Kitchen"
    />
    <VisitSection />
    <TheFooter />
  </div>
</template>
