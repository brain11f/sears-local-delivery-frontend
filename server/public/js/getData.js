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
		pushLongLat();
		
		$.ajax({
			type: 'GET', 
			url: 'http://127.0.0.1:10010/products?keyword=ball&latlong=' + longAndLad,
			success: function(res){
				localProducts = res;
				console.log('get/data');
				storeApp.factory(myCart = new shoppingCart("AngularStore"))
				myStore = new store();
				console.dir(myStore);
			}
		});
	};

	function error() {
		output.innerHTML = "Unable to retrieve your location";
	};

	navigator.geolocation.getCurrentPosition(success, error);
}


//pushing long and lad to localDeliverData--

var longAndLad;

function pushLongLat() {
	longAndLad = latitude.valueOf().toString() + "," + longitude.valueOf().toString();
};