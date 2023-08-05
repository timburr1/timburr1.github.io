---
layout: post
title: Burning Man Lockscreen Maker
excerpt: Don't lose your phone in the desert!
author: Tim
---
<div>
	<p>Enter your info into the form below, then screenshot and save the generated lockscreen. None of your data will be stored in any way.</p>
	<br />
	Name: <input id="name" type="text" accept-charset="UTF-8"><br />
	Playa Address: <input id="address" type="text" accept-charset="UTF-8"><br />
	Camp Name: <input id="camp" type="text" accept-charset="UTF-8"><br />
	Email: <input id="email" type="text" accept-charset="UTF-8"><br />
	Emergency Contact: <input id="emergency_contact" type="text" accept-charset="UTF-8"><br />
	Contact Phone Number: <input id="emergency_phone" type="text" accept-charset="UTF-8"><br />
	<br />
	<button type="button" onclick="run()">Run</button>
	<br />
	<div class="container">
		<img id="background" src="/images/lockscreenMaker/Image01.jpg" alt="" style="width:100%;">
		<span id="info" color="white">
			<h1>Owner</h1>
			<h2 id="name_out"></h2>
			<h1>Email</h1>
			<h2 id="email_out"></h2>
			<h1>Playa Address</h1>
			<h2 id="camp_out"></h2>
			<h2 id="address_out"></h2>
			<h1>Emergency?</h1>
			<h2 id="emergency_contact_out"></h2>
			<h2 id="emergency_phone_out"></h2>
		</span>
	</div>
	<p>All of the images used in this project are licensed under Creative Commons. Thanks to: <a href="https://www.flickr.com/photos/blmnevada/">BLM Nevada</a>, <a href="https://www.flickr.com/photos/hawaiisavvy/">Flickr user HawaiiSavvy</a>, <a href="https://www.flickr.com/photos/buteze/">Flickr user Ryan/Debbie/Owen BuTeze</a>, and <a href="https://www.imustbedead.com/home">Pixabay user imustbedead</a>.</p>
	<p>If this program is valuable to you, please consider supporting my latest project on Itch.io or Steam:</p>
	<br>
	<iframe src="https://itch.io/embed/1753822?bg_color=151619&amp;fg_color=c1cdda&amp;link_color=2689ff&amp;border_color=3BA55C" width="552" height="167" frameborder="0"><a href="https://hoodmentality.itch.io/barkelona">Barkelona by Hood Mentality Software Studio</a></iframe>
	<br>
	<br>
	<iframe src="https://store.steampowered.com/widget/2434300/" frameborder="0" width="646" height="190"></iframe>
	<br>
	<script>
		function run() {
			randomImg() 
			
			var name = document.getElementById("name").value;
			document.getElementById("name_out").innerHTML = name;
			
			var address = document.getElementById("address").value;
			document.getElementById("address_out").innerHTML = address;
			var camp = document.getElementById("camp").value;
			document.getElementById("camp_out").innerHTML = camp;
			
			var email = document.getElementById("email").value;
			document.getElementById("email_out").innerHTML = email;
			
			var emergency_contact = document.getElementById("emergency_contact").value;
			document.getElementById("emergency_contact_out").innerHTML = emergency_contact;
			var emergency_phone = document.getElementById("emergency_phone").value;
			document.getElementById("emergency_phone_out").innerHTML = emergency_phone;
		}
		
		const PREFIX = "/images/lockscreenMaker/";
		const IMG_FILENAMES = ["Image01.jpg", "Image02.jpg", "Image03.jpg", "Image04.jpg", 
		"Image05.jpg", "Image06.jpg", "Image07.jpg", "Image08.jpg", "Image09.jpg", "Image10.jpg", 
		"Image11.jpg", "Image12.jpg", "Image13.jpg", "Image14.jpg", "Image15.jpg"];
		function randomImg() {
			var idx = Math.floor(Math.random() * IMG_FILENAMES.length);
			document.getElementById("background").src = PREFIX + IMG_FILENAMES[idx];
		}
	</script>