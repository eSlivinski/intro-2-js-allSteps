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

var cities = {
	albany	: [42.6525, -73.7572],
	buffalo : [42.8857, -78.8787],
	madison : {lat: 43.08298, lng: -89.3791}
};

function assignColor(value) {
	return (value === 9999) ? "transparent" :
		(value < .05) ? "#edf8fb" :
		(value < .1) ? "#b3cde3" :
		(value < .15) ? "#8c96c6" :
		(value < .2) ? "#8856a7" : "#810f7c"
}

function makeCounties(countyData) {
	counties = L.geoJson(countyData, {
		style : function(feature) {
			var countyid = feature.properties.STATE + feature.properties.COUNTY;
			var coUnemployment = (!unemploymentData[countyid]) ? 9999 : unemploymentData[countyid];
			var fillColor = assignColor(coUnemployment);
			return { color : fillColor, fillOpacity : 0.6}
		},
		onEachFeature : function(feature, layer) {
			layer.on('click', function(layer) {
				console.log('clicked', feature.properties.NAME, feature)
			});
		}
	});
	counties.addTo(map);
}
function retrieveUnemploymentData() {
	var countyObject = {};
	d3.csv("/data/unemployment.csv")
    	.row(function(d) { countyObject[d.countyid] = parseFloat(d.rate);})// return {id: d.countyid, value: +d.rate}; })
		.get(function(error, rows) {
			unemploymentData = countyObject;
			retrieveCountyData();
		});

}

function retrieveCountyData(){
	$.ajax({
		url : '/data/counties.json',
		success : function(countyData) {
			makeCounties(countyData);

		},
		error : function(error) {
			alert("Unable to Locate County geoJson")
		}
	});
}


function createMap() {
	map = L.map('map', {
		center 	:	cities['albany'],
		layers  : 	[basemapOptions.osm],
		zoom 	: 	13
	});

	L.control.layers(basemapOptions).addTo(map);
	retrieveUnemploymentData();
}

function changeCity(selectedCity){
	// console.log(selectedCity + " was selected from the dropdown menu.");
	var currentCity = cities[selectedCity]; // Access the coordinates of the selected city in the cities object using the city's name (the selectedCity var) as a key
	map.panTo(currentCity);
}

$(window).on('load', createMap);
