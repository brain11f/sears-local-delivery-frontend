storeApp.factory('getData', ['$http', function($http) {
    
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
		pushLongLat();
		
        return $http.get('http://127.0.0.1:10010/products?keyword=ball&latlong=' + longAndLad)
			.success(function(res){
            return res;
        })
            .error(function(err) {
            return err;
        })
			}


	function error() {
		output.innerHTML = "Unable to retrieve your location";
	};

	navigator.geolocation.getCurrentPosition(success, error);

};

//pushing long and lad to localDeliverData--

var longAndLad;

function pushLongLat() {
	longAndLad = latitude.valueOf().toString() + "," + longitude.valueOf().toString();
};

}]);