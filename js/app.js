function MM_preloadImages() { 
	var d = document;
	if (d.images) {
		if (!d.MM_p)
			d.MM_p = new Array();
		var i, j = d.MM_p.length, a = MM_preloadImages.arguments;
		for (i = 0; i < a.length; i++)
			if (a[i].indexOf("#") != 0) {
				d.MM_p[j] = new Image;
				d.MM_p[j++].src = a[i];
				console.log(a[i]);
			}
	}
	cosole.log("MM_preloadImages");
}
function MM_swapImgRestore() { 
	var i, x, a = document.MM_sr;
	for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++)
		x.src = x.oSrc;
	cosole.log("MM_swapImgRestore");
}
function MM_findObj(n, d) {
	var p, i, x;
	if (!d)
		d = document;
	if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
		d = parent.frames[n.substring(p + 1)].document;
		n = n.substring(0, p);
	}
	if (!(x = d[n]) && d.all)
		x = d.all[n];
	for (i = 0; !x && i < d.forms.length; i++)
		x = d.forms[i][n];
	for (i = 0; !x && d.layers && i < d.layers.length; i++)
		x = MM_findObj(n, d.layers[i].document);
	if (!x && d.getElementById)
		x = d.getElementById(n);
	cosole.log("MM_findObj");
	return x;
}

function MM_swapImage() { 
	var i, j = 0, x, a = MM_swapImage.arguments;
	document.MM_sr = new Array;
	for (i = 0; i < (a.length - 2); i += 3)
		if ((x = MM_findObj(a[i])) != null) {
			document.MM_sr[j++] = x;
			if (!x.oSrc)
				x.oSrc = x.src;
			x.src = a[i + 2];
		}
	cosole.log("MM_swapImage");
}

var app = angular.module('website', ['ngAnimate', 'ngTouch', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html"})
    .when("/home", {templateUrl: "partials/home.html"})
     .when("/attractions", {templateUrl: "partials/attractions.html"})
    .when("/restaurants", {templateUrl: "partials/restaurants.html"})
    .when("/history", {templateUrl: "partials/history.html"})
    .when("/contact", {templateUrl: "partials/contact.html"})
    .when("/directions", {templateUrl: "partials/directions.html"})
    .when("/about", {templateUrl: "partials/about.html"})
    .otherwise("/404", {templateUrl: "partials/404.html"});
}]);


app.controller('carousel',function($scope) {
					$scope.slides = [
							{
								image : '../images/labro_home_page.JPG',
								description : 'labro'
							},
							{
								image : '../images/labro_main_street_towards_the house.JPG',
								description : 'labro'
							},
							{
								image : '../images/labro_church_bench.JPG',
								description : 'labro'
							},
							{
								image : '../images/labro_sunset_lake.JPG',
								description : 'labro'
							},
							{
								image : '../images/Labro_view_lake_foggy.JPG',
								description : 'labro'
							},
							{
								image : '../images/labro_lake_boats.JPG',
								description : 'labro'
							},
							{
								image : '../images/labro_lake.JPG',
								description : 'labro'
							},
							{
								image : '../images/labro_view_lake_boats_daytime.JPG',
								description : 'labro'
							} ];

					$scope.direction = 'left';
					$scope.currentIndex = 0;

					$scope.setCurrentSlideIndex = function(index) {
						$scope.direction = (index > $scope.currentIndex) ? 'left': 'right';
						$scope.currentIndex = index;
						console.log("setCurrentSlideIndex")
					};

					$scope.isCurrentSlideIndex = function(index) {
						return $scope.currentIndex === index;
						console.log("isCurrentSlideIndex")
					};

					$scope.prevSlide = function() {
						$scope.direction = 'left';
						$scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
						console.log("prevSlide")
					};

					$scope.nextSlide = function() {
						$scope.direction = 'right';
						$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
						console.log("nextSlide")
					};
				}).animation('.slide-animation', function() {
			return {
				beforeAddClass : function(element, className, done) {
					var scope = element.scope();

					if (className == 'ng-hide') {
						var finishPoint = element.parent().width();
						if (scope.direction !== 'right') {
							finishPoint = -finishPoint;
						}
						TweenMax.to(element, 0.5, {
							left : finishPoint,
							onComplete : done
						});
					} else {
						done();
					}
				},
				removeClass : function(element, className, done) {
					var scope = element.scope();

					if (className == 'ng-hide') {
						element.removeClass('ng-hide');

						var startPoint = element.parent().width();
						if (scope.direction === 'right') {
							startPoint = -startPoint;
						}

						TweenMax.fromTo(element, 0.5, {
							left : startPoint
						}, {
							left : 0,
							onComplete : done
						});
					} else {
						done();
					}
				}
			};
		});

app.controller('customersCtrl', function($scope) {
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
