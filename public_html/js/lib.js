
$(document).ready(function() {

	var currentLanguage;
	//adapted from http://www.quirksmode.org/js/cookies.html
	//reads cookie readCookie("lang")
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while(c.charAt(0) == " ") c = c.substring(1, c.length);
			if(c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length).replace(/"/g, "");
		}
		return null;
	}

	//changes content based on language selection cookie
	if (readCookie("lang") === null || readCookie("lang") == "undefined" ) {
		document.cookie = "lang=en";
		$(".en_label").addClass("label_select");
	}
	else {
		$("."+readCookie("lang")+"_label").addClass("label_select");
	}
	

	//changes the readCookie("lang") of the language selection cookie
	$("input[name=lang]").click(function () {
		if ($("input[name=lang]:checked")) {
			var value = $("input[name=lang]:checked").val();
			document.cookie = "lang="+'"'+value+'"';
		}
	});
	$("input[name=lang2]").click(function () {
		if ($("input[name=lang2]:checked")) {
			var value = $("input[name=lang2]:checked").val();
			document.cookie = "lang="+'"'+value+'"';
		}
	});

	//gets a greeting time based on the user's location
	var date = new Date();
	var time = date.getHours();
	var timeOfDay;
	if (time < 12 && time > 2) {
		timeOfDay = "morning";
	}
	else if (time > 12 && time < 17) {
		timeOfDay = "afternoon";
	}
	else {
		timeOfDay = "evening"
	}

	function insertText () {
		currentLanguage = readCookie("lang");

		//checks a cookie to see what language is selected and loads that info when the page loads
		switch(timeOfDay) {
			case "morning":
				$("#greeting").load("php/content-" + currentLanguage + ".php #morning-" + currentLanguage);
				$(".bg_need").addClass("morning");
				$(".need-text").addClass("morning-text");
				$(".need-nav-bg").addClass("nav-morning");
				$(".need-colors").addClass("morning-button");
				$(".need-brand").addClass("morning-brand");
				$("body").addClass("morning-color");
				break;
			case "afternoon":
				$("#greeting").load("php/content-" + currentLanguage + ".php #afternoon-" + currentLanguage);
				$(".bg_need").addClass("noon");
				$(".need-text").addClass("day-text");
				$(".need-nav-bg").addClass("nav-day");
				$(".need-colors").addClass("day-button");
				$(".need-brand").addClass("day-brand");
				$("body").addClass("day-color");
				break;
			case "evening":
				$("#greeting").load("php/content-" + currentLanguage + ".php #evening-" + currentLanguage);
				$(".bg_need").addClass("night");
				$(".need-text").addClass("night-text");
				$(".need-nav-bg").addClass("nav-night");
				$(".need-colors").addClass("night-button");
				$(".need-brand").addClass("night-brand");
				$("body").addClass("night-color");
				break;
		}

		//links
		$(".intro-link").load("php/content-" + currentLanguage + ".php #intro-link-" + currentLanguage);
		$(".other-work-link").load("php/content-" + currentLanguage + ".php #other-work-link-" + currentLanguage);
		$(".contact-link").load("php/content-" + currentLanguage + ".php #contact-link-" + currentLanguage);
		$(".resume-link").load("php/content-" + currentLanguage + ".php #resume-link-" + currentLanguage);
		$("#enter-btn").load("php/content-" + currentLanguage + ".php #enter-" + currentLanguage);
		//intro
		$("#intro").load("php/content-" + currentLanguage + ".php #intro-" + currentLanguage);
		//other work
		$(".deadLink").load("php/content-" + currentLanguage + ".php #dead-work-link-" + currentLanguage);
		$(".liveLink").load("php/content-" + currentLanguage + ".php #live-work-link-" + currentLanguage);
		$("#lingorator-text").load("php/content-" + currentLanguage + ".php #lingorator-" + currentLanguage);
		$("#kiteCrypt-text").load("php/content-" + currentLanguage + ".php #kiteCrypt-" + currentLanguage);
		//contact form
		$("#contact").load("php/content-" + currentLanguage + ".php #contact-" + currentLanguage);
		$("#name-inject").load("php/content-" + currentLanguage + ".php #name-" + currentLanguage);
		$("#mail-inject").load("php/content-" + currentLanguage + ".php #mail-" + currentLanguage);
		$("#subject-inject").load("php/content-" + currentLanguage + ".php #subject-" + currentLanguage);
		$("#message-inject").load("php/content-" + currentLanguage + ".php #message-" + currentLanguage);
		$("#send").load("php/content-" + currentLanguage + ".php #send-" + currentLanguage);
		$("#reset").load("php/content-" + currentLanguage + ".php #reset-" + currentLanguage);



	}
	// calling the insert text function//3fdsafaf
	insertText();

	//checks the selected language when a radio button is clicked and loads the appropriate info
	$("input[type=radio]").click(function () {

		$(".lang_label").removeClass("label_select");
		$("."+readCookie("lang")+"_label").addClass("label_select");
		insertText();

	});


	//determines the size of the viewport
	var height = $(window).height(),
		width = $(window).width();

	//function to handle scrolling on button click

		$(function() { // adapted from Edu Lomeli http://stackoverflow.com/questions/27558323/bootstrap-scroll-down-when-the-user-clicks-the-button
			$('.scroll').click(function() {
				if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if(target.length) {
						$('html,body').animate({
							scrollTop: (target.offset().top - height * 0.25) // adjust this according to your content

						}, 1000);
						return false;
					}
				}
			});
		});

	//starts and stops the css animation for the navbar brand on click
	$('.navbar-brand').click(function() {

			$('.navbar-brand').addClass("animate-nav");

		setTimeout(function() {
			$('.navbar-brand').removeClass("animate-nav");
		}, 2025);

	});
/********************************************************************************
 validation for form
********************************************************************************/
	/* begin validation*/


	function injectError (type) {
		var errorMessage;
		if (type === "name") {
			if(currentLanguage === "en") {
				errorMessage = "Please enter your name";
			}
			else if(currentLanguage === "de") {
				errorMessage = "Bitte geben Sie Ihren Namen ein";
			}
			else {
				errorMessage = "氏名を入力してください";
			}
		}
		if (type === "email") {
			if (currentLanguage === "en") {
				errorMessage = "Please enter a valid email address.";
			}
			else if (currentLanguage === "de") {
				errorMessage = "Bitte geben Sie eine gültige E-mail Adresse ein";
			}
			else {
				errorMessage = "有効なメールアドレスを入力してください";
			}
		}
		if (type === "message") {
			if (currentLanguage === "en") {
				errorMessage = "Please enter a message.";
			}
			else if (currentLanguage === "de") {
				errorMessage = "Bitte geben Sie eine Nachricht ein";
			}
			else {
				errorMessage = "メッセージを入力してくださいます";
			}
		}
		if (type === "messageLength") {
			if (currentLanguage === "en") {
				errorMessage = "Message too long.";
			}
			else if (currentLanguage === "de") {
				errorMessage = "Die Nachricht ist zu lang";
			}
			else {
				errorMessage = "メッセージは長過ぎ";
			}
		}
		return errorMessage;
	}


	$("#contact-form").validate({


		// setup handling of form errors
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		// rules define what is good/bad input
		// each rule starts with the form input element's NAME attribute
		rules: {
			name: {
				required: true
			},
			email: {
				email: true,
				required: true
			},
			message: {
				required: true,
				maxlength: 2000
			}
		},

		// error messages to display to the end user
		messages: {
			name: {
				required: injectError("name")
			},
			email: {
				email: injectError("email"),
				required: injectError("email")
			},
			message: {
				required: injectError("message"),
				maxlength: injectError("messageLength")
			}
		},

		submitHandler: function(form) {
			$("#contact-form").ajaxSubmit({
				type: "POST",
				url: $("#contact-form").attr("action"),

				success: function(ajaxOutput) {
					// clear the output area's formatting
					$("#output-area").css("display", "");

					// write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#contact-form")[0].reset();
					}
				}
			})
		}

	});/* end validate function */



});


