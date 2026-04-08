<script setup lang="ts">
const hours = [
  { name: 'Monday', time: 'Closed' },
  { name: 'Tuesday', time: '11am – 9pm' },
  { name: 'Wednesday', time: '11am – 9pm' },
  { name: 'Thursday', time: '11am – 9pm' },
  { name: 'Friday', time: '11am – 9:30pm' },
  { name: 'Saturday', time: '11am – 9:30pm' },
  { name: 'Sunday', time: '11am – 9pm' },
]

const tips = [
  "No reservation required — walk in anytime",
  "Tell the staff it's your first time — they'll guide you",
  "Order the Tea Leaf Salad. Non-negotiable.",
  "Order more than you think — portions are generous",
  "Family-friendly · All major cards accepted",
]

const photoStrip = [
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=85',
    label: 'Fine Dining Experience',
  },
  {
    url: 'https://images.unsplash.com/photo-1552566626-52f8b828329a?w=700&q=85',
    label: 'Welcoming Atmosphere',
  },
  {
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=85',
    label: 'Fresh Every Day',
  },
]
</script>

<template>
  <div>
    <!-- Photo strip with diagonal cuts — full-bleed above the section -->
    <div class="visit-photo-strip">
      <div
        v-for="(photo, i) in photoStrip"
        :key="photo.label"
        class="vstrip-panel"
        :class="`vstrip-panel-${i}`"
      >
        <div
          class="vstrip-bg"
          :style="{ backgroundImage: `url(${photo.url})` }"
        />
        <div class="vstrip-overlay" />
        <div class="vstrip-label">{{ photo.label }}</div>
      </div>
    </div>

    <section class="visit" id="visit">
      <div class="visit-inner">
        <div class="visit-info reveal">
          <p class="section-label">Find Us</p>
          <h2 class="section-title">Come Visit<br><em>Lewisville</em></h2>

          <div class="vdetail">
            <div class="vdetail-icon">&#x1F4CD;</div>
            <div>
              <div class="vdetail-label">Address</div>
              <div class="vdetail-value">
                2449 S Stemmons Fwy, Suite 700<br>
                Lewisville, TX 75067<br>
                <span class="vdetail-note">Near I-35 &middot; Ample free parking</span>
              </div>
            </div>
          </div>

          <div class="vdetail">
            <div class="vdetail-icon">&#x1F550;</div>
            <div>
              <div class="vdetail-label">Hours</div>
              <div class="hgrid">
                <div
                  v-for="day in hours"
                  :key="day.name"
                  class="hrow"
                  :class="{ closed: day.time === 'Closed' }"
                >
                  <span class="hday">{{ day.name }}</span>
                  <span>{{ day.time }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="vdetail">
            <div class="vdetail-icon">&#x260E;&#xFE0F;</div>
            <div>
              <div class="vdetail-label">Contact</div>
              <div class="vdetail-value">
                <a href="tel:+19724509999" class="phone-link">(972) 450-9999</a><br>
                <span class="vdetail-note">Walk-ins welcome &middot; No reservation needed</span>
              </div>
            </div>
          </div>

          <div class="vdetail">
            <div class="vdetail-icon">&#x1F697;</div>
            <div>
              <div class="vdetail-label">Options</div>
              <div class="vdetail-value">Dine-In &middot; Takeout &middot; Delivery Available</div>
            </div>
          </div>
        </div>

        <div class="visit-map reveal">
          <!-- Embedded Google Maps iframe -->
          <div class="map-frame">
            <iframe
              title="Inlay Burmese Kitchen location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.074!2d-97.0050!3d33.0350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c5e2e5e5e5b%3A0x1!2s2449+S+Stemmons+Fwy+%23700%2C+Lewisville%2C+TX+75067!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style="border:0;filter:invert(90%) hue-rotate(180deg) saturate(0.5);"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://maps.google.com/?q=2449+S+Stemmons+Fwy+Lewisville+TX"
            target="_blank"
            class="map-link"
          >Open in Google Maps &rarr;</a>
          <div class="before-you-go">
            <p class="section-label" style="color:var(--pale-gold);margin-bottom:1rem;">Before You Go</p>
            <ul class="tips-list">
              <li v-for="tip in tips" :key="tip">
                <span class="tip-star">&#x2736;</span>{{ tip }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Photo strip above the visit section */
.visit-photo-strip {
  display: flex;
  height: 260px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  background: var(--deep);
}

.vstrip-panel {
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.vstrip-panel-0 {
  width: 38%;
  clip-path: polygon(0 0, 108% 0, 90% 100%, 0 100%);
  z-index: 1;
}
.vstrip-panel-1 {
  width: 36%;
  margin-left: -5%;
  clip-path: polygon(10% 0, 110% 0, 92% 100%, 0 100%);
  z-index: 2;
}
.vstrip-panel-2 {
  flex: 1;
  margin-left: -4%;
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%);
  z-index: 3;
}

.vstrip-bg {
  position: absolute;
  inset: -10%;
  background-size: cover;
  background-position: center;
}
.vstrip-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(45,21,16,0.7) 0%, rgba(26,15,10,0.2) 100%);
}
.vstrip-label {
  position: absolute;
  bottom: 1rem;
  left: 2rem;
  font-family: var(--font-ornament);
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  z-index: 1;
}
.vstrip-panel-1 .vstrip-label { left: 3rem; }

/* Main visit section */
.visit { background: var(--deep); padding: 6rem 0 7rem; overflow: hidden; }
.visit-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
}
.section-label { color: var(--pale-gold); }
.section-title { color: var(--cream); }
.section-title em { color: var(--pale-gold) !important; }

.vdetail {
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(201,147,58,0.12);
}
.vdetail + .vdetail { margin-top: 1.5rem; padding-top: 1.5rem; }
.vdetail-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 0.1rem; }
.vdetail-label { font-family: var(--font-ornament); font-size: 0.6rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.4rem; }
.vdetail-value { font-size: 0.95rem; line-height: 1.7; color: rgba(245,237,216,0.8); }
.vdetail-note { color: rgba(201,147,58,0.6); font-size: 0.82rem; }
.phone-link { color: var(--pale-gold); }

.hgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem 2rem; margin-top: 0.5rem; }
.hrow {
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
  color: rgba(245,237,216,0.65);
  padding: 0.35rem 0;
  border-bottom: 1px solid rgba(201,147,58,0.08);
}
.hrow.closed { color: rgba(245,237,216,0.3); }
.hday { font-family: var(--font-ornament); font-size: 0.65rem; letter-spacing: 0.1em; }

.visit-map { display: flex; flex-direction: column; gap: 1.5rem; }
.map-frame {
  height: 280px;
  overflow: hidden;
  border: 1px solid var(--border);
}
.map-link {
  display: block;
  font-family: var(--font-ornament);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid var(--border);
  padding: 0.75rem 1.5rem;
  text-align: center;
  transition: background 0.25s, border-color 0.25s;
}
.map-link:hover { background: rgba(201,147,58,0.1); border-color: var(--gold); }

.before-you-go { padding: 2rem; background: rgba(45,21,16,0.5); border: 1px solid rgba(201,147,58,0.12); }
.tips-list { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
.tips-list li { font-size: 0.88rem; color: rgba(245,237,216,0.6); display: flex; gap: 0.75rem; }
.tip-star { color: var(--gold); }

@media (max-width: 900px) {
  .visit-photo-strip { height: 180px; }
  .visit-inner { grid-template-columns: 1fr; gap: 3rem; padding: 0 1.5rem; }
  .hgrid { grid-template-columns: 1fr; }
  .vstrip-panel-0 { width: 50%; }
  .vstrip-panel-1 { width: 40%; }
}
</style>
