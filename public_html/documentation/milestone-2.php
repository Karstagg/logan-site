
<!DOCTYPE html>
<html lang="en">
	 <head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script>
			$( document ).ready(function() {
				$("#mobile").click(function() {
					$("#img1").toggle(function() {
						if($("#img2").css('display') != 'none') {
							$("#img2").toggle("fast");
						}
					});
				})
				$("#desktop").click(function() {
					$("#img2").toggle(function() {
						if($("#img1").css('display') != 'none') {
							$("#img1").toggle("fast");
						}
					});
				})
			});
		</script>
		<style>
			.clickthing {
				color: blue;
			}
			.clickthing:hover {
				cursor: pointer;
				color: aqua;
			}
			#img1 {
				display: none;
			}
			#img2 {
				display: none;
			}
			#wireframes {
				margin-bottom: 200px;
			}
		</style>

		<meta charset="utf-8">
		<title>PWP Milestone-2</title>
	</head>
	<body>
		<!-- the header -->
		<header>

			<h1>PWP Milestone-2</h1>

		</header>

		<main>
			<section>
				<h1>Content Strategy</h1>
				<h3>Header</h3>
				<ul>
					<li>Name</li>
					<li>Subtitle</li>
				</ul>
				<h3>Nav</h3>
				<ul>
					<li>About me drop down</li>
					<li>Other work drop down</li>
					<li>Contact drop down</li>
				</ul>
				<h3>Welcome</h3>
				<ul>
					<li>Welcoming message</li>
				</ul>
				<h3>Basic Info</h3>
				<ul>
					<li>A short about me paragraph</li>
				</ul>
				<h3>Background</h3>
				<ul>
					<li>Education</li>
					<li>Work</li>
				</ul>
				<h3>Gallery</h3>
				<ul>
					<li>Logos (links) to my projects</li>
				</ul>
				<h3>Contact</h3>
				<ul>
					<li>My contact info </li>
				</ul>
			</section>
			<section id="wireframes">
				<h1>Wireframes</h1>
				<p><strong id="mobile" class="clickthing">Mobile View</strong>  ||  <strong id="desktop" class="clickthing">Desktop view</strong></p>
				<div id="img1">
					<img src="img-doc/pwpmobile.png" alt="smart phone wire frame" width="30%" height="auto">
				</div>
				<div id="img2">
					<img src="img-doc/pwpfull.png" alt="desktop wire frame" width="50%" height="auto">
				</div>
			</section>
		</main>

	</body>
</html>


