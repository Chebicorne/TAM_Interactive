<template>
  <l-map style="height: calc(100vh - 112px);" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
  </l-map>
</template>

<script>
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,LTileLayer
  },
  data() {
    return {
      zoom: 15,
      center: [51.505, -0.159],
      url: 'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
      geojson: {
        type: "FeatureCollection",
        features: [
          // ...
        ],
      },
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.
      },
    };
  },
};

</script>
