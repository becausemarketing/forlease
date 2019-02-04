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
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_2aafcb57a8924d8a92b493e270048431~mv2.jpg"></div>\
                    <div id="column"><strong>Interstate-45</strong><br>\
					541 Interstate 45 <br> Huntsville, TX 77320<br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/541-i45">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.715256,
		long: -95.567661  
	};

	var i45s = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_bb7991bc455348f780a7e53b19639c99~mv2.jpg"></div>\
                    <div id="column"><strong>Interstate-45 S</strong><br>\
					540 Interstate 45 S <br> Huntsville, TX 77320<br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/540-i45s">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.697614,
		long: -95.553887
	};

	var medparkln = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_c64be2c86d9542aab2accb5d634d7dda~mv2.jpg"></div>\
                    <div id="column"><strong>Medical Park</strong><br>\
					102 Medical Park Ln<br> Huntsville, TX 77320<br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/102-medical-park-dr">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.697204,
		long: -95.560304 
	};

    var conmeddr = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_7c3aacdcc8f14e90a8a555787d8268eb~mv2.jpg"></div>\
                    <div id="column"><strong>S Conroe Medical</strong><br>\
					600 S Conroe Medical Dr<br> Conroe, TX 77304 <br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/600-s-conroe-medical-dr">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.283831,
		long: -95.473504  
	};

    var sloop336_land = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_71178379feae486986cbb1909a44f845~mv2.jpg"></div>\
                    <div id="column"><strong>S Loop 336 (Land)</strong><br>\
					690 S Loop 336 W <br> Conroe, TX 77304<br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/690-s-loop-336-w">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.282934,
		long: -95.471890  
	};

    var thompson = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_458766e83dcd491782d04bb1246cd6cd~mv2.jpg"></div>\
                    <div id="column"><strong>N. Thompson</strong><br>\
					704 N. Thompson Street <br> Conroe, TX 77301<br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/704-n-thompson-st-lease">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.315419,
		long: -95.457839 
	};

    var sloop336_bldg = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_4c345f41ea1c4734b47671ab5fd19261~mv2.jpg"></div>\
                    <div id="column"><strong>S Loop 336 (Building)</strong><br>\
					690 S Loop 336 <br> Conroe, TX 77304<br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/690-s-loop-336-bldg">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.282934,
		long: -95.471890  
	};

    var riverpointe = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_1786240e0cd1414c9af97a932a6a82ff~mv2.jpg"></div>\
                    <div id="column"><strong>River Pointe</strong><br>\
					600 River Pointe Dr <br> Conroe, TX 77304<br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/600-river-pointe-dr">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.283066,
		long: -95.465188 
	};

    var conmedr650 = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_f46900fe1a534144a072a834c992f084~mv2.jpg"></div>\
                    <div id="column"><strong>Conroe Medical Drive</strong><br>\
					650 Conroe Medical Dr <br> Conroe, TX 77304<br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/650-s-conroe-medical-dr">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.284960,
		long: -95.472372
	};

    var nloop336 = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_95c568213ebb4c93b3d2e7150b87c3e3~mv2.jpg"></div>\
                    <div id="column"><strong>N Loop 336</strong><br>\
					3607 N Loop 336 <br> Conroe, TX 77304<br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/3607-n-loop-336">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.313211,
		long: -95.504021 
	};

    var riverwood = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_18923b972a29408db765226c097c9815~mv2.jpg"></div>\
                    <div id="column"><strong>Riverwood Ct</strong><br>\
					800 Riverwood Ct <br> Conroe, TX 77304<br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/800-riverwood-ct-lease">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.284683,
		long: -95.465219
	};

    var medcenterblvd = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_84fd9921ac3146d3983932af1cc9d19f~mv2.jpg"></div>\
                    <div id="column"><strong>Medical Center Blvd</strong><br>\
					100 Medical Center Blvd <br> Conroe, TX 77304<br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/100-medical-center-blvd">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.287212,
		long: -95.464819
	};

    var riverwood1020 = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_b22015455da14ced9c26a0d0be4f8790~mv2.jpg"></div>\
                    <div id="column"><strong>Riverwood Ct</strong><br>\
					1020 Riverwood Ct <br> Conroe, TX 77304 <br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/1020-riverwood-ct">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.283982,
		long: -95.465733
	};

    var springtrail = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_81f8cb02bbd541cc8d7e2d8b7c46658f~mv2.jpg"></div>\
                    <div id="column"><strong>Spring Trail Ridge</strong><br>\
					28517 Spring Trail Ridge <br> Spring, TX 77386 <br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/28517-spring-trail-ridge">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.101683,
		long: -95.465733
	};

    var ogletree = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_414234fa6b63472c8e98b6f35e0a06f1~mv2.jpg"></div>\
                    <div id="column"><strong>Ogletree St</strong><br>\
					403 Ogletree Street <br> Livingston, TX 77351 <br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/403-ogletree">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.732673,
		long: -94.938553
	};

    var evast = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_0c14fad8887c449089ef52e7888da799~mv2.jpg"></div>\
                    <div id="column"><strong>Eva St</strong><br>\
					21205-21123 Eva Street <br> Montgomery, TX 77356 <br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/21105-eva-st">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
        lat: 30.388312,
		long: -95.697980
	};

    var bypasse = {
		info: '<div id="row"><div id="column"><img src="https://static.wixstatic.com/media/d12b1c_9385a5568e7440f2bc16dd0cfe772756~mv2.jpg"></div>\
                    <div id="column"><strong>Bypass E</strong><br>\
					1485 FM 1960 Bypass E <br> Humble, TX 77338 <br>\
					<a href="https://becausemarketing.wixsite.com/promedrealty/1485-fm-1960-bype">View Listing</a></div></div>',
        icon: {
            url: 'https://dl.dropboxusercontent.com/s/em0cqrez70o9t0g/forlease.png?dl=0',
            scaledSize: new google.maps.Size(96, 96)
        },
		lat: 30.005174,
		long: -95.251618
	};

	var locations = [
      [inter45.info, inter45.lat, inter45.long, inter45.icon, 0],
      [i45s.info, i45s.lat, i45s.long, i45s.icon, 1],
      [medparkln.info, medparkln.lat, medparkln.long, medparkln.icon, 2],
      [conmeddr.info, conmeddr.lat, conmeddr.long, conmeddr.icon, 3],
      [sloop336_land.info, sloop336_land.lat, sloop336_land.long, sloop336_land.icon, 4],
      [thompson.info, thompson.lat, thompson.long, thompson.icon, 5],
      [sloop336_bldg.info, sloop336_bldg.lat, sloop336_bldg.long, sloop336_bldg.icon, 6],
      [riverpointe.info, riverpointe.lat, riverpointe.long, riverpointe.icon, 7],
      [conmedr650.info, conmedr650.lat, conmedr650.long, conmedr650.icon, 8],
      [nloop336.info, nloop336.lat, nloop336.long, nloop336.icon, 9],
      [riverwood.info, riverwood.lat, riverwood.long, riverwood.icon, 10],
      [medcenterblvd.info, medcenterblvd.lat, medcenterblvd.long, medcenterblvd.icon, 11],
      [riverwood1020.info, riverwood1020.lat, riverwood1020.long, riverwood1020.icon, 12],
      [springtrail.info, springtrail.lat, springtrail.long, springtrail.icon, 13],
      [ogletree.info, ogletree.lat, ogletree.long, ogletree.icon, 14],
      [evast.info, evast.lat, evast.long, evast.icon, 15],
      [bypasse.info, bypasse.lat, bypasse.long, bypasse.icon, 16],
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
        map.setZoom(17);
        map.setCenter(markers[index].getPosition());
        infowindow.setContent(locations[index][0]);
        infowindow.open(map, markers[index]);
    }
    
    resetview = function () {
        map.fitBounds(bounds);   
    }
 
}
