
//----------------------------------------------------------------
function store() {
	this.products = [
        new product(getData.data[0].Description.ImageURL, getData.data[0].Description.BrandName, getData.data[0].Description.Name, getData.data[0].Price.CutPrice),
        new product(getData.data[1].Description.ImageURL, getData.data[1].Description.BrandName, getData.data[1].Description.Name, getData.data[1].Price.CutPrice),
        new product(getData.data[2].Description.ImageURL, getData.data[2].Description.BrandName, getData.data[2].Description.Name, getData.data[2].Price.CutPrice),
        new product(getData.data[3].Description.ImageURL, getData.data[3].Description.BrandName, getData.data[3].Description.Name, getData.data[3].Price.CutPrice),
        new product(getData.data[4].Description.ImageURL, getData.data[4].Description.BrandName, getData.data[4].Description.Name, getData.data[4].Price.CutPrice)
	];
	console.log('products/list');
}

store.prototype.getProduct = function (sku) {
	for (var i = 0; i < this.products.length; i++) {
		if (this.products[i].sku == sku)
			return this.products[i];
	}
	return null;
}