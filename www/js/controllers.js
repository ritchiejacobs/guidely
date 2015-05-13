angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
  console.log("HomeCtrl");

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

    var messages = [
      {
        'id': 1,
        'latitude': 51.21945,
        'longitude': 4.40446,
        'icon': '../img/avatar1.png',
        'name': 'Antwerp Center Monuments',
        'location': 'Antwerp, Flanders, Belgium',
        'rating': 5,
        'reviewCount': '8',
        'duration': '01:30',
        'type': 'Cultural',
        'guide': 'Jane Doe',
        'price': '€10'
      },
      {
        'id': 2,
        'latitude': 51.22399,
        'longitude': 4.40166,
        'icon': '../img/avatar2.png',
        'name': 'St. Andrews Pub Crawl',
        'location': 'Antwerp, Flanders, Belgium',
        'rating': 4,
        'reviewCount': '12',
        'duration': '04:00',
        'type': 'Nightlife',
        'guide': 'Billy Gates',
        'price': '€15'
      },
      {
        'id': 3,
        'latitude': 51.21295,
        'longitude': 4.40600,
        'icon': '../img/avatar3.png',
        'name': 'A Walk In The Park',
        'location': 'Antwerp, Flanders, Belgium',
        'rating': 3,
        'reviewCount': '2',
        'duration': '00:30',
        'type': 'Parks',
        'guide': 'Steven Jobs',
        'price': '€6.50'
      },
      {
        'id': 4,
        'latitude': 51.21545,
        'longitude': 4.40000,
        'icon': '../img/avatar4.png',
        'name': 'Best Shopping Spots Antwerp',
        'location': 'Antwerp, Flanders, Belgium',
        'rating': 5,
        'reviewCount': '7',
        'duration': '02:00',
        'type': 'Shopping',
        'guide': 'Mary Page',
        'price': 'free'
      }
    ];

    for (var i = 0; i < messages.length; i++) {
      var lat = messages[i].latitude;
      var lng = messages[i].longitude;
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map,
          icon: messages[i].icon,
          title: messages[i].name
      });
      setMarkerMessage(marker, i);
    }

    function setMarkerMessage(marker, num) {
      var rating = '';
      for (var i = 0; i < messages[num].rating; i++) { rating += '<i class="icon ion-android-star"></i>' }

      var infowindow = new google.maps.InfoWindow({
        maxWidth: 300,
        content:
        '<div class="tourinfo">' +
          '<h1>' + messages[num].name + '</h1>' +
          '<p>' + messages[num].location + '</p>' +
          '<p>' + rating + ' (' + messages[num].reviewCount + ')</p>' +
          '<ul>' +
            '<li><i class="icon ion-ios-stopwatch"></i> <b>Duration:</b> ' + messages[num].duration + '</li>' +
            '<li><i class="icon ion-android-map"></i> <b>Type:</b> ' + messages[num].type + '</li>' +
            '<li><i class="icon ion-ios-person"></i> <b>Guide:</b> ' + messages[num].guide + '</li>' +
            '<li><i class="icon ion-ios-pricetag"></i> <b>Price:</b> ' + messages[num].price + '</li>' +
          '</ul>' +
          '<a class="button button-block button-positive" href="#/tab/tours/tour-detail">View tour</a>' +
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

.controller('SearchCtrl', function($scope) {})
.controller('ToursCtrl', function($scope) {})
.controller('SettingsCtrl', function($scope) {})
