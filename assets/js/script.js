 
// Initializes the map
function initMap() {
  // The location of the Dentists (actually Bigfoot's location)
  var Barnsley = {lat: 53.555306, lng: -1.479083};
  // The map, centered at Bigfoot's location
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: Barnsley});
  // The marker, positioned at Bigfoot's location
  var marker = new google.maps.Marker({position: Barnsley, map: map});
}