var latitude;
var longitude;
var localProducts;

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
		$.ajax({
			type: 'GET', 
			url: 'http://127.0.0.1:10010/products?keyword=ball&latlong=' + longAndLad,
			success: function(res){
				localProducts = res;
			}
		});
	};

	function error() {
		output.innerHTML = "Unable to retrieve your location";
	};

	output.innerHTML = "<p>Locating…</p>";

	navigator.geolocation.getCurrentPosition(success, error);
}


//pushing long and lad to localDeliverData--

var longAndLad;

function pushLongLat() {
	longAndLad = latitude.valueOf().toString() + "," + longitude.valueOf().toString();
}