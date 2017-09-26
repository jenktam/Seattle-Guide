'use strict'
import axios from 'axios'

initGeolocation()

function initGeolocation() {
  var output = document.getElementById('mapContainer');

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude
    var longitude = position.coords.longitude

    // Initialize Map
    const map = L.map('mapContainer')
    .setView([latitude, longitude], 15)

    //Add Basemap
    L.tileLayer('http://{s}.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png')
    .addTo(map)

    renderNearbyLocations(map, latitude, longitude)
    renderCurrentLocation(map, latitude, longitude)
  }

  function error() {
    console.log("Unable to retrieve your location")
    output.innerHTML = "Unable to retrieve your location";
  }

  navigator.geolocation.getCurrentPosition(success, error);
}


function renderNearbyLocations(map, currentLatitude, currentLongitude){
  axios.get(`/api/yelp/${currentLatitude}/${currentLongitude}`)
  .then(locations => {
    console.log("locations!!", locations.data)
    let allLocations = locations.data.businesses

    for(let i = 0; i < allLocations.length; i++) {
      let marker = L.marker([allLocations[i].coordinates.latitude, allLocations[i].coordinates.longitude]).bindPopup(`<b>${allLocations[i].name}</b><br><img style="width="100px"; height="100px"src="${allLocations[i].image_url}"/><p>Price: ${allLocations[i].price}</p><p>Rating: ${allLocations[i].rating}</p><p>Review Count: ${allLocations[i].review_count}</p><a href="${allLocations[i].url}">More Info</a>`)
      .openPopup()
      .addTo(map)
    }
  })
}

function renderCurrentLocation(map, currentLatitude, currentLongitude) {
  var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const currentLocation = L.marker([currentLatitude, currentLongitude], {icon: greenIcon})
  .bindPopup(`<b>Current Location</b></br>This is your current location.`)
  .addTo(map);
}
