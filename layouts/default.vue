<template>
  <div>
    <HeaderMenu />

    <nuxt />

    <footer class="footer">
      <div class="content has-text-centered ">
        <div class="columns">
          <div class="column">
            <h6>Adresse</h6>
              <br />Stop Talon Serrurerie
              <br />114 Avenue du Général Leclerc
              <br />92340 Bourg-la-Reine
              <br />France
          </div>
          <div class="column">
            <h6>Contact</h6>
              <a href="tel:+331.46.61.82.88" itemprop="telephone"><i class="awesome-phone"></i> 01 46 61 82 88</a>
              <br /><a href="mailto:contact@stoptalonserrurerie.fr" itemprop="telephone"><i class="awesome-email"></i>contact@stoptalonserrurerie.fr</a>
          </div>
          <div class="column">
            <h6>Agréments</h6>
            <datocms-image :data="agrement" />
          </div>
          <div class="column">
            <h6>Certification</h6>
            <datocms-image :data="certification" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'

export default {
  components: {
    HeaderMenu
  },
  data() {
    return {
      navbarOpen: false,
      agrement: {
        "aspectRatio": 6,
        "base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgFCgoLDhgVFQ0NDh0VFh0YIx8lHSIVJiEfKys6Kh0oHRUiJDUlKC0vMjIyJSU4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIigvLy87Ozs7Ozs7Oy8vLy8vLy8vOzs7Ly81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAAQAGAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAABgX/xAAfEAACAQMFAQAAAAAAAAAAAAABAwACBAURgYKR0SH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEA//EABoRAAIDAQEAAAAAAAAAAAAAAAECABExUQP/2gAMAwEAAhEDEQA/ALF+UcKfi7UcT7MS9yT6tdQjqIlUJkmUcktk2hhJrTanaIiLHo9bDMiXk//Z",
        "height": 50,
        "sizes": "(max-width: 300px) 100vw, 300px",
        "src": "https://www.datocms-assets.com/25602/1586518802-certif-iap.png",
        "srcSet": "https://www.datocms-assets.com/25602/1586518802-certif-iap.png?dpr=0.25 75w,https://www.datocms-assets.com/25602/1586518802-certif-iap.png?dpr=0.5 150w,https://www.datocms-assets.com/25602/1586518802-certif-iap.png?dpr=0.75 225w,https://www.datocms-assets.com/25602/1586518802-certif-iap.png 300w",
        "webpSrcSet": "https://www.datocms-assets.com/25602/1586518802-certif-iap.png?dpr=0.25&fm=webp 75w,https://www.datocms-assets.com/25602/1586518802-certif-iap.png?dpr=0.5&fm=webp 150w,https://www.datocms-assets.com/25602/1586518802-certif-iap.png?dpr=0.75&fm=webp 225w,https://www.datocms-assets.com/25602/1586518802-certif-iap.png?fm=webp 300w",
        "width": 300,
        "alt": "",
        "title": "certif-iap"
      },
      certification: {
        "aspectRatio": 2.1636363636363636,
        "base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgPFg0PDg8QCg0QEhUNDQ0YFxMZGBYTFhUaHysjGh0oHSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8oIig7Ly81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAAsAGAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAABQEEBv/EAB4QAAIBBAMBAAAAAAAAAAAAAAABAwIEEiEFIjMR/8QAFQEBAQAAAAAAAAAAAAAAAAAABAP/xAAZEQADAQEBAAAAAAAAAAAAAAAAAQIhQRH/2gAMAwEAAhEDEQA/AN/yHKKaNpCKm6wl+lmZdRbJ6C5wNS6Nqbhy06QEWCWK0BN1pRT6j//Z",
        "height": 55,
        "sizes": "(max-width: 119px) 100vw, 119px",
        "src": "https://www.datocms-assets.com/25602/1586518799-a2pwidth120.jpg",
        "srcSet": "https://www.datocms-assets.com/25602/1586518799-a2pwidth120.jpg?dpr=0.5 59w,https://www.datocms-assets.com/25602/1586518799-a2pwidth120.jpg?dpr=0.75 89w,https://www.datocms-assets.com/25602/1586518799-a2pwidth120.jpg 119w",
        "webpSrcSet": "https://www.datocms-assets.com/25602/1586518799-a2pwidth120.jpg?dpr=0.5&fm=webp 59w,https://www.datocms-assets.com/25602/1586518799-a2pwidth120.jpg?dpr=0.75&fm=webp 89w,https://www.datocms-assets.com/25602/1586518799-a2pwidth120.jpg?fm=webp 119w",
        "width": 119,
        "alt": "",
        "title": "A2P_width120"
      }
    }
  },
}
</script>

<style>
nav.navbar {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
}
</style>

