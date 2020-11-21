<template>
  <gmap-map :center="center" :zoom="zoom" :options="options" style="height: 100%">
    <gmap-marker v-for="(m,id) in marker_items"
    :position="m.position"
    :title="m.title"
    :clickable="true" :draggable="false"
    :key="id"></gmap-marker>
  </gmap-map>

</template>

<script>
export default {
name: "Map",
data () {
return {
center: {lat: 35.71, lng: 139.72},
zoom: 7,
options: {
  maxZoom: "16", minZoom:"3",
  restriction: {
      latLngBounds: {
          north: 0,
          south: 0,
          west: 0,
          east: 0,
        },
       strictBounds: true,
    }
},
// minZoom: 10,
marker_items: [
{position: {lat: 35.71, lng: 139.72}, title: 'marker_1'},
{position: {lat: 35.72, lng: 139.73}, title: 'marker_2'},
{position: {lat: 35.70, lng: 139.71}, title: 'marker_3'},
{position: {lat: 35.71, lng: 139.70}, title: 'marker_4'}
]
}
}
}
</script>

// <style lang="scss">
// .vue-map-container {
//   top: 0px;
//   left: 0px;
//   position: static;
// }
//
//
// </style>
