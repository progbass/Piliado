import mapStyles from './MapStyles';

let map;
function createTag(url, callbackname, done) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.setAttribute('async', '');
    script.setAttribute('defer', '');

    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
};

function initMap() {
	const mapContainer = document.getElementById('contact').getElementsByClassName('map_container')[0];
    const location = {lat: 19.389340, lng: -99.178300};
    map = new google.maps.Map(mapContainer, {
        scrollwheel: false,
        mapTypeControl: false,
	    center: location,
	    zoom: 16,
	    styles: mapStyles
    });


	const markerIcon = require('../img/icon_map.png');
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: markerIcon
    });
}


const Map = function(){
	createTag('https://maps.googleapis.com/maps/api/js?key=AIzaSyCDVEwbj6MzlX2oLdWycAKryI6dDmG3yCA&callback=initMap');
    window['initMap'] = initMap;
}


export default Map;