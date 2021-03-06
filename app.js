const map = L.map('map').setView([51.505, -0.09], 13);
const titleUrl = 'https://www.openstreetmap.org/#map=7/28.382/83.134';

const attribution = '© OpenStreetMap contributors ';

const tiles = L.tileLayer(titleUrl,{attribution});
tiles.addTo(map);

fetch("kapilbastu.geojson")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // use geoJSON
    L.geoJSON(data, {
      onEachFeature: onEachFeature,
    }).addTo(map);
  });
