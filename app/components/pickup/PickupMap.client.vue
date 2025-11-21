<template>
  <ClientOnly>
    <div
      ref="mapContainer"
      class="w-full h-[100%] rounded-lg overflow-hidden"
    ></div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, watch, computed, onBeforeUnmount } from 'vue'
import { useRestaurants } from "~/stores/useRestaurants";

const store = useRestaurants()
const restaurants = computed(() => store.filteredRestaurants)

const markers = computed(() =>
  restaurants.value.map(res => ({
    lat: res.location.lat,
    lng: res.location.lng,
    popup: res.name
  }))
)

const mapContainer = ref(null)
let map = null
let markerLayer = null

onMounted(async () => {
  const leafletModule = await import("leaflet");
  const L = leafletModule.default || leafletModule;
  await import("leaflet/dist/leaflet.css");

  map = L.map(mapContainer.value, {
    center: [30.2839, 57.0714],
    zoom: 13,
    zoomControl: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(map);

  markerLayer = L.layerGroup().addTo(map);

  addMarkers(markers.value)

  const ro = new ResizeObserver(() => map.invalidateSize());
  ro.observe(mapContainer.value);

  onBeforeUnmount(() => {
    ro.disconnect()
    map.remove()
  })
})

function addMarkers(list) {
  if (!map || !markerLayer) return;

  markerLayer.clearLayers();

  import('leaflet').then((leafletModule) => {
    const L = leafletModule.default || leafletModule;

    const customIcon = L.divIcon({
      className: "restaurant-marker",
      html: `<div class="${'dot'}"></div>`,
      iconSize: [50, 50],
      iconAnchor: [15, 30]
    });

    list.forEach(m => {
      if (typeof m.lat === 'number' && typeof m.lng === 'number') {
        const mk = L.marker([m.lat, m.lng ],{ icon: customIcon });
        if (m.popup) mk.bindPopup(m.popup);
        mk.addTo(markerLayer);
      }
    });
  });
}

watch(markers, addMarkers, { deep: true })
</script>


<style scoped>
.map-wrapper {
  height: 100%;
}
:deep(.restaurant-marker){
    display: flex;
    justify-content: center;
    align-items: center;
}
:deep(.restaurant-marker .dot) {
  width: 20px;
  height: 20px;
  background-color: #1447e6;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 6px rgba(0,0,0,0.3);
}


</style>
