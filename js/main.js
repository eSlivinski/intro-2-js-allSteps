var map,
	basemap,
	counties,
	bigfootPane,
	unemploymentData;


// More at http://leaflet-extras.github.io/leaflet-providers/preview/
var basemapOptions = {
	'Black and White' : L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {}),
	'Satalite' : L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {}),
	'Watercolor' : L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',{}),
	'Open Street Map' : L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {})
};

var albany	= [42.6525, -73.7572],
	buffalo = [42.8857, -78.8787],
	madison = {lat: 43.08298, lng: -89.3791};

var cities = [albany, buffalo, madison];

function makeBigFoots(){
	var currentYr = document.getElementById('yrSeen').value;

	var style = {
		color: 'darkorange',
		weight: 1,
		fillColor: 'yellow',
		fillOpacity: 1
	};

	bigfootPane.clearLayers();

	for (x in bigfoots) {
		if (bigfoots[x].yr==currentYr){
			var coords   = L.latLng([bigfoots[x].lat, bigfoots[x].lng]),
				sighting = L.circleMarker(coords).setRadius(2).setStyle(style).addTo(bigfootPane);

			sighting['bigfootData'] = bigfoots[x];

			sighting.on('click',function(){
				document.getElementById('bigfootDate').innerHTML = this.bigfootData.placemark;
				document.getElementById('bigfootText').innerHTML = this.bigfootData.reportdesc;
			});
		}
	}
}

function createMap() {

	bigfootPane = L.featureGroup();

	map = L.map('map', {
		center 	:	[39.7071, -97.3388],
		layers  : 	[basemapOptions['Satalite'], bigfootPane],
		zoom 	: 	4
	});

	L.control.layers(basemapOptions).addTo(map);

	makeBigFoots();
}

function changeCity(selectedCityIndex){
	var currentCity = cities[selectedCityIndex];
	map.panTo(currentCity);
}

function foo(c) {

}
$(window).on('load', createMap);
