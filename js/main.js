//function to start the Leaflet map
function createMap(){

    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a> | <a href="https://jaclynsiu.github.io/">Jaclyn Siu</a>';
    
    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1IjoiamFjbHluc2l1IiwiYSI6ImNrdnk3aWlwbjBibzEyb2x0bzUwYjcwanMifQ.b6WxkgLaeW7N1AXktvwdSw' 
    
     //URL used for Stanard MaxBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    // Variables for different basemaps
    var mapboxterrain = L.tileLayer(mbStyleUrl, {id: 'jaclynsiu/ckvy7lpu96mid14p6wu9h0rtj', token: apitoken, attribution: mbAttr});
    
    var light = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    var streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets', token: apitoken,  attribution: mbAttr});
    
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});
    
    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map
        zoom: 6, //zoom level
        layers:mapboxterrain //basemap
    });
    
    var baseLayers = {
            "Outdoors": outdoors,
        "Light": light,
            "Streets": streets,
        "Mapbox Terrain": mapboxterrain
    };
    
    L.control.layers(baseLayers).addTo(map);
};

//calling the function
$(document).ready(createMap);