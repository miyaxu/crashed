<template>
  <div>
    <!-- <span>9999999</span>
    <div @click="prompt">123</div>
    <input type="text" /> -->
  </div>
</template>

<script>
const miso = require('./miso.js').default

export default {
  name: 'App',
  
  mounted() {
    console.log(miso)

    miso.init('https://zh.wikipedia.org/wiki/Wiki', {
      isMobile: true
    })
    // miso.setSize(3000, 3000)
    miso.show()
  },
  methods: {
    prompt() {
      console.log('hello')
    }
  }
}
</script>

<style>
html,body {
  margin: 0;           
  padding: 0;
} 
/* #chatroomEl {
  top: 0;
  left: 0;
} */
</style>