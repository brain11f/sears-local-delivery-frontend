'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
function storeController($scope, $routeParams, $http, getData, DataService) {
	
    $scope.getData.success(function(res) { 
        $scope.getData = res; 
    });
    // get store and cart from service
	$scope.store = DataService.store;
	$scope.cart = DataService.cart;

    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}