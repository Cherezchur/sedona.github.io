/* global L:readonly */
const mapBlock = document.querySelector('.search-hotel__wrapper-map');

console.log(mapBlock);

const mainIcon = L.icon({
  iconUrl: '../../img/icon-map-marker.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const mainMarker = L.marker(
  {
    lat: 34.8694,
    lng: -111.7601,
  },
  {
    draggable: false,
    icon: mainIcon,
  },
);

let map = L.map(mapBlock)
  .setView({
    lat: 34.8694,
    lng: -111.7601,
  }, 8);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

console.log('init map')

mainMarker.addTo(map);
