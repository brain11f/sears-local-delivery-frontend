
//-------------------------------------
function fillProductsFunction() {
	new product(localProducts.data[1][1].Description.ImageURL, localProducts.data[1][1].Description.BrandName, localProducts.data[1][1].Description.Name, localProducts.data[1][1].Price.CutPrice)
}


//----------------------------------------------------------------

function store() {
	this.products = [
		new product(localProducts.data[1][1].Description.ImageURL, localProducts.data[1][1].Description.BrandName, localProducts.data[1][1].Description.Name, localProducts.data[1][1].Price.CutPrice)
	];
	console.log(products);
}

store.prototype.getProduct = function (sku) {
	for (var i = 0; i < this.products.length; i++) {
		if (this.products[i].sku == sku)
			return this.products[i];
	}
	return null;
}