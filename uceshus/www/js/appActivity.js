	function loadEarthquakeData() {
	// call the getEarthquakes code
	// keep the alert message so that we know something is happening
	alert("Loading Earthquakes");
	getEarthquakes();
	}
   // create a variable that will hold the XMLHttpRequest() - this must be done outside a function so that all the functions can use the same variable
   var client;
   // create the code to get the Earthquakes data using an XMLHttpRequest
   function getEarthquakes() {
	client = new XMLHttpRequest();
	client.open('GET','https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
	client.onreadystatechange = earthquakeResponse; // note don't use earthquakeResponse() with brackets as that doesn't work
	client.send();
	}
   // create the code to wait for the response from the data server, and process the response once it is received
   function earthquakeResponse() {
	// this function listens out for the server to say that the data is ready - i.e. has state 4
	if (client.readyState == 4) {
		// once the data is ready, process the data
		var earthquakedata = client.responseText;
		loadEarthquakelayer(earthquakedata);
		}
   }
   // convert the received data - which is text - to JSON format and add it to the map
   function loadEarthquakelayer(earthquakedata) {
	// convert the text to JSON
	var earthquakejson = JSON.parse(earthquakedata);
	// add the JSON layer onto the map - it will appear using the default icons
	earthquakelayer = L.geoJson(earthquakejson).addTo(mymap);
	// change the map zoom so that all the data is shown
	mymap.fitBounds(earthquakelayer.getBounds());
	}
	
	//create custom pink marker
	
	var testMarkerPink = L.AwesomeMarkers.icon({
		icon: 'play',
		markerColor: 'pink'
	 });
	 
	function geoJson() {
		client.open('GET','http://developer.cege.ucl.ac.uk:30263/getPOI');
	}
	
	// load the tiles

    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {

      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',

      maxZoom: 18,

      id: 'mapbox.streets'

    }).addTo(mymap);
    
	// load the map
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);	