<template>
  <div id="app">
    <m-header></m-header>
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>
<script>
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
  },
}
</script>
<style lan
NavBarg="scss">
</style>
