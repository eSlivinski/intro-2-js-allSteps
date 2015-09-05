var map,
	basemap,
	counties,
	unemploymentData;


// More at http://leaflet-extras.github.io/leaflet-providers/preview/
var basemapOptions = {
	blackAndWhite : L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {}),
	imagery : L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {}),
	watercolor : L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',{}),
	osm : L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {})
};

var albany	= [42.6525, -73.7572],
	buffalo = [42.8857, -78.8787],
	madison = {lat: 43.08298, lng: -89.3791};

var cities = [albany, buffalo, madison];

function makeBigFoots(){
	for (x in bigfoots) {
		var sighting = L.circle(bigfoots[x].latlng);
		sighting['bigfootData'] = bigfoots[x];
		sighting.setRadius(8);
		sighting.setStyle({
			'color':'red'
		})
		sighting.on('click',function(){
			document.getElementById('bigfootDate').innerHTML = this.bigfootData.placemark;
			document.getElementById('bigfootText').innerHTML = this.bigfootData.reportdesc;
		});

		sighting.addTo(map)
	}
}

function createMap() {
	map = L.map('map', {
		center 	:	[39.7071, -97.3388],
		layers  : 	[ basemapOptions.imagery ],
		zoom 	: 	4
	});

	L.control.layers(basemapOptions).addTo(map);
	makeBigFoots();
}

function changeCity(selectedCityIndex){
	var currentCity = cities[selectedCityIndex];
	map.panTo(currentCity);
}
$(window).on('load', createMap);
