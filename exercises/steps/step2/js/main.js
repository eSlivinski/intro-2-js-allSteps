// Global Variables
// Because they are defined outside of a function these varibles can be accessed in any function & in the command line
var map,
	bigfoots,                        // bigfoots geoJson
  bigfootLayer;

// More at http://leaflet-extras.github.io/leaflet-providers/preview/
var basemapOptions = {
	'Black and White' : L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {}),
	'Satellite' : L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {}),
	'Watercolor' : L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',{}),
	'Open Street Map' : L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {})
};

function createMap() {
	map = L.map('map', {
		center:	[39.7071, -97.3388],
		layers: [basemapOptions['Satellite']],
		zoom: 4
	});

  L.control.layers(basemapOptions).addTo(map);
}

// On load event is fired when the page is loaded
window.onload = function(){
  createMap();
};
