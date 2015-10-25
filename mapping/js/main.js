/* Global Variables
 *  = Variables defined outside of a function
 *  -> can be accessed in any function & in the command line */
var map,
	bigfoots;      /* defined when bigfoots geoJSON is loaded */


var basemapOptions = {
    'Black and White': L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {}),
    Satellite: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {}),
    Watercolor : L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',{}),
    'Open Street Map' : L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {})
};

/* function called when the page is finished loading
 * waiting until loading is finished ensures that all dependencies and data are available */
window.onload = function() {
    console.log("Welcome to Intro-2-JS");
};
