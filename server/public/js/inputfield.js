// Get product json and push to data array---
var localDeliverData;

$.get('http://localhost:10010', function(res) {
	localDeliverData = res
})

	.done(function() {
	console.log(localDeliverData)
})

	.fail(function( jqxhr, textStatus, error ) {
	var err = textStatus + ", " + error;
	console.log( "Request Failed: " + err );
});

var latitude;
var longitude;

// location latitude & longitude
function geoFindMe() {
	var output = document.getElementById("out");

	if (!navigator.geolocation){
		output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
		return;
	}

	function success(position) {
		latitude  = position.coords.latitude;
		longitude = position.coords.longitude;

		output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

		var img = new Image();
		img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

		output.appendChild(img);
		pushLongLat();
	};

	function error() {
		output.innerHTML = "Unable to retrieve your location";
	};

	output.innerHTML = "<p>Locating…</p>";

	navigator.geolocation.getCurrentPosition(success, error);
}


//pushing long and lad to localDeliverData----
var parsedDeliverData = JSON.parse(localDeliverData);

var longAndLad;
var newDeliverData

function pushLongLat() {
	longAndLad = longitude.valueOf().toString() + "," + latitude.valueOf().toString();

	newDeliverData = localDeliverData.paths["/products"].get.parameters[1].description.replace('user latitude and longitude, seperated by a comma', longAndLad.valueOf());
};
