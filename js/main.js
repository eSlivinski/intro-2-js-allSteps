var map,
	basemap;


// More at http://leaflet-extras.github.io/leaflet-providers/preview/
var basemapOptions = {
	blackAndWhite 		: L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {}),
	imagery 			: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {}),
	watercolor 			: L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',{}),
	osm 				: L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {})
};

var buffalo = [42.8857, -78.8787],
	madison = {lat: 43.08298, lng: -89.3791};

var cities = [buffalo, madison]

function createMap() {
	map = L.map('map', {
		center 	: cities[0],
		layers 	: [basemapOptions.watercolor],
		zoom	: 13
	});

	L.control.layers(basemapOptions).addTo(map);
}

$(window).on('load', createMap);
