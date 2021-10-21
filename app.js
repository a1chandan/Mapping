const map = L.map('map').setView([51.505, -0.09], 13);
const titleUrl = 'https://www.openstreetmap.org/#map=7/28.382/83.134';

const attribution = '© OpenStreetMap contributors ';

const tiles = L.tileLayer(titleUrl,{attribution});
tiles.addTo(map);
