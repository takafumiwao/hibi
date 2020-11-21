<template>
  <v-content>
    <div id="map">
    <Map/>
    </div>
</v-content>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue'

export default {
  name: 'Home',
  components: {
    Map
  }
}
</script>


<style lang="scss">
  #map {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>
