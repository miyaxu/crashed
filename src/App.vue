<template>
  <div></div>
</template>

<script>
const miso = require('./miso.js').default

export default {
  name: 'App',
  
  mounted() {
    console.log(miso)

    miso.init('http://www.weather.gov/', {
      isMobile: true
    });
    miso.setSize(200, 300)
    miso.show()
  }
}
</script>

<style>
#chatroomEl {
  border: 1px solid red;
}
</style>