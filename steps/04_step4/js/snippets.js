/* Defining a Map
 * http://leafletjs.com/reference.html#map-usage */

// L.map( /* string containing the id of the html element that the map should be drawn inside of */ , {
//     center: [39.7071, -97.3388] /* object or array containing the lat/lng of the map center*/,
//     layers: /* array containing the layers to be displayed on the map */,
//     zoom:   /* number ~1-20 describing the initial zoom level of the map, where 1
//              * is the largest scale (ie. most zoomed out) */
// });

/* Adding a Layer Control Object
 * http://leafletjs.com/reference.html#control-layers */

// L.control.layers(/* object containing the tilelayer definitions */).addTo(map);


/* Defining a GeoJSON layer
 * http://leafletjs.com/reference.html#geojson */

// bigfootLayer = L.geoJson(bigfoots, {
//     // filter : function(feature, layer) {
//     // /* Function that will be used to decide whether to show a feature or not. */
//     // /* Only the geojson features that return true will be displayed on the map */
//     //
//     //     return feature.properties.year === year;
//     // },
//     // pointToLayer: function(feature, latlng) {
//     // /* Function that will be used for creating layers for GeoJSON points
//     //  * (if not specified, simple markers will be created). */
//     //
//     //     return new L.CircleMarker(latlng, /* styling options for the the circle marker */);
//     // },
//     // onEachFeature: function(feature, layer) {
//     // /* Function that will be called on each created feature layer.
//     //  * Useful for attaching events and popups to features. */
//     //
//     //     layer.bindPopup(/* Properties of the object to display inside the popup when the feature is clicked on */ );
//     // }
// }).addTo(map);


/* Path Options
 * http://leafletjs.com/reference.html#path-options */

// {
//     color: /* string containing the stroke color as a hex value or name */,
//     weight: /* stroke width in pixels */,
//     fillColor: /* string containing the stroke color as a hex value or name*/,
//     fillOpacity: /* number 0-1 where 0 = completely transparent and 1 = completely opaque */,
//     radius: /* radius in pixels */
// };


/* Selecting a DOM element */
// var yrSelector = document.querySelector('#yrSelector');


/* Retrieving input value from DOM */
// year = yrSelector.valueAsNumber;


/* Detecting when input changes */
// yrSelector.onchange = function(){ ... };


/* Removing a layer from the map */
// map.removeLayer(/* map layer */);


/* Defining a new slider object using Bootstrap Slider
 * http://seiyria.com/bootstrap-slider/*/
// var yrSelector = new Slider('#yrSelector',{});


/* Retrieving slider value */
// yrSelector.getValue();

/* Detecting when slider input changes */
// yrSelector.on("change", function(){... });
