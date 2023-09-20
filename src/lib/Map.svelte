<script>
import L from 'leaflet';
import { onMount } from "svelte";
let map;

onMount(()=>{
    map = L.map('map').setView([-36.72494,-73.11684],14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});
</script>

<style>
    #map {
        height: 600px;
        width: 600px;
    }
</style>

<div id="map"></div>