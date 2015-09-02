var map,
	basemap;


// More at http://leaflet-extras.github.io/leaflet-providers/preview/
var basemapOptions = {
	blackAndWhite : L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {}),
	imagery : L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {}),
	watercolor : L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',{}),
	osm : L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {})
};

var cities = {
	albany	: [42.6525, -73.7572],
	buffalo : [42.8857, -78.8787],
	madison : {lat: 43.08298, lng: -89.3791}
};

function createMap() {
	map = L.map('map', {
		center 	:	cities['albany'],
		layers  : 	[basemapOptions.osm],
		zoom 	: 	13
	});

	L.control.layers(basemapOptions).addTo(map);
}

function changeCity(selectedCity){
	// console.log(selectedCity + " was selected from the dropdown menu.");

	var currentCity = cities[selectedCity]; // Access the coordinates of the selected city in the cities object using the city's name (the selectedCity var) as a key
	map.panTo(currentCity);
}


$(window).on('load', createMap); // Calls the create map function when the page is loaded
