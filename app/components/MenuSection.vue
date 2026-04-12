<script setup lang="ts">
const activeTab = ref("all");

const tabs = [
  "all",
  "starters",
  "mains",
  "salads",
  "noodles",
  "breads",
  "drinks",
];
const tabLabels: Record<string, string> = {
  all: "All",
  starters: "Starters",
  mains: "Mains",
  salads: "Salads",
  noodles: "Noodles",
  breads: "Breads & Rice",
  drinks: "Drinks",
};

const dishes = [
  {
    num: "01",
    cat: "starters",
    wide: false,
    name: "Tea Leaf Salad",
    burmese: "Lahpet Thoke",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80",
    desc: "Sour, crunchy, savory, and addictive — fermented tea leaves tossed with a dozen textures you won't find anywhere else in DFW. Order this first. Always.",
    tags: ["Iconic", "Must-Try"],
  },
  {
    num: "02",
    cat: "starters",
    wide: false,
    name: "Golden Fried Shan Tofu",
    burmese: "Tohu Kyaw",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80",
    desc: "Crisp golden shell, silky center, with a sweet-chili sauce guests keep asking for by the jar. Even people who say they don't like tofu like this.",
    tags: ["Vegetarian", "Crispy"],
  },
  {
    num: "03",
    cat: "starters",
    wide: false,
    name: "Burmese Samosa",
    burmese: "Samosa Thoke",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&q=80",
    desc: "Thick, golden, packed with spiced potato — the kind of samosa that makes you forget every other samosa you've had. Perfect with tamarind chutney.",
    tags: ["Vegetarian", "Hearty"],
  },
  {
    num: "04",
    cat: "starters",
    wide: true,
    name: "Lemongrass Prawn",
    burmese: "Pazun Hin",
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=900&q=85",
    desc: "Plump prawns soaked in lemongrass and kaffir lime — bright, fragrant, and gone before you know it. Light enough to start, memorable enough to reorder.",
    tags: ["Seafood", "Aromatic"],
  },
  {
    num: "05",
    cat: "starters",
    wide: false,
    name: "Split Pea Fritters",
    burmese: "Pe Gyaw",
    img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=300&q=80",
    desc: "Shatteringly crisp outside, earthy and warm within. Great on their own, even better crumbled over a bowl of broth.",
    tags: ["Vegetarian", "Street Food"],
  },
  {
    num: "06",
    cat: "mains",
    wide: false,
    name: "Chili Lamb",
    burmese: "Seik Thar Hin",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=300&q=80",
    desc: "Fall-apart lamb in a brick-red gravy that builds slowly and lingers long. Bold without burning — the dish guests mention when they come back.",
    tags: ["Spicy", "Fan Favorite"],
  },
  {
    num: "07",
    cat: "mains",
    wide: false,
    name: "Pumpkin Chicken Stew",
    burmese: "Thee Kwa Hin",
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&q=80",
    desc: "Sweet pumpkin melting into golden turmeric broth with tender bone-in chicken. Warm, gentle, and the perfect first dish if this is your first visit.",
    tags: ["Comfort", "Mild", "Beginner-Friendly"],
  },
  {
    num: "08",
    cat: "mains",
    wide: true,
    name: "Pork Belly & Mustard Greens",
    burmese: "Wet Thar Hin Nway",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85",
    desc: "Pork belly so tender it gives at a glance, balanced by fermented mustard greens with just enough bite. Rich, funky, and deeply satisfying.",
    tags: ["Rich", "Umami"],
  },
  {
    num: "09",
    cat: "mains",
    wide: false,
    name: "Basil Chicken",
    burmese: "Kyet Thar Hin",
    img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&q=80",
    desc: "Fragrant with fresh basil and charred at the edges — the dish that smells like it was made just for you. Best with a bowl of coconut rice.",
    tags: ["Wok-Fired", "Aromatic"],
  },
  {
    num: "10",
    cat: "mains",
    wide: false,
    name: "Tamarind Chicken",
    burmese: "Ma Chin Kyet",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300&q=80",
    desc: "Sticky, sweet, sour, and impossible to stop eating. The tamarind glaze clings to every piece and the chilies keep you coming back.",
    tags: ["Tangy", "Bold"],
  },
  {
    num: "11",
    cat: "mains",
    wide: false,
    name: "Lemongrass Fish Curry",
    burmese: "Nga Hin",
    img: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=300&q=80",
    desc: "Delicate fish in a fragrant golden broth that smells like a garden. Light, clean, and the kind of thing you'd eat every week if you could.",
    tags: ["Seafood", "Light"],
  },
  {
    num: "12",
    cat: "salads",
    wide: false,
    name: "Spicy Mango Salad",
    burmese: "Thayet Thoke",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&q=80",
    desc: "Tart green mango, heat, crunch, and a lime punch that wakes up everything on the table. Bright, bold, and gone in minutes.",
    tags: ["Sour", "Spicy"],
  },
  {
    num: "13",
    cat: "salads",
    wide: false,
    name: "Adam Tea Leaf Salad",
    burmese: "Lahpet Thoke Special",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80",
    desc: "Our house version — apple slices cut through the fermented richness in the best possible way. The salad that converts skeptics.",
    tags: ["House Special"],
  },
  {
    num: "14",
    cat: "salads",
    wide: false,
    name: "Pennywort Salad",
    burmese: "Myin Khwa Ywet Thoke",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&q=80",
    desc: "Bright green, herbaceous, and tossed with toasted coconut and fried garlic until it smells incredible. Lighter than it looks, more filling than you expect.",
    tags: ["Vegetarian", "Herbal"],
  },
  {
    num: "15",
    cat: "noodles",
    wide: true,
    name: "Coconut Noodle Soup",
    burmese: "Ohn No Khao Swe",
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900&q=85",
    desc: "Egg noodles in a silky golden coconut broth, topped with crispy noodles, a soft-boiled egg, and fresh lime. The bowl you'll be thinking about on the drive home.",
    tags: ["Rich", "Warming"],
  },
  {
    num: "16",
    cat: "noodles",
    wide: false,
    name: "Myeik Pan Fried Noodles",
    burmese: "Myeik Khauk Swe Kyaw",
    img: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=300&q=80",
    desc: "Thick rice noodles charred at the edges and coated in savory sauce. Smoky, slippery, and the kind of noodle dish that disappears before you've decided if you like it.",
    tags: ["Wok-Fired", "Smoky"],
  },
  {
    num: "17",
    cat: "noodles",
    wide: false,
    name: "Shan Noodles",
    burmese: "Shan Khauk Swe",
    img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=300&q=80",
    desc: "Thin rice noodles in a clean savory broth with tomato and peanut oil. Quiet confidence in a bowl — the kind of simple that takes years to get right.",
    tags: ["Light", "Clean"],
  },
  {
    num: "18",
    cat: "breads",
    wide: false,
    name: "Palatha",
    burmese: "Burmese Flatbread",
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&q=80",
    desc: "Flaky, buttery, griddle-blistered to order. Guests have called it the best bread they've ever eaten. Order one. You'll order another.",
    tags: ["Signature", "Must-Order"],
  },
  {
    num: "19",
    cat: "breads",
    wide: false,
    name: "Biryani Chicken Rice",
    burmese: "Danpauk",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80",
    desc: "Long-grain rice fragrant with saffron and whole spices, layered over tender chicken. A meal on its own, stunning alongside a curry.",
    tags: ["Fragrant", "Filling"],
  },
  {
    num: "20",
    cat: "drinks",
    wide: false,
    name: "Burmese Milk Tea",
    burmese: "Laphet Yay Gyo",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
    desc: "Sweet, creamy, and strong — the only right way to finish a meal here. Order it cold on a hot Texas day.",
    tags: ["Sweet", "Signature"],
  },
];

const visibleDishes = computed(() =>
  dishes.filter((d) => activeTab.value === "all" || d.cat === activeTab.value),
);
</script>

<template>
  <section class="menu-sec" id="menu">
    <div class="menu-inner">
      <div class="menu-header">
        <div>
          <p class="section-label">The Kitchen</p>
          <h2 class="section-title">Signature <em>Dishes</em></h2>
        </div>
        <div class="menu-tabs">
          <button
            v-for="tab in tabs"
            :key="tab"
            class="tab-btn"
            :class="{ active: activeTab === tab }"
            @click="activeTab = tab"
          >
            {{ tabLabels[tab] }}
          </button>
        </div>
      </div>

      <div class="dish-grid">
        <div
          v-for="dish in visibleDishes"
          :key="dish.num"
          class="dish-card"
          :class="{ 'dish-card--wide': dish.wide }"
        >
          <!-- Wide card hero image -->
          <div
            v-if="dish.wide"
            class="dish-hero-img"
            :style="{ backgroundImage: `url(${dish.img})` }"
          >
            <div class="dish-hero-overlay" />
          </div>

          <!-- Small thumbnail for standard cards -->
          <div
            v-else
            class="dish-thumb"
            :style="{ backgroundImage: `url(${dish.img})` }"
          />

          <div class="dish-card-accent" />
          <div class="dish-num">
            {{ dish.num }} &mdash; {{ tabLabels[dish.cat] }}
          </div>
          <h3 class="dish-name">{{ dish.name }}</h3>
          <p class="dish-burmese">{{ dish.burmese }}</p>
          <p class="dish-desc">{{ dish.desc }}</p>
          <div class="dish-tags">
            <span v-for="tag in dish.tags" :key="tag" class="tag">{{
              tag
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu-sec {
  background: var(--ink);
  padding: 7rem 0;
  position: relative;
  overflow: hidden;
}
.menu-sec::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(
      ellipse 70% 50% at 20% 50%,
      rgba(139, 26, 26, 0.15) 0%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 50% 60% at 80% 80%,
      rgba(201, 147, 58, 0.08) 0%,
      transparent 60%
    );
  pointer-events: none;
}
.menu-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;
}
.section-label {
  color: var(--pale-gold);
}
.section-title {
  color: var(--cream);
}
.section-title em {
  color: var(--pale-gold) !important;
}

.menu-tabs {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.tab-btn {
  font-family: var(--font-ornament);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 237, 216, 0.5);
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition:
    color 0.2s,
    border-color 0.2s;
}
.tab-btn:hover {
  color: var(--pale-gold);
}
.tab-btn.active {
  color: var(--pale-gold);
  border-color: var(--gold);
}

.dish-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(201, 147, 58, 0.12);
}

/* Standard card */
.dish-card {
  background: rgba(26, 15, 10, 0.95);
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;
  transition: background 0.3s;
}
.dish-card:hover {
  background: rgba(45, 21, 16, 0.95);
}

/* Wide card — spans 2 columns */
.dish-card--wide {
  grid-column: span 2;
}

/* Hero image inside wide card */
.dish-hero-img {
  position: relative;
  width: calc(100% + 4rem);
  margin: -2.5rem -2rem 2rem;
  height: 220px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.dish-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    rgba(26, 15, 10, 0.95) 100%
  );
}

/* Small thumbnail on regular cards */
.dish-thumb {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 72px;
  height: 72px;
  border-radius: 2px;
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(201, 147, 58, 0.2);
  opacity: 0.7;
  transition: opacity 0.3s;
}
.dish-card:hover .dish-thumb {
  opacity: 1;
}

.dish-num {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(201, 147, 58, 0.35);
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}
.dish-name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--cream);
  margin-bottom: 0.3rem;
  line-height: 1.2;
  padding-right: 5.5rem; /* avoid thumb overlap on standard cards */
}
.dish-card--wide .dish-name {
  padding-right: 0;
}

.dish-burmese {
  font-family: var(--font-ornament);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.2rem;
}
.dish-desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: rgba(245, 237, 216, 0.6);
  margin-bottom: 1.5rem;
}
.dish-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.tag {
  font-family: var(--font-ornament);
  font-size: 0.56rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.3rem 0.7rem;
  border: 1px solid rgba(201, 147, 58, 0.25);
  color: rgba(201, 147, 58, 0.7);
}
.dish-card-accent {
  position: absolute;
  top: 0;
  right: 0;
  width: 3px;
  height: 0;
  background: var(--gold);
  transition: height 0.4s;
}
.dish-card:hover .dish-card-accent {
  height: 100%;
}

@media (max-width: 900px) {
  .menu-inner {
    padding: 0 1.5rem;
  }
  .menu-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  .menu-tabs {
    justify-content: flex-start;
  }
  .dish-grid {
    grid-template-columns: 1fr 1fr;
  }
  .dish-card--wide {
    grid-column: span 2;
  }
}
@media (max-width: 600px) {
  .dish-grid {
    grid-template-columns: 1fr;
  }
  .dish-card--wide {
    grid-column: span 1;
  }
  .dish-hero-img {
    height: 160px;
  }
  .dish-thumb {
    display: none;
  }
  .dish-name {
    padding-right: 0;
  }
}
</style>
