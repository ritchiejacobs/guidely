angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {

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

    var locations = [
      ['Bondi Beach', 51.21945, 4.40446, 4],
      ['Coogee Beach', 51.22399, 4.40166, 3],
      ['Cronulla Beach', 51.21295, 4.40600, 2],
      ['Manly Beach', 51.21545, 4.40000, 1],
    ];

    var messages = ['This', 'is', 'the', 'secret', 'message'];

    for (var i = 0; i < locations.length; i++) {
      var location = locations[i];
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(location[1], location[2]),
          map: map,
          icon: '../img/avatar.jpg',
          title: location[0],
          zIndex: location[3]
      });
      setMarkerMessage(marker, i);
    }

    function setMarkerMessage(marker, num) {
      var infowindow = new google.maps.InfoWindow({
        content: messages[num]
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

.controller('SearchCtrl', function($scope) {})
.controller('ToursCtrl', function($scope) {})
.controller('SettingsCtrl', function($scope) {})
