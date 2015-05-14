angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Tours) {

  if (document.readyState === "complete") {
    initMap();
  } else {
    google.maps.event.addDomListener(window, 'load', initMap);
  }

  function initMap() {
    $scope.map = map;

    var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
    var styledMap = new google.maps.StyledMapType(styles);

    var mapOptions = {
      center: { lat: 51.21945, lng: 4.40246},
      zoom: 15,
      disableDefaultUI: true,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      }
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    setMarkers(map);
  }

  function setMarkers(map) {
    var prevInfo;
    var tours = Tours.all();

    for (var i = 0; i < tours.length; i++) {
      var lat = tours[i].latitude;
      var lng = tours[i].longitude;
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map,
          icon: tours[i].icon,
          title: tours[i].name
      });
      setMarkerMessage(marker, i);
    }

    function setMarkerMessage(marker, num) {
      var rating = '';
      for (var i = 0; i < tours[num].rating; i++) { rating += '<i class="icon ion-android-star"></i>' }

      var infowindow = new google.maps.InfoWindow({
        maxWidth: 300,
        content:
        '<div class="tourinfo">' +
          '<h1>' + tours[num].name + '</h1>' +
          '<p>' + tours[num].location + '</p>' +
          '<p>' + rating + ' (' + tours[num].reviewCount + ')</p>' +
          '<ul>' +
            '<li><i class="icon ion-ios-stopwatch"></i> <b>Duration:</b> ' + tours[num].duration + '</li>' +
            '<li><i class="icon ion-android-map"></i> <b>Type:</b> ' + tours[num].type + '</li>' +
            '<li><i class="icon ion-ios-person"></i> <b>Guide:</b> ' + tours[num].guide + '</li>' +
            '<li><i class="icon ion-ios-pricetag"></i> <b>Price:</b> ' + tours[num].price + '</li>' +
          '</ul>' +
          '<a class="button button-block button-positive" href="#/tab/tours/'+ tours[num].id +'">View tour</a>' +
        '</div>'
      });

      google.maps.event.addListener(marker, 'click', function() {
        if (prevInfo) { prevInfo.close(); }
        prevInfo = infowindow;
        map.panTo(marker.position);
        infowindow.open(marker.get('map'), marker);
      });
    }
  }

})

.controller('ToursCtrl', function($scope, $stateParams, Tours) {
  $scope.tour = Tours.get($stateParams.tourId);
})

.controller('SearchCtrl', function($scope) {})
.controller('ReservationsCtrl', function($scope) {})
.controller('SettingsCtrl', function($scope) {})
