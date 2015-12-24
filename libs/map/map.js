
google.maps.event.addDomListener(window, 'load', init);
        
    function init() {
        
        var mapOptions = {
            
            zoom: 16,
            center: new google.maps.LatLng(55.998007, 38.374720), 
            styles: [ { "stylers": [{ "visibility": "on"},{ "saturation": -100},{ "gamma": 0.54} ]}, { "featureType": "road","elementType": "labels.icon", "stylers": [ {"visibility": "off"}]},{ "featureType": "water","stylers": [ { "color": "#4d4946"}]},{ "featureType": "poi", "elementType": "labels.icon","stylers": [ { "visibility": "off"}]},{"featureType": "poi","elementType": "labels.text","stylers": [{"visibility": "simplified"}]},{ "featureType": "road", "elementType": "geometry.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "road.local","elementType": "labels.text","stylers": [{"visibility": "simplified"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [ {"color": "#ffffff"}]},{"featureType": "transit.line","elementType": "geometry","stylers": [{"gamma": 0.48}]},{"featureType": "transit.station","elementType": "labels.icon","stylers": [{ "visibility": "off"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"gamma": 7.18}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        var pinImage = new google.maps.MarkerImage("img/logo-map.png" ,
            new google.maps.Size(74, 91),
            new google.maps.Point(0,0),
            new google.maps.Point(10, 34));

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.998007, 38.374720),
            map: map,
            icon: pinImage,
            title: ' Solnechnaya st. 4A'
        });
    }