<!DOCTYPE html>
<html lang="en">
	<head>
		<?php require_once("php/image-list.php")?>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<!-- sets width to css pixes (1/96 inch) -->
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"
				integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
				integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
				crossorigin="anonymous"/>

		<!-- add custom css after bootstrap-->
		<link rel="stylesheet" href="css/main.css" type="text/css"/>
		<link href="https://fonts.googleapis.com/css?family=Pacifico|Righteous|Rock+Salt" rel="stylesheet">
		<link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css">
		<!-- HTML5 shiv and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
		<!-- latest min jQuery and Bootstrap-->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
		<!-- jQuery Form, Additional Methods, Validate -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.0/jquery.validate.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.0/additional-methods.min.js"></script>
		<script src='https://www.google.com/recaptcha/api.js'></script>
		<!--custom js-->
		<script src="js/lib.js"></script>
		<title>Logan Young</title>
	</head>
	<body>

		<nav class="navbar navbar-dark bg-inverse navbar-fixed-top need-text need-nav-bg">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
							  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand scroll need-brand" href="#page-top">Logan Young</a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-right">
						<li>
							<button type="button" class="transparent-btn" data-toggle="dropdown"><i class="fa fa-language fa-2x" aria-hidden="true"></i></button>
							<ul class="dropdown-menu">
								<li><label for="en2" class="lang_label en_label"><h1>EN</h1></label>
									<input name="lang2" id="en2" type="radio" value="en"></li>
								<li><label for="jp2" class="lang_label jp_label"><h1>JP</h1></label>
									<input name="lang2" id="jp2" type="radio" value="jp"></li>
							</ul>
						</li>
						<li><a href="#intro" class="scroll"><div class="intro-link need-text"></div></a></li>
						<li><a href="#other-work" class="scroll"><div class="other-work-link need-text"></div></a></li>
						<li><a href="#contact" class="scroll"><div class="contact-link need-text"></div></a></li>
					</ul>
				</div><!-- /.navbar-collapse -->
			</div><!-- /.container-fluid -->
		</nav>
		<article id="page-top">
			<div class="parallax">


				<div class="mobile-background bg_need"></div>

				<div class="cover">
					<div class="col-xs-6 text-center col-xs-offset-3 v-center">
						<a href="#intro" class="btn custom-btn scroll need-text need-colors"><div id="enter-btn"></div></a>
					</div>
				</div>
				<div class="bg__foo bg_need"></div>
				<div class="bg__bar bg_need"></div>
				<a name="intro"></a>
				<div id="greeting" class="container-fluid pad-down need-text"></div>
				<div id="intro" class="container-fluid pad-down bottom need-text"></div>
				<img src="img/logan.jpg" class="img-responsive img-rounded intro-image" alt="Responsive image">
				<div class="separated"></div>
				<div class="bg__baz bg_need"></div>
				<!--thumbnail gallery of other work-->
				<div id="other-work" class="row thumbnail-row pad-down thumbnail-row-height">

						<?php
						foreach ($imgArray as $value) {
						echo '<div class="col-xs-12 col-md-2"> 
						<a href='."img/work/$value".' class="thumbnail" target="_blank">
							<img class="thumbnail-img" src='."img/work-thumbnails/$value".' alt="$value">
						</a></div>';
							}
						?>

				<div class="row">

				</div>
				<div class="separated"></div>

				<div class="bg__bar bg_need"></div>

				<!--Begin Contact Form-->
				<form id="contact-form" action="php/phpmailer.php" method="post" class="col-xs-10 col-xs-offset-1 text-center top bottom need-text">
					<h2><div id="contact"></div></h2>
					<div class="form-group">
						<label for="name"><div id="name-inject"></div><span class="text-danger">*</span></label>
						<div class="input-group">
							<div class="input-group-addon">
								<i class="fa fa-user" aria-hidden="true"></i>
							</div>
							<input type="text" class="form-control" id="name" name="name" placeholder="">
						</div>
					</div>
					<div class="form-group">
						<label for="email"><div id="mail-inject"></div><span class="text-danger">*</span></label>
						<div class="input-group">
							<div class="input-group-addon">
								<i class="fa fa-envelope" aria-hidden="true"></i>
							</div>
							<input type="email" class="form-control" id="email" name="email" placeholder="">
						</div>
					</div>
					<div class="form-group">
						<label for="subject"><div id="subject-inject"></div></label>
						<div class="input-group">
							<div class="input-group-addon">
								<i class="fa fa-pencil" aria-hidden="true"></i>
							</div>
							<input type="text" class="form-control" id="subject" name="subject" placeholder="">
						</div>
					</div>
					<div class="form-group">
						<label for="message"><div id="message-inject"></div><span class="text-danger">*</span></label>
						<div class="input-group">
							<div class="input-group-addon">
								<i class="fa fa-comment" aria-hidden="true"></i>
							</div>
							<textarea class="form-control" rows="5" id="message" name="message" placeholder=""></textarea>
						</div>
					</div>

					<!-- reCAPTCHA -->
					<div class="g-recaptcha recap-style" data-theme="dark" data-sitekey="6Leyiw0UAAAAACK9mXrHUkLCGALZBgZQFigbXl2U"></div>
					<button id="submitter" class="btn custom-btn custom-btn2 need-colors" type="submit"><i class="fa fa-paper-plane"></i><div id="send"></div></button>
					<button class="btn custom-btn custom-btn2 need-colors" type="reset"><i class="fa fa-ban"></i><div id="reset"></div></button>
				</form>
				<!--empty area for form error/success output-->
				<div class="container no-overflow">
					<div class="col-xs-8 col-xs-offset-2 last">
						<div id="output-area"></div>
					</div>
				</div>

				<div class="bg__baz bg_need"></div>

			</div>
		</article>

	</body>
	<footer>
		<nav class="navbar navbar-dark bg-inverse navbar-fixed-bottom inanimate-nav need-text need-nav-bg">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse"
							  data-target="#bs-example-navbar-collapse-2" aria-expanded="false"><i class="fa fa-bars fa-2x"
																														  aria-hidden="true"></i>
						<span class="sr-only">Toggle navigation</span>
					</button>
					<button type="button" class="navbar-toggle" data-toggle="collapse"
							  data-target="#bs-example-navbar-collapse-3" aria-expanded="false"><i class="fa fa-language fa-2x" aria-hidden="true"></i>
						<span class="sr-only">Toggle navigation</span>
					</button>

					<a class="navbar-brand scroll need-brand" href="#page-top">Logan Young</a>

				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-3">
					<div class="nav navbar-nav navbar-center text-center">
						<label for="en" class="lang_label en_label"><h1>EN</h1></label>
						<input name="lang" id="en" type="radio" value="en">
						<label for="jp" class="lang_label jp_label"><h1>JP</h1></label>
						<input name="lang" id="jp" type="radio" value="jp">
					</div>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="#intro" class="scroll"><div class="intro-link"></div></a></li>
						<li><a href="#other-work" class="scroll"><div class="other-work-link"></div></a></li>
						<li><a href="#contact" class="scroll"><div class="contact-link"></div></a></li>
					</ul>
				</div><!-- /.navbar-collapse -->
			</div><!-- /.container-fluid -->
		</nav>
	</footer>


</html>
