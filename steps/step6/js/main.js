// Global Variables
// Because they are defined outside of a function these varibles can be accessed in any function & in the command line
var map,
	bigfoots,                        // bigfoots geoJson
  bigfootLayer;

var year = 2015;

// More at http://leaflet-extras.github.io/leaflet-providers/preview/
var basemapOptions = {
	'Black and White' : L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {}),
	'Satalite' : L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {}),
	'Watercolor' : L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',{}),
	'Open Street Map' : L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {})
};

function makeBigFoots(){
  var style = {
		color: 'darkorange',
		weight: 1,
		fillColor: 'yellow',
		fillOpacity: 1,
    radius: 3
	};

  bigfootLayer = L.geoJson(bigfoots, {
    filter : function(feature, layer) {
      return feature.properties.year == year;
    },
    pointToLayer: function(feature, latlng) {
      return new L.CircleMarker(latlng, style);
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.description);
    }
  }).addTo(map);
}

function createMap() {
	map = L.map('map', {
		center:	[39.7071, -97.3388],
		layers: [basemapOptions['Satalite']],
		zoom: 4
	});

  L.control.layers(basemapOptions).addTo(map);
  makeBigFoots();
}

// On load event is fired when the page is loaded
window.onload = function(){
  createMap();
};
