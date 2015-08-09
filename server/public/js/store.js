
//----------------------------------------------------------------
function store() {
	this.products = [
		new product(localProducts.data[0].Description.ImageURL, localProducts.data[0].Description.BrandName, localProducts.data[0].Description.Name, localProducts.data[0].Price.CutPrice),
		new product(localProducts.data[1].Description.ImageURL, localProducts.data[1].Description.BrandName, localProducts.data[1].Description.Name, localProducts.data[1].Price.CutPrice),
		new product(localProducts.data[2].Description.ImageURL, localProducts.data[2].Description.BrandName, localProducts.data[2].Description.Name, localProducts.data[2].Price.CutPrice),
		new product(localProducts.data[3].Description.ImageURL, localProducts.data[3].Description.BrandName, localProducts.data[3].Description.Name, localProducts.data[3].Price.CutPrice),
		new product(localProducts.data[4].Description.ImageURL, localProducts.data[4].Description.BrandName, localProducts.data[4].Description.Name, localProducts.data[4].Price.CutPrice)
	];
}

store.prototype.getProduct = function (sku) {
	for (var i = 0; i < this.products.length; i++) {
		if (this.products[i].sku == sku)
			return this.products[i];
	}
	return null;
}