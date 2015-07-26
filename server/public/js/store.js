var ajaxProducts;

$.get('http://127.0.0.1:10010/products?keyword=ball&latlong=47.6568777,-122.3159348', function(res) {
	ajaxProducts = res
})

	.done(function() {
	console.log(ajaxProducts)
})

	.fail(function( jqxhr, textStatus, error ) {
	var err = textStatus + ", " + error;
	console.log( "Request Failed: " + err );
});

//.fail(function(err)var saveToLocalStorage = function(data) {
	//	localStorage.setItem('ajaxData', JSON.stringify(data));
	//};

//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
    this.products = [
					new product("APL", "Apple", "Eat one every day to keep the doctor away!", 12, 90, 0, 2, 0, 1, 2)
				];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}