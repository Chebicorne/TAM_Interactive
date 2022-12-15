<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import stops from "@/assets/data/stops.json";
import L from "leaflet";
let baseMap = {
  zoom: 15,
  center: [43.6262278395, 3.8832115119],
  url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
};

let baseApiUrl = "https://montpellier-tam-api.vercel.app/api/query?";
async function asyncData(stop_name, stop_sens) {
  let result = [];
  try {
    let response = await fetch(`${baseApiUrl}stop_name=${stop_name.value}`);
    let data = await response.json();

    // Initialize result.value as an empty array
    result.value = [];

    if (stop_sens.value === "R") {
      data.result.forEach(function (obj) {
        if (obj.direction_id == 1) {
          result.value.push(obj);
        }
      });
    } else {
      data.result.forEach(function (obj) {
        if (obj.direction_id == 0) {
          result.value.push(obj);
        }
      });
    }
    return result;
  } catch (error) {
    console.error(error);
  }
}

function lineIcon(pp) {
  if (pp.t1 == "X") {
    return L.icon({
      iconUrl: "/icons/Line1.png",
      iconSize: [32, 32],
      iconAnchor: [16, 37],
    });
  } else if (pp.t2 == "X") {
    return L.icon({
      iconUrl: "/icons/Line2.png",
      iconSize: [32, 32],
      iconAnchor: [16, 37],
    });
  } else if (pp.t3 == "X") {
    return L.icon({
      iconUrl: "/icons/Line3.png",
      iconSize: [32, 32],
      iconAnchor: [16, 37],
    });
  } else {
    return L.icon({
      iconUrl: "/icons/Line4.png",
      iconSize: [32, 32],
      iconAnchor: [16, 37],
    });
  }
}
</script>

<template>
  <l-map
    style="height: calc(100vh - 112px)"
    :zoom="baseMap.zoom"
    :center="baseMap.center"
  >
    <l-tile-layer :url="baseMap.url"></l-tile-layer>
    <l-marker
      :key="stop.id"
      v-for="stop in stops.features"
      :lat-lng="stop.geometry.coordinates.reverse()"
      :icon="lineIcon(stop.properties)"
    >
      <l-popup class="">
        <div class="flex flex-col w-64">
          <div class="w-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            {{ stop.properties.nom }}
          </div>
          <div class="w-full flex">
            <div class="w-1/2">
              <div
                class=""
                v-for="item in asyncData(
                  stop.properties.nom,
                  stop.properties.sens
                )"
                :key="item.id"
              >
                :
              </div>
            </div>
            <div class="w-1/2 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </l-popup>
    </l-marker>
  </l-map>
</template>