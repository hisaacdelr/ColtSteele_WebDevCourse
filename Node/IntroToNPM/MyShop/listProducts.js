var faker = require('faker');

console.log("===================\nWELCOME TO MY SHOP!\n===================");
for(var i = 0; i < 10; i++){
	//console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));

	//OR WITH FUNCTIONS
	console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}