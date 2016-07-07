$(document).ready(function() {

	// injecting current year into footer
	// DO NOT DELETE

	var d = new Date();
	var year = d.getFullYear();

	$('.copyright').text(year);

	setTimeout(function(){
		$("#storyHead").addClass("moved");
	}, 500);


	// WHAT I'M MISSING

	//
	// Caviar
	// Typical meal price, zip codes
	//
	// Amazon
	// typical meal price, average delivery time, zip codes

	var services = [
		{
			"id": "uber",
			"name": "Uber Eats",
			"zips": [75202, 75201, 75226, 75204, 75207, 75219, 75230, 75214, 75206],
			"instant": 5,
			"subscription": false,
			"more": false,
			"fee": [2.99, 3.99],
			"customer": ["Fast", "Affordable", "Easy"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "You are all about efficiency, and may already be familiar with apps that get you what you need quickly. Uber Eats offers instant delivery on a limited number of food items. That means you can have your dinner at your door within XXX minutes — so long as you're not a picky eater.",
				"weburl": "https://ubereats.com/dallas/",
				"website": "ubereats.com/dallas",
				"schedule": "UberEATS is available 24/7. Instant delivery is available 11 a.m. to 2 p.m., Monday through Friday.",
				"common_orders": "American, Indian and Thai",
				"other_services": "No",
				"fees": "$2.99 to $3.99",
				"typical_meal": "$8 to $12*",
				"time": "Instant delivery is 10 minutes or less.",
				"instant_delivery": "Yes",
				"subscription": "No",
				"disclaimer": "*Instant meals range from $8 to $12 and can be delivered in 10 minutes or less."
			}
		},
		{
			"id": "caviar",
			"name": "Caviar",
			"zips": [75229],
			"instant": 4,
			"subscription": false,
			"more": false,
			"fee": [0, 4.99],
			"customer": ["Gourmet", "Upscale", "Adventurous"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "Even if you are a foodie, you don't always have time to make a gourmet meal and sometimes you feel like staying in. Caviar gives you the option to choose some of the best dishes from your favorite spots, which can add up to a pricier dinner.",
				"weburl": "https://www.trycaviar.com/dallas",
				"website": "trycaviar.com/dallas",
				"schedule": "Everyday, 9 a.m. to 9 p.m.",
				"common_orders": "Neopolitan pizza from Cane Rosso; Ramen from Monkey King Noodle Co.; Comfort food from Dallas Grilled Cheese, and Hot dogs from Luscher's Red Hots",
				"other_services": "No",
				"fees": "$0 to $4.99*",
				"typical_meal": "—",
				"time": "25 to 40 minutes",
				"instant_delivery": "No",
				"subscription": "No",
				"disclaimer": "*Price is dependent on distant from the restaurant"
			}
		},
		{
			"id": "grubhub",
			"name": "GrubHub",
			"zips": [ 75201, 75202, 75203, 75204, 75205, 75206, 75207, 75208, 75209, 75210, 75212, 75214, 75215, 75218, 75219, 75220, 75223, 75225, 75226, 75227, 75228, 75229, 75230, 75231, 75234, 75235, 75238, 75240, 75243, 75244, 75246, 75247, 75248, 75251, 75252, 75254, 75261, 75287],
			"instant": 1,
			"subscription": false,
			"more": false,
			"fee": [2.99, 2.99],
			"customer": ["Affordable", "Late-Night", "Adventurous"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "You like ordering and receiving deliveries from your neighborhood restaurants and favorite spots around town.",
				"weburl": "https://www.grubhub.com/",
				"website": "grubhub.com",
				"schedule": "Restaurants choose their hours of operation and delivery",
				"common_orders": "Tex-Mex and Southwest food, especially food from Primo's Tex-Mex",
				"other_services": "No",
				"fees": "$2.99",
				"typical_meal": "About $30",
				"time": "About 40 minutes",
				"instant_delivery": "No",
				"subscription": "No",
				"disclaimer": ""
			}
		},
		{
			"id": "favor",
			"name": "Favor",
			"zips": [75201, 75202, 75204, 75205, 75206, 75246, 75219, 75226, 75225, 75214, 75209, 75235, 75207, 75208, 75230],
			"instant": 4,
			"subscription": false,
			"more": true,
			"fee": [5, 5],
			"customer": ["Affordable", "Personalized", "Upscale"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "You like having dinner delivered to your door, but you also like skipping trips to the convenience store for shampoo or other everyday items.",
				"weburl": "https://favordelivery.com/city/dallas/",
				"website": "favordelivery.com",
				"schedule": "Sun. to Wed.: 8 a.m. to midnight; Thur. to Sat.: 8 a.m. to 3 a.m. ",
				"common_orders": "Tacos, sushi and fast-food; Tacos at Velvet Taco and sandwiches from East Hampton",
				"other_services": "Yes. Get anything delivered. It’s literally their motto.",
				"fees": "$5",
				"typical_meal": "About $30",
				"time": "About 35 minutes",
				"instant_delivery": "No",
				"subscription": "No",
				"disclaimer": ""
			}
		},
		{
			"id":  "postmates",
			"name": "Postmates",
			"zips": [75001, 75006, 75075, 75080, 75093, 75201, 75202, 75203, 75204, 75205, 75206, 75207, 75208, 75209, 75214, 75215, 75218, 75219, 75220, 75223, 75225, 75226, 75229, 75230, 75231, 75234, 75235, 75238, 75240, 75243, 75244, 75246, 75247, 75248, 75251, 75252, 75254, 75287 ],
			"instant": 2,
			"subscription": true,
			"more": true,
			"fee": [3.99, 25],
			"customer": ["Personalized", "Late-Night", "Adventurous"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus, eros ac rhoncus elementum, augue orci tempor mi, non condimentum neque nunc at turpis.",
				"weburl": "https://postmates.com/",
				"website": "postmates.com",
				"schedule": "All day, every day",
				"common_orders": "Mexican food, Orders from Chipotle, Whataburger and Raising Cane’s Chicken Fingers",
				"other_services": "Delivery of anything sold in any store.",
				"fees": "$3.99 and up*",
				"typical_meal": "About $25",
				"time": "About 30 minutes",
				"instant_delivery": "No",
				"subscription": "Yes, $9.99/month*",
				"disclaimer": "*Anywhere products start at $6 and increase based on distance, with a cap of $25. Plus merchant deliveries are $3.99."
			}
		},
		{
			"id": "amazon",
			"name": "Amazon Prime Now",
			"zips": [75230],
			"instant": 3,
			"subscription": true,
			"more": true,
			"fee": [0, 7.99],
			"customer": ["Easy", "Personalized", "Affordable"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "You like having your entertainment on demand, too.",
				"weburl": "https://primenow.amazon.com/onboard?sourceUrl=%2F",
				"website": "primenow.amazon.com",
				"schedule": "Every day, 8 a.m. to 10 p.m.",
				"common_orders": "Groceries such as water, eggs and orange juice",
				"other_services": "Yes — including groceries from Sprouts.",
				"fees": "$0, $7.99*",
				"typical_meal": "—",
				"time": "—",
				"instant_delivery": "No",
				"subscription": "Yes. $99/year or $10.99/month",
				"disclaimer": "* One-hour delivery is $7.99"
			}
		},
		{
			"id": "doordash",
			"name": "DoorDash",
			"zips": [75001, 75002, 75006, 75007, 75010, 75013, 75019, 75022, 75023, 75024, 75025, 75028, 75033, 75034, 75035, 75038, 75039, 75040, 75041, 75042, 75044, 75048, 75050, 75051, 75052, 75054, 75056, 75057, 75060, 75061, 75062, 75063, 75067, 75068, 75069, 75070, 75071, 75074, 75075, 75077, 75078, 75080, 75081, 75082, 75093, 75094, 75099, 75201, 75202, 75203, 75204, 75205, 75206, 75207, 75208, 75209, 75210, 75211, 75212, 75214, 75215, 75216, 75218, 75219, 75220, 75223, 75224, 75225, 75226, 75227, 75228, 75229, 75230, 75231, 75234, 75235, 75237, 75238, 75240, 75241, 75242, 75243, 75244, 75246, 75247, 75248, 75251, 75252, 75254, 75261, 75270, 75275, 75287, 75390, 76001, 76002, 76006, 76010, 76011, 76012, 76013, 76014, 76015, 76016, 76017, 76018, 76021, 76022, 76034, 76036, 76039, 76040, 76051, 76053, 76054, 76060, 76063, 76092, 76102, 76103, 76104, 76105, 76106, 76107, 76108, 76109, 76110, 76111, 76112, 76114, 76115, 76116, 76117, 76118, 76119, 76120, 76123, 76126, 76127, 76129, 76132, 76133, 76134, 76137, 76140, 76148, 76155, 76177, 76180, 76182, 76226, 76227, 76244, 76248, 76262],
			"instant": 3,
			"subscription": false,
			"more": false,
			"fee": [1.99, 6.99],
			"customer": ["Upscale", "Adventurous", "Personalized"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus, eros ac rhoncus elementum, augue orci tempor mi, non condimentum neque nunc at turpis.",
				"weburl": "https://www.doordash.com/",
				"website": "doordash.com",
				"schedule": "11 a.m. to 10 p.m. in Dallas area, select areas 7 a.m to 1 a.m.",
				"common_orders": "Mexican food, Pad Thai, Velvet Taco",
				"other_services": "No",
				"fees": "$1.99 to $6.99",
				"typical_meal": "More than $30",
				"time": "30 to 40 minutes",
				"instant_delivery": "No",
				"subscription": "No",
				"disclaimer": ""
			}
		}
	];


	var user = {
		"instant": "",
		"more": "",
		"subscription": "",
		"customer": [],
		"fee": 10000
	};

	////////////////////////////////////////////////////
	///// CHECKING ANSWERS /////////////////////////////
	////////////////////////////////////////////////////

	// toggling the check class on answer

	$(".answerBlock span").click(function() {
		checkAnswer($(this));
	});

	function checkAnswer(thisObj) {

		// toggle the unchecked and checked classes on the option clicked
		thisObj.toggleClass("unchecked").toggleClass("checked");

		// if this is a boolean question (yes/no), remove the checked class
		// from the other option if the other option has the checked class
		if (thisObj.parent().hasClass("boolean")) {
			thisObj.siblings().removeClass("checked");
		}

		updateServices(thisObj);
	}



	////////////////////////////////////////////////////
	///// VALIDATING INPUT FIELDS //////////////////////
	////////////////////////////////////////////////////

	// checking the values on the zip and fee inputs and making sure they
	// match our requirements (are numbers, 5 digit zip codes)

	$("#zip").keyup(function() {
		validateInput($(this));
	});

	$("#feeInput").blur(function() {
		validateInput($(this));
		updateServices($(this));
	});


	function validateInput(thisObj) {

		// first check if the value is a number, if it is, show the valid label
		if (isNaN(thisObj.val()) === true) {
			thisObj.siblings(".invalid").removeClass("noShow");
			thisObj.siblings(".valid").addClass("noShow");
		}
		// if the value is not a number, show the invalid label
		else {
			thisObj.siblings(".invalid").addClass("noShow");
			thisObj.siblings(".valid").removeClass("noShow");
		}

		// then check if the input is the zip input and the length is not 5
		// if it is, show the invalid label
		if (thisObj.attr("id") === "zip" && thisObj.val().length !== 5) {
			thisObj.siblings(".invalid").removeClass("noShow");
			thisObj.siblings(".valid").addClass("noShow");
		}
		// if it is the zip input and the length is equal to 5, show the valid label
		else if (thisObj.attr("id") === "zip" && thisObj.val().length === 5) {
			thisObj.siblings(".invalid").addClass("noShow");
			thisObj.siblings(".valid").removeClass("noShow");

			// if we have a valid zip, pass the value off to the checkZips function
			checkZips(parseInt(thisObj.val()));
		}

		// lastly, check if the field is empty
		if (thisObj.val() === "") {

			// if the field is empty, remove both valid and invalid flags
			thisObj.siblings(".validator").addClass("noShow");

			// if it is the zip field that is empty, set the service area value
			// for every service to true, and rerun the scores
			if (thisObj.attr("id") === "zip") {
				$.each(services, function(k,v) {
					v.service_area = true;
					runScores();
				});
			}

			// if it is the fee field that is empty, set the user.fee key to 10000
			// insuring it won't be lower than any fee, then updateServices
			if (thisObj.attr("id") === "feeInput") {
				user.fee = 10000;
				updateServices(thisObj);
			}
		}

	}


	////////////////////////////////////////////////////
	///// CHECKING THE ZIPS FOR SERVICE AREA ///////////
	////////////////////////////////////////////////////

	function checkZips(userZip) {

		// check each service in the services array and see if its zip array contains
		// the user's zip. if it does, set the service area of the service to true
		// if it doesn't, set it to false, then run the scores
		$.each(services, function(k,v) {
			if ($.inArray(userZip, v.zips) === -1) {
				v.service_area = false;
			} else {
				v.service_area = true;
			}
		});

		runScores();
	}


	////////////////////////////////////////////////////
	///// RUNNING SCORES, UPDATING SERVICES ////////////
	////////////////////////////////////////////////////


	// updating the score for each service
	function runScores() {
		// for each service, set a score variable to 0
		$.each(services, function(k,v) {
			var score = 0;

			// if the service's service_area is false, fade that service back and
			// set it's highlight div's width to 0
			// else, fade that service back in

			// if (v.service_area === false) {
			// 	$("#" + v.id).addClass("noService");
			// 	$("#" + v.id).children(".highlight").css("width", 0);
			// } else {
			// 	$("#" + v.id).removeClass("noService");
			// }

			// check the other user keys against the services and adjusts the scores
			if (v.instant === user.instant) {
				score++;
			}
			if (v.subscription === user.subscription) {
				score++;
			}
			if (v.more === user.more) {
				score++;
			}
			if (v.fee[1] > user.fee) {
				score++;
			}
			for (i=0; i < v.customer.length; i++) {
				if ($.inArray(v.customer[i], user.customer) > -1) {
					score++;
					break;
				}
			}

			// update the score on each service
			v.score = score;

			// update the highlight div on the each service only if the div
			// does not have the "noService" class
			if ($("#" + v.id).hasClass("noService") === false) {
				$("#" + v.id).children(".highlight").css("width", ((v.score * 20) + "%"));
			}
		});
	}


	// checking what questions were answered and updating the user object based on that
	function updateServices(thisObj) {

		// grabbing the id of the question that was answered
		var question = thisObj.closest(".question").attr("id");

		// check which question was answered, then update the user object based on that
		switch(question) {
			case "instant":
				user.instant = parseInt(thisObj.text());
				break;
			case "more":
				if (thisObj.closest(".answerBlock").find(".checked").index() === -1) {
					user.more = "";
				} else {
					user.more = (thisObj.closest(".answerBlock").find(".checked").attr("data-answer") === "true");
				}
				break;
			case "subscription":
				if (thisObj.closest(".answerBlock").find(".checked").index() === -1) {
					user.subscription = "";
				} else {
					user.subscription = (thisObj.closest(".answerBlock").find(".checked").attr("data-answer") === "true");
				}
				break;

			// if the fee question was answered, check to make sure there is a number and not and empty field
			case "fee":
				if (isNaN(thisObj.val()) === false && thisObj.val().length > 0) {
					user.fee = thisObj.val();
				}
				break;

			// if the customer question was answered, check to see if one of
			// the answers is listed in the services customer array
			case "customer":
				user.customer = [];
				$.each($("#customer .answerBlock span"), function() {
					if ($(this).hasClass("checked") === true) {
						user.customer.push($(this).text());
					}
				});
				break;

			// let the user know they really broke some shit if they're seeing this
			default: alert("If you're seeing this message, something horribly wrong has happened.");
		}

		runScores();

	}







	$(".viewAll").click(function() {
		$("#servicesBlock nav button").addClass("noShow");
		$("#best").addClass("noShow");
		displayServices(services);
	});


	var questionNumber = 0,
		questionLength = 6;

	var areaMatch = [];
	var bestMatch = [];


	$(".switcher").on("click", function() {
		var direction = $(this).attr("id");
		changeQuestion(direction);
	});

	$(document).keypress(function(e) {
	    if(e.which == 13) {
	        changeQuestion("next");
	    }
});

	function changeQuestion(direction) {
		if (direction === "next" && questionNumber !== questionLength - 1) {
			questionNumber++;
		} else if (direction === "previous") {
			questionNumber--;
			$("#questionsNav .viewResults").addClass("noShow");
		} else {
			findAreaMatch();
		}

		if (questionNumber === 0) {
			$("#previous").addClass("noShow");
		} else {
			$("#previous").removeClass("noShow");
		}

		if (questionNumber === questionLength - 1 ) {
			$(".viewResults").removeClass("noShow");
		}

		$(".viewResults").click(function() {
			findAreaMatch();
		});

		$(".question").addClass("inactiveQuestion");

		$(".question").eq(questionNumber).removeClass("inactiveQuestion").addClass("activeQuestion");

		$("#progressBar").width((questionNumber / (questionLength - 1)) * 100 + "%" );

	}

	function findAreaMatch() {
		areaMatch = [];
		$.each(services, function(k,v) {
			if (v.service_area === true) {
				areaMatch.push(v);
			}
		});

		findBestMatch();
	}

	function findBestMatch() {

		var topScore = 0;
		bestMatch = [];
		$.each(areaMatch, function(k,v) {
			if (v.score > topScore) {
				topScore = v.score;
			}
		});

		$.each(areaMatch, function(k,v) {
			if (v.score >= topScore) {
				bestMatch.push(v);
			}
		});

		$("#services").removeClass("noShow");
		$("#best").removeClass("noShow");
		$(".retake").removeClass("noShow");

		console.log(bestMatch);

		displayServices(bestMatch);

		if (bestMatch.length === 0) {
			$("#servicesBlock").prepend("<h5>None of the couriers service the zip code you provided.</h5>");
			$("#best").addClass("noShow");
		}

	}

	function displayServices(data) {
		$(".service").remove();
		console.log(data);


		if (data.length < 7) {
			$(".viewAll").removeClass("noShow");
		}



		$("#servicesBlock").removeClass("noShow");

		var serviceTop = $("#servicesBlock").offset().top;
		$("html, body").animate({
			scrollTop: serviceTop - 50
		}, 250);

		var services = d3.select("#services").selectAll(".service")
			.data(data)
			.enter()
			.append("div")
			.attr("class", "clearFix service");

		services.append("img")
			.attr("src", function(d) {
				return "images/_" + d.id +".png";
			})
			.attr("alt", function(d) {
				return d.name + " logo";
			});

		services.append("a")
			.attr("href", function(d) {
				return d.copy.weburl;
			})
			.attr("target", "_blank")
			.text(function(d) {
				return d.copy.website;
			});

		var content = services.append("div")
			.attr("class", "content clearFix");

		var details = content.append("div")
			.attr("class", "details");

		details.append("p")
			.html(function(d) {
				return "<span class='label'>Why you should use: </span>" + d.copy.description;
			});

		details.append("p")
			.html(function(d) {
				return "<span class='label'>Schedule: </span>" + d.copy.schedule;
			});

		details.append("p")
			.html(function(d) {
				return "<span class='label'>Common orders: </span>" + d.copy.common_orders;
			});

		details.append("p")
			.html(function(d) {
				return "<span class='label'>Other services: </span>" + d.copy.other_services;
			});


		var periphs = content.append("div")
			.attr("class", "periphs");

		periphs.append("p").html(function(d) {
			return "<span class='label'>Fees: </span>" + d.copy.fees;
		});

		periphs.append("p").html(function(d){
			return "<span class='label'>Typical meal cost: </span>" + d.copy.typical_meal;
		});

		periphs.append("p").html(function(d) {
			return "<span class='label'>Delivery time: </span>" + d.copy.time;
		});

		periphs.append("p").html(function(d) {
			return "<span class='label'>Instant delivery: </span>" + d.copy.instant_delivery;
		});

		periphs.append("p").html(function(d) {
			return "<span class='label'>Subscription offered: </span>" + d.copy.subscription;
		});

		content.append("p").attr("class", "disclaimer")
			.text(function(d) {
				var c = "";

				if (d.copy.disclaimer.length > 0) {
					c = d.copy.disclaimer;
				}

				return c;

			});

		setCardHeights();


	}


	function setCardHeights() {

		if ($(window).width() > 700) {
			var h = 0;

			console.log($("#questions").height());

			$(".service").each(function() {
				console.log($(this).outerHeight());
				h = h > $(this).outerHeight() ? h : $(this).outerHeight();
			});

			$(".service").css("min-height", h + 30);
		}

	}


	function clearQuiz() {

		//resets all the scores and service areas
		$.each(services, function(k,v) {
			v.score = 0;
			v.service_area = true;
		});

		$("#servicesBlock").addClass("noShow");

		// scrolls the window to the questions div
		var questionsTop = $("#questions").offset().top;

		$("html, body").animate({
			scrollTop: questionsTop - 50
		}, 250);

		// resets the question counter to 0, resets all answers to inactive,
		// resets the progress bar, hides the previous button, hides all validator
		// text, hides the view results button
		questionNumber = 0;
		$(".question").addClass("inactiveQuestion");
		$(".question").eq(questionNumber).removeClass("inactiveQuestion").addClass("activeQuestion");
		$("#previous").addClass("noShow");
		$(".validator").addClass("noShow");
		$(".viewResults").addClass("noShow");
		$("#progressBar").width((questionNumber / (questionLength - 1)) * 100 + "%" );


		// clear the input fields
		$("#zip").val("");
		$("#feeInput").val("");

		// clear all the checked options
		$(".checked").addClass(".unchecked").removeClass("checked");

		// clear the user object
		user.instant = "";
		user.more = "";
		user.subscription = "";
		user.customer = [];
		user.fee = 10000;

		console.log(services, user);

	}

	$(".retake").click(function() {
		clearQuiz();
	});


});
