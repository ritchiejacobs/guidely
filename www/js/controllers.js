angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $ionicLoading) {

  var geocoder;

  function initialize() {
    geocoder = new google.maps.Geocoder();

    var mapOptions = {
      center: { lat: 51.219448, lng: 51.219448},
      zoom: 16
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    /* Option 1: Get current location with HTML5 */
    // navigator.geolocation.getCurrentPosition(function(pos) {
    //   map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
    //   var myLocation = new google.maps.Marker({
    //       position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
    //       map: map,
    //       title: "My Location"
    //   });
    // });

    /* Option 2: Search a location */
    geocoder.geocode( { 'address': 'antwerp'}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });

    $scope.map = map;
  }

  if (document.readyState === "complete") {
    initialize();
  } else {
    google.maps.event.addDomListener(window, 'load', initialize);
  }

})

.controller('SearchCtrl', function($scope) {})
.controller('ToursCtrl', function($scope) {})
.controller('SettingsCtrl', function($scope) {})
