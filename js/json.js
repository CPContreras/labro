//var actual_JSON;
//function loadJSON(callback) {
//	var xobj = new XMLHttpRequest();
//	xobj.overrideMimeType("application/json");
//	xobj.open('GET', 'restaurants.json', true);
//	xobj.onreadystatechange = function() {
//		console.log("Executing function");
//		if (xobj.readyState == 4 && xobj.status == "200") {
//			callback(xobj.responseText);
//		}
//	};
//	xobj.send(null);
//}
//
//function init() {
//	loadJSON(function(response) {
//		// Parse JSON string into object
//		var actual_JSON = JSON.parse(response);
//	});
//}

angular.module('restaurants', []).controller('customersCtrl', function($scope) {
	$scope.names = [ {
		"Name" : "ArcoLuna (Ristorante)",
		"Address" : "Piazza Nobili Vitelleschi, 02010, Labro, RI",
		"Tel" : "(+39) 334 8396408",
		"Web" : "http://www.arcoluna.com/"
	}, {
		"Name" : "Da Ulisse (Ristorante Pizzeria)",
		"Address" : "Piazza Mazzini, 02010, Labro, RI",
		"Tel" : "(+39) 331 4114245",
		"Web" : ""
	}, {
		"Name" : "Le Tre Porte (Ristorante Pizzeria)",
		"Address" : "Via Vittorio Emanuele, 02010, Labro, RI",
		"Tel" : "(+39) 334 3613079",
		"Web" : ""
	}, {
		"Name" : "Le Cantine (Pub)",
		"Address" : "Via Garibaldi, 02010, Labro, RI",
		"Tel" : "(+39) 333 7165459",
		"Web" : ""
	}, {
		"Name" : "Osteria Boccondivino (Enoteca)",
		"Address" : "Via Garibaldi 9, 02010, Labro, RI",
		"Tel" : "(+39) 348 5154484",
		"Web" : "http://www.boccondivino.biz/"
	}, {
		"Name" : "La Sosta (Ristorante Pizzeria)",
		"Address" : "Localita' Madonna Della Luce, 02010, Labro, RI",
		"Tel" : "(+39) 746 636090",
		"Web" : ""
	}, {
		"Name" : "NordEst (Pizzeria)",
		"Address" : "Vocabolo Collicelle 71, 02010, Labro, RI",
		"Tel" : "(+39) 389 9445791",
		"Web" : ""
	}, {
		"Name" : "Alla Sorgente della Valle (Agriturismo)",
		"Address" : "Valle Avanzana, 02010, Labro, RI",
		"Tel" : "(+39) 746 636746",
		"Web" : ""
	} ];
});