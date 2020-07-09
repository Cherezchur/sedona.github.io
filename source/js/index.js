image = 'images/marker.png'

function initMap() {
  var coordinates = {lat: 34.860853, lng: -111.772823};
  var markerImage = 'img/icon-map-marker.svg',

      map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates
      });

      marker = new google.maps.Marker({
        position: coordinates,
        map: map
      });

      marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage,
        animation: google.maps.Animation.BOUNCE
      });

}
