$(document).ready(function() {

	//custom scripting goes here

	// injecting current year into footer
	// DO NOT DELETE

	var d = new Date();
	var year = d.getFullYear();

	$('.copyright').text(year);


	// some code blocks require javascript to function, like slideshows, synopsis blocks, etc
	// you can find that code here: https://github.com/DallasMorningNews/generator-dmninteractives/wiki/Cookbook


	var services = [
		{
			"id": "uber",
			"name": "Uber Eats",
			"zips": [75202, 75201, 75226, 75204, 75207, 75219, 75230, 75214, 75206],
			"instant": true,
			"subscription": false,
			"groceries": false,
			"fee": [2.99, 3.99],
			"favorite": "",
			"customer": ["Flexible", "Hungry"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus, eros ac rhoncus elementum, augue orci tempor mi, non condimentum neque nunc at turpis. ",
				"schedule": "—",
				"common_orders": "—",
				"other_services": "No",
				"fees": "$2.99 to $3.99",
				"typical_meal": "$8 to $12*",
				"time": "—",
				"instant_delivery": "Yes",
				"subscription": "No",
				"disclaimer": "*Instant meals range from $8 to $12."
			}
		},
		{
			"id": "caviar",
			"name": "Caviar",
			"zips": [75229],
			"instant": false,
			"subscription": true,
			"groceries": false,
			"fee": [0, 4.99],
			"favorite": ["Pizza", "Ramen"],
			"customer": ["Foodie"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus, eros ac rhoncus elementum, augue orci tempor mi, non condimentum neque nunc at turpis.",
				"schedule": "Everyday, 9 a.m. to 9 p.m.",
				"common_orders": "Neopolitan pizza from Cane Rosso; Ramen from Monkey King Noodle Co.; Comfort food from Dallas Grilled Cheese, and Hot dogs from Luscher's Red Hots",
				"other_services": "No",
				"fees": "$0 to $4.99*",
				"typical_meal": "—",
				"time": "25 - 40 minutes",
				"instant_delivery": "No",
				"subscription": "No",
				"disclaimer": "*Price is dependent on distant from the restaurant"
			}
		},
		{
			"id": "grubhub",
			"name": "GrubHub",
			"zips": [ 75201, 75202, 75203, 75204, 75205, 75206, 75207, 75208, 75209, 75210, 75212, 75214, 75215, 75218, 75219, 75220, 75223, 75225, 75226, 75227, 75228, 75229, 75230, 75231, 75234, 75235, 75238, 75240, 75243, 75244, 75246, 75247, 75248, 75251, 75252, 75254, 75261, 75287],
			"instant": false,
			"subscription": true,
			"groceries": false,
			"fee": [2.99, 2.99],
			"favorite": ["Tex-Mex"],
			"customer": ["Flexible"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus, eros ac rhoncus elementum, augue orci tempor mi, non condimentum neque nunc at turpis.",
				"schedule": "Restaurants choose their hours of operation and delivery",
				"common_orders": "Tex-Mex and Southwest food, especially food from Primo's Tex-Mex",
				"other_services": "No",
				"fees": "—",
				"typical_meal": "About $30",
				"time": "About 40 minutes",
				"instant_delivery": "No",
				"subscription": "No",
				"disclaimer": ""
			}
		},
		{
			"id":  "postmates",
			"name": "Postmates",
			"zips": [75228],
			"instant": false,
			"subscription": false,
			"groceries": false,
			"fee": [0, 5.00],
			"favorite": ["Fast Food"],
			"customer": ["On-demand"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus, eros ac rhoncus elementum, augue orci tempor mi, non condimentum neque nunc at turpis.",
				"schedule": "All day, every day",
				"common_orders": "Mexican food, Orders from Chipotle, Whataburger and Raising Cane’s Chicken Fingers",
				"other_services": "Yes",
				"fees": "$3.99 and up*",
				"typical_meal": "About $25",
				"time": "About 30 minutes",
				"instant_delivery": "No",
				"subscription": "Yes",
				"disclaimer": "*$3.99 for Plus Merchants, $6 and up depending on distance"
			}
		},
		{
			"id": "favor",
			"name": "Favor",
			"zips": [75201, 75202, 75204, 75205, 75206, 75246, 75219, 75226, 75225, 75214, 75209, 75235, 75207, 75208, 75230],
			"instant": false,
			"subscription": true,
			"groceries": true,
			"fee": [7, 7],
			"favorite": ["Tacos", "Sushi", "Fast Food"],
			"customer": ["Hungry", "Shopper"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus, eros ac rhoncus elementum, augue orci tempor mi, non condimentum neque nunc at turpis.",
				"schedule": "",
				"common_orders": "Tacos, sushi and fast-food; Tacos at Velvet Taco and sandwiches from East Hampton",
				"other_services": "Yes",
				"fees": "$5",
				"typical_meal": "About $30",
				"time": "About 35 minutes",
				"instant_delivery": "No",
				"subscription": "No",
				"disclaimer": ""
			}
		},
		{
			"id": "amazon",
			"name": "Amazon Prime Now",
			"zips": [75230],
			"instant": true,
			"subscription": true,
			"groceries": true,
			"fee": [8.99, 8.99],
			"favorite": [""],
			"customer": ["Hungry"],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus, eros ac rhoncus elementum, augue orci tempor mi, non condimentum neque nunc at turpis.",
				"schedule": "Every day, 8 a.m. to 10 p.m.",
				"common_orders": "Groceries such as water, eggs and orange juice",
				"other_services": "Yes — including groceries from Sprouts.",
				"fees": "$0, $7.99*",
				"typical_meal": "—",
				"time": "—",
				"instant_delivery": "No",
				"subscription": "Yes",
				"disclaimer": "* One-hour delivery is $7.99"
			}
		},
		{
			"id": "doordash",
			"name": "DoorDash",
			"zips": [75228],
			"instant": false,
			"subscription": false,
			"groceries": false,
			"fee": [1.99, 6.99],
			"favorite": ["Mexican"],
			"customer": [""],
			"score": 0,
			"service_area": true,
			"copy": {
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus, eros ac rhoncus elementum, augue orci tempor mi, non condimentum neque nunc at turpis.",
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
		"groceries": "",
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
			if (v.groceries === user.groceries) {
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
				if (thisObj.closest(".answerBlock").find(".checked").index() === -1) {
					user.instant = "";
				} else {
					user.instant = (thisObj.closest(".answerBlock").find(".checked").attr("data-answer") === "true");
				}
				break;
			case "groceries":
				if (thisObj.closest(".answerBlock").find(".checked").index() === -1) {
					user.groceries = "";
				} else {
					user.groceries = (thisObj.closest(".answerBlock").find(".checked").attr("data-answer") === "true");
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
		} else {
			findAreaMatch();
		}

		if (questionNumber === 0) {
			$("#previous").addClass("noShow");
		} else {
			$("#previous").removeClass("noShow");
		}

		$(".question").addClass("inactiveQuestion");

		$(".question").eq(questionNumber).removeClass("inactiveQuestion").addClass("activeQuestion");

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

		displayServices(bestMatch);

	}

	function displayServices(data) {
		$(".service").remove();
		console.log(data);


		if (data.length < 7) {
			$(".viewAll").removeClass("noShow");
		}

		$("#servicesBlock").removeClass("noShow");

		var serviceTop = $("#services").offset().top;
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

		var content = services.append("div")
			.attr("class", "content clearFix");

		var details = content.append("div")
			.attr("class", "details");

		details.append("p")
			.html(function(d) {
				return d.copy.description;
			});

		details.append("p")
			.html(function(d) {
				return "<strong>Schedule: </strong>" + d.copy.schedule;
			});

		details.append("p")
			.html(function(d) {
				return "<strong>Common orders: </strong>" + d.copy.common_orders;
			});

		details.append("p")
			.html(function(d) {
				return "<strong>Common orders: </strong>" + d.copy.other_services;
			});


		var periphs = content.append("div")
			.attr("class", "periphs");

		periphs.append("h6").text("Fees");
		periphs.append("p").text(function(d) {
			return d.copy.fees;
		});

		periphs.append("h6").text("Typical meal $");
		periphs.append("p").text(function(d){
			return d.copy.typical_meal;
		});

		periphs.append("h6").text("Delivery time");
		periphs.append("p").text(function(d) {
			return d.copy.time;
		});

		periphs.append("h6").text("Instant delivery");
		periphs.append("p").text(function(d) {
			return d.copy.instant_delivery;
		});

		periphs.append("h6").text("Subscription");
		periphs.append("p").text(function(d) {
			return d.copy.subscription;
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
		var h = 0;

		console.log($("#questions").height());

		$(".service").each(function() {
			console.log($(this).outerHeight());
			h = h > $(this).outerHeight() ? h : $(this).outerHeight();
		});

		$(".service").css("min-height", h + 30);

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

		//resets the question counter to 0, hides the previous button
		questionNumber = 0;
		$(".question").addClass("inactiveQuestion");
		$(".question").eq(questionNumber).removeClass("inactiveQuestion").addClass("activeQuestion");
		$("#previous").addClass("noShow");
		$(".validator").addClass("noShow");

		// clear the input fields
		$("#zip").val("");
		$("#feeInput").val("");

		// clear all the checked options
		$(".checked").addClass(".unchecked").removeClass("checked");

		// clear the user object
		user.instant = "";
		user.groceries = "";
		user.subscription = "";
		user.customer = [];
		user.fee = 10000;

		console.log(services, user);

	}

	$(".retake").click(function() {
		clearQuiz();
	});


});
