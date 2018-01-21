var x = 0;
var y = 0;

function showMap(lat, lng) {
    x = lat;
    y = lng;
    initMap();
}

function initMap() {
    var uluru = {lat: x, lng: y};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}