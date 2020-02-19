$(document).ready(function() {
let map;
let myMarker;
let myLatLng;
})

// initialises Google Maps

function initializeGMap(lat, lng) {
    myLatLng = {lat, lng};
    
    
//controls the type of maps used and zoom
    var myOptions = {
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: myLatLng 
        
    };

}

function mapMarker(map) {
    myMarker = new google.maps.Marker({
                map : map,
              	position : myLatLng
            }); // Set the first marker on the map
}
