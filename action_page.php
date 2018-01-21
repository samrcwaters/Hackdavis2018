<!DOCTYPE html>
<html>
<head>
	<title>UC Davis 2018 HACKATHON</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<link rel="icon" type="image/png" href="Images/favicon.ico">
	<script src="./website.js"></script>
</head>
<body>
	<!--<a class = "websiteName" href = "./index.html"> HELLOCAL </a>-->
	<div class = "logo">
		<a href = "./index.html"> <img class = "logo" src="Images/logo_but_its_in_a_circle.png" alt = "testpic" vstyle="width:42px;height:42px;border:0;"> </a>
	</div>
	<section>
		<div class = "navigation">
			<nav>
				<a href="./Browse.html" class = "buttonLink" >Find Somewhere For You</a>
				<a href="./Submit.html" class = "buttonLink" >Share Your Experience</a>
				<a href="./About.html" class = "buttonLink" >About Us</a>
			</nav>
		</div>
	</section>
	<section>
		<div id = "welcome">
			<p class = "words">Form Submission</p>
		</div>
    </section>
    <section>
        <div class="options">
            <p class="words">
				<?php
				if (isset($_POST["name"]) { echo "Name: " . $_POST["name"] . "<br>"; }
				if (isset($_POST["location"]) { echo "Location: " . $_POST["location"] . "<br>"; }
				if (isset($_POST["tags"]) { echo "Tags: " . $_POST["tags"] . "<br>"; }
				if (!isset($_POST["name"])&&!isset($_POST["location"])&&!isset($_POST["tags"]) {
					echo "Thanks for telling us how you feel!" . "<br>";
					echo "We'll help you get where you want to go!";
				}
				?>
			</p>
        </div>
    </section>
</body>
</html>