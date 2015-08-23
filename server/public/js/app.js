'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
var storeApp = angular.module('AngularStore', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'partials/store.htm',
        controller: storeController 
      }).
      when('/products/:productSku', {
        templateUrl: 'partials/product.htm',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'partials/shoppingCart.htm',
        controller: storeController
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
//storeApp.factory("HttpData", function($scope, $http) {
//	var localData;
//	function getData() {
//		$http.get('http://127.0.0.1:10010/products?keyword=ball&latlong=47.6568777,-122.3159348')
//			.success(function(res) {
//			res.data = $scope.localData; 
//			console.log(res.data);
//		});
//	}
//});


storeApp.factory("DataService", function() {

	var myData = new geoFindMe();
	
//	var myStore = new store();
	
    // create shopping cart
    var myCart = new shoppingCart("AngularStore");

    // return data object with store and cart
    return {
//		store: myStore,
        cart: myCart
    };
});