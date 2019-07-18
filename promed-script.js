document.addEventListener('DOMContentLoaded', function() {
        var page0 = document.getElementById('page0');
        var page1 = document.getElementById('page1');
        page1.style.display = 'none';
    
        document.getElementById("nextpage1").onclick = function(){
            page0.style.display = 'none';
            page1.style.display = 'block';
        };
        document.getElementById("prevpage0").onclick = function(){
            page1.style.display = 'none';
            page0.style.display = 'block';
        };
    }, false);

function initMap() {

	var inter45 = {
		info: '<<div id="row"><div id="column"></div><div id="column"><strong>541 Interstate 45</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.715256,
		long: -95.567661  
	};

	var i45s = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>540 Interstate 45 S</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.697614,
		long: -95.553887
	};

	var medparkln = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>102 Medical Park Ln</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.697204,
		long: -95.560304 
	};

    var conmeddr = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>600 S Conroe Medical Dr</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.283831,
		long: -95.473504  
	};

    var sloop336_land = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>690 S Loop 336 W (Land)</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.282934,
		long: -95.471890  
	};

    var thompson = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>704 N. Thompson Street</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.315419,
		long: -95.457839 
	};

    var sloop336_bldg = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>690 S Loop 336 (Bldg)</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.282934,
		long: -95.471890  
	};

    var riverpointe = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>600 River Pointe Dr</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.283066,
		long: -95.465188 
	};

    var conmedr650 = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>650 Conroe Medical Dr</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.284960,
		long: -95.472372
	};

    var nloop336 = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>3607 N Loop 336</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.313211,
		long: -95.504021 
	};

    var riverwood = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>800 Riverwood Ct</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.284683,
		long: -95.465219
	};

    var medcenterblvd = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>100 Medical Center Blvd</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.287212,
		long: -95.464819
	};

    var riverwood1020 = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>1020 Riverwood Ct</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.283982,
		long: -95.465733
	};

    var springtrail = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>28517 Spring Trail Ridge</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.101683,
		long: -95.465733
	};

    var ogletree = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>403 Ogletree St</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.732673,
		long: -94.938553
	};

    var evast = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>21105-21123 Eva St</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
        lat: 30.388312,
		long: -95.697980
	};

    var bypasse = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>1485 FM 1960 Byp E</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.005174,
		long: -95.251618
	};

    var sloop336_2101 = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>2101 S Loop 336 W</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.284452,
		long: -95.483874
	};
    
    var medcenterblvd503 = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>503 Medical Center Blvd</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.283246,
		long: -95.466014
	};
    
    var srobb = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>303 S Robb Std</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.942782,
		long: -95.374828
	};
    
    var riverpointe400 = {
		info: '<div id="row"><div id="column"></div><div id="column"><strong>400 River Pointe Dr</strong><br></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.282375,
		long: -95.464031   
	};


	var locations = [
      [riverwood1020.info, riverwood1020.lat, riverwood1020.long, riverwood1020.icon, 0],
      [conmeddr.info, conmeddr.lat, conmeddr.long, conmeddr.icon, 1],
      [medcenterblvd.info, medcenterblvd.lat, medcenterblvd.long, medcenterblvd.icon, 2],
      [sloop336_bldg.info, sloop336_bldg.lat, sloop336_bldg.long, sloop336_bldg.icon, 3],
      [sloop336_land.info, sloop336_land.lat, sloop336_land.long, sloop336_land.icon, 4],
      [thompson.info, thompson.lat, thompson.long, thompson.icon, 5],
      [riverwood.info, riverwood.lat, riverwood.long, riverwood.icon, 6],
      [riverpointe.info, riverpointe.lat, riverpointe.long, riverpointe.icon, 7],
      [conmedr650.info, conmedr650.lat, conmedr650.long, conmedr650.icon, 8],
      [sloop336_2101.info, sloop336_2101.lat, sloop336_2101.long, sloop336_2101.icon, 9],
      [medcenterblvd503.info, medcenterblvd503.lat, medcenterblvd503.long, medcenterblvd503.icon, 10],
      [nloop336.info, nloop336.lat, nloop336.long, nloop336.icon, 11],
      [bypasse.info, bypasse.lat, bypasse.long, bypasse.icon, 12],
      [ogletree.info, ogletree.lat, ogletree.long, ogletree.icon, 13],
      [inter45.info, inter45.lat, inter45.long, inter45.icon, 14],
      [i45s.info, i45s.lat, i45s.long, i45s.icon, 15],
      [medparkln.info, medparkln.lat, medparkln.long, medparkln.icon, 16],
      [springtrail.info, springtrail.lat, springtrail.long, springtrail.icon, 17],
      [evast.info, evast.lat, evast.long, evast.icon, 18],
      [srobb.info, srobb.lat, srobb.long, srobb.icon, 19],
      [riverpointe400.info, riverpointe400.lat, riverpointe400.long, riverpointe400.icon, 20],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(30.284683, -95.465154),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: 
            [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ]
	});

	var infowindow = new google.maps.InfoWindow({
            maxWidth: 200
    });

	var marker, i;
    var markers = [];
    var bounds = new google.maps.LatLngBounds();

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
            icon: locations[i][3]
		});
        markers.push(marker);
        
        bounds.extend(marker.position);

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
    map.fitBounds(bounds);

    showme = function (index) {
        map.setZoom(18);
        map.setCenter(markers[index].getPosition());
        infowindow.setContent(locations[index][0]);
        infowindow.open(map, markers[index]);
    }
    
    resetview = function () {
        map.fitBounds(bounds);   
    }
 
}
