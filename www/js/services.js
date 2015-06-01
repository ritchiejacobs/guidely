angular.module('starter.services', [])

.factory('Reservations', function() {
  var reservations = [
    {
      'id': 1,
      'name': 'Antwerp Center Monuments',
      'date': '19/07/05'
    },
    {
      'id': 2,
      'name': 'Best Shopping Spots Antwerp',
      'date': '19/07/05'
    }
  ];

  return {
    all: function() {
      return reservations;
    }
  }
})

.factory('Tours', function() {
  var tours = [
    {
      'id': 1,
      'latitude': 51.21945,
      'longitude': 4.40446,
      'icon': '../img/avatar1.png',
      'name': 'Antwerp Center Monuments',
      'location': 'Antwerp, Flanders, Belgium',
      'city': 'Antwerp',
      'rating': 5,
      'reviewCount': '8',
      'stars': [1, 2, 3, 4, 5],
      'duration': '01:30',
      'type': 'Cultural',
      'guide': 'Jane Doe',
      'price': '€10',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aspernatur? Exercitationem iure, aliquam, hic nostrum natus quis omnis, nam nesciunt aut suscipit magnam necessitatibus. Laborum fuga accusamus veniam voluptates natus.'
    },
    {
      'id': 2,
      'latitude': 51.22399,
      'longitude': 4.40166,
      'icon': '../img/avatar2.png',
      'name': 'St. Andrews Pub Crawl',
      'location': 'Antwerp, Flanders, Belgium',
      'city': 'Antwerp',
      'rating': 4,
      'reviewCount': '12',
      'stars': [1, 2, 3, 4],
      'duration': '04:00',
      'type': 'Nightlife',
      'guide': 'Billy Gates',
      'price': '€15',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, placeat, laudantium tenetur officiis accusantium consequuntur fuga, velit magni quidem at dicta repellat doloremque sunt sit quasi voluptatem provident, modi expedita.'
    },
    {
      'id': 3,
      'latitude': 51.21295,
      'longitude': 4.40600,
      'icon': '../img/avatar3.png',
      'name': 'A Walk In The Park',
      'location': 'Antwerp, Flanders, Belgium',
      'city': 'Antwerp',
      'rating': 3,
      'reviewCount': '2',
      'stars': [1, 2, 3],
      'duration': '00:30',
      'type': 'Parks',
      'guide': 'Steven Jobs',
      'price': '€6.50',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ipsa dignissimos, assumenda commodi veritatis necessitatibus velit, eos laborum. Temporibus, nobis voluptatem, dolorem autem vel modi optio iure libero velit explicabo.'
    },
    {
      'id': 4,
      'latitude': 51.21545,
      'longitude': 4.40000,
      'icon': '../img/avatar4.png',
      'name': 'Best Shopping Spots Antwerp',
      'location': 'Antwerp, Flanders, Belgium',
      'city': 'Gent',
      'rating': 5,
      'reviewCount': '7',
      'stars': [1, 2, 3, 4, 5],
      'duration': '02:00',
      'type': 'Shopping',
      'guide': 'Mary Page',
      'price': 'free',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque corrupti facilis suscipit quis soluta, distinctio labore nulla aliquam. Quia nostrum tempore eum porro velit maxime assumenda mollitia reprehenderit facere!'
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
    },
    getLocation: function(location) {
      var foundTours = [];
      angular.forEach(tours, function(tour) {
        if (location.toLowerCase() == tour.city.toLowerCase()) {
          foundTours.push(tour);
        }
      });
      return foundTours;
    }
  };
})
