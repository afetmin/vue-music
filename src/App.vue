<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <nav-bar></nav-bar>
    <slider>
      <router-view />
    </slider>
  </div>
</template>
<script>
import Slider from './components/common/Slider.vue'
import MHeader from './components/m-header/MHeader'
import NavBar from './components/NavBar/NavBar'

const MAX_FONT_SIZE = 420
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
  console.log(fontSize)
  html.style.fontSize = fontSize
})

export default {
  components: {
    MHeader,
    NavBar,
    Slider,
  },
}
</script>
<style lang="scss">
#app {
  overflow: hidden;
  // height: 100vh;
}
</style>
