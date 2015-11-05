/* Global Variables
 *  = Variables defined outside of a function
 *  -> can be accessed in any function & in the command line */
var map,
	bigfoots,      /* defined when bigfoots geoJSON is loaded */
    bigfootLayer;

var basemapOptions = {
    'Black and White': L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {}),
    Satellite: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {}),
    Watercolor : L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',{}),
    'Open Street Map' : L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {})
};

function makeBigFoots() {
    bigfootLayer = L.geoJson(bigfoots, {
        // filter : function(feature, layer) {
        // /* Function that will be used to decide whether to show a feature or not. */
        // /* Only the geojson features that return true will be displayed on the map */
        //
        //     return feature.properties.year === year;
        // },
        // pointToLayer: function(feature, latlng) {
        // /* Function that will be used for creating layers for GeoJSON points
        //  * (if not specified, simple markers will be created). */
        //
        //     return new L.CircleMarker(latlng, /* styling options for the the circle marker */);
        // },
        // onEachFeature: function(feature, layer) {
        // /* Function that will be called on each created feature layer.
        //  * Useful for attaching events and popups to features. */
        //
        //     layer.bindPopup(/* Properties of the object to display inside the popup when the feature is clicked on */ );
        // }
    }).addTo(map);
}

function createMap() {
	map = L.map('map', {
		center:	[39.7071, -97.3388],
		layers: [ basemapOptions.Satellite ],
		zoom: 4
	});

    L.control.layers(basemapOptions).addTo(map);

    makeBigFoots();
}

/* function called when the page is finished loading
 * waiting until loading is finished ensures that all dependencies and data are available */
window.onload = function() {
    createMap();
};
