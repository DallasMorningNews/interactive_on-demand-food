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
			"zips": [75228],
			"instant": true,
			"subscription": false,
			"groceries": false,
			"fee": [2.99, 3.99],
			"favorite": "",
			"customer": ["Flexible", "Hungry"],
			"score": 0,
			"service_area": true
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
			"service_area": true
		},
		{
			"id": "grubhub",
			"name": "GrubHub",
			"zips": [75230],
			"instant": false,
			"subscription": true,
			"groceries": false,
			"fee": [2.99, 2.99],
			"favorite": ["Tex-Mex"],
			"customer": ["Flexible"],
			"score": 0,
			"service_area": true
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
			"service_area": true
		},
		{
			"id": "favor",
			"name": "Favor",
			"zips": [75229],
			"instant": false,
			"subscription": true,
			"groceries": true,
			"fee": [7, 7],
			"favorite": ["Tacos", "Sushi", "Fast Food"],
			"customer": ["Hungry", "Shopper"],
			"score": 0,
			"service_area": true
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
			"service_area": true
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
			"service_area": true
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
		console.log("blur");
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

		// then check if the input is the zip input and the length is 5
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
		console.log(user);
		// for each service, set a score variable to 0
		$.each(services, function(k,v) {
			var score = 0;

			// if the service's service_area is false, fade that service back and
			// set it's highlight div's width to 0
			// else, fade that service back in
			if (v.service_area === false) {
				$("#" + v.id).addClass("noService");
				$("#" + v.id).children(".highlight").css("width", 0);
			} else {
				$("#" + v.id).removeClass("noService");
			}

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


	// controlling the services bar on window scroll
	// tldr: if the top of the questions div is above the bottom of the window
	// and the bottom of the questions div is below the bottom of the window
	// make the services bar sticky
	
	$(window).scroll(function() {
		var questionsTop = $("#questions").offset().top;
		var questionsHeight = $("#questions").height();

		var windowHeight = $(window).height();
		var windowBottom = $(window).scrollTop() + windowHeight;

		if (windowBottom > questionsTop && windowBottom < questionsTop + questionsHeight) {
			$("#services").addClass("sticky").addClass("visible");
		} else {
			$("#services").removeClass("sticky").removeClass("visible");
		}
	});







});
