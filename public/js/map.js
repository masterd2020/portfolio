const mp = JSON.parse(document.getElementById('map').dataset.location);

// MAPBOX ACCESS TOKEN
mapboxgl.accessToken = 'pk.eyJ1IjoibWFzdGVyZDIwMjAiLCJhIjoiY2tiejBhcmJkMTR3dDJzcDczbWJiZW9odSJ9.a-9uQt0kDypT29yzKbGGkg';

// MAP OBJECT
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10'/*,
  center: [mp.coordinates[0], mp.coordinates[1]],
  zoom: 15*/
  });

// BOUNDS
const bounds = new mapboxgl.LngLatBounds();

// MARKER
const marker = new mapboxgl.Marker().setLngLat(mp.coordinates).addTo(map);

// POPUP
const popup = new mapboxgl.Popup({ closeOnClick: false, offset: 30, anchor: 'bottom' })
  .setLngLat(mp.coordinates)
  .setHTML("<p>Osun State, Nigeria</p>")
  .addTo(map);
popup.addClassName('mp');

bounds.extend(mp.coordinates);

map.fitBounds(bounds, {
  maxZoom: 13
});