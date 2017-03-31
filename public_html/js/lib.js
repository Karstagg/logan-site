
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
		$(".comics-link").load("php/content-" + currentLanguage + ".php #comics-link-" + currentLanguage);
		$(".contact-link").load("php/content-" + currentLanguage + ".php #contact-link-" + currentLanguage);
		$(".resume-link").load("php/content-" + currentLanguage + ".php #resume-link-" + currentLanguage);
		$("#enter-btn").load("php/content-" + currentLanguage + ".php #enter-" + currentLanguage);
		//intro
		$("#intro").load("php/content-" + currentLanguage + ".php #intro-" + currentLanguage);
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

	//creates slider and checks/adapts for mobile devices

	var isMobile = false; //initiate as false
// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

	if (isMobile === false) {
		$('.slider').slick({
			mobileFirst: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			swipeToSlide: false,
		});
	}
	else{
		$('.slider').slick({
			mobileFirst: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			swipeToSlide: false,
		});
	}
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


