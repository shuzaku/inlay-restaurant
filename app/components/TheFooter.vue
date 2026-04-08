<template>
  <footer>
    <div class="footer-inner">
      <div>
        <div class="footer-brand">Inlay Burmese Kitchen</div>
        <p class="footer-tag">Authentic Myanmar cuisine from the shores of Inle Lake, served in the heart of Lewisville, Texas. No experience required &mdash; just curiosity and an appetite.</p>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="#story">Our Story</a></li>
          <li><a href="#learn">Discover the Cuisine</a></li>
          <li><a href="#menu">Signature Dishes</a></li>
          <li><a href="#glossary">Kitchen Glossary</a></li>
          <li><a href="#visit">Visit Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="https://www.facebook.com/inlayburmesekitchen/" target="_blank">Facebook</a></li>
          <li><a href="tel:+19724509999">(972) 450-9999</a></li>
          <li>Dine-In Available</li>
          <li>Takeout Available</li>
          <li>Delivery Available</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">&copy; 2026 Inlay Burmese Kitchen &middot; Lewisville, TX</p>
      <p class="footer-addr">2449 S Stemmons Fwy &middot; Lewisville, TX 75067</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--ink);
  padding: 4rem 3rem 3rem;
  border-top: 1px solid rgba(201,147,58,0.15);
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(201,147,58,0.1);
  margin-bottom: 2rem;
}
.footer-brand { font-family: var(--font-ornament); font-size: 0.85rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--pale-gold); margin-bottom: 1rem; }
.footer-tag { font-size: 0.9rem; line-height: 1.8; color: rgba(245,237,216,0.4); max-width: 300px; }
.footer-col h4 { font-family: var(--font-ornament); font-size: 0.62rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.2rem; }
.footer-col ul { list-style: none; }
.footer-col li { font-size: 0.88rem; color: rgba(245,237,216,0.45); padding: 0.3rem 0; transition: color 0.2s; }
.footer-col li:hover { color: rgba(245,237,216,0.8); }
.footer-bottom { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.footer-copy { font-family: var(--font-ornament); font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(245,237,216,0.25); }
.footer-addr { font-size: 0.8rem; color: rgba(245,237,216,0.25); text-align: right; }

@media (max-width: 900px) {
  .footer-inner { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
