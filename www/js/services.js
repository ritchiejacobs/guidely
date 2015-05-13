angular.module('starter.services', [])

.factory('Tours', function() {
  var tours = [
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

  return {
    all: function() {
      return tours;
    },
    remove: function(tour) {
      tours.splice(tours.indexOf(tour), 1);
    },
    get: function(tourId) {
      for (var i = 0; i < tours.length; i++) {
        if (tours[i].id === parseInt(tourId)) {
          return tours[i];
        }
      }
      return null;
    }
  };
});
