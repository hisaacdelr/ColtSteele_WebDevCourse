var request = require('request');

var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

request(url, function(error, response, body){
	if(!error && response.statusCode == 200){
		var parsedData = JSON.parse(body);
		console.log("Sunset in Hawaii is at: " + parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]); // show the HTML for Google homepage
	}
});