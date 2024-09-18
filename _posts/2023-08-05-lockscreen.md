---
layout: post
title: Burning Man Lockscreen Maker
excerpt: Get your phone back if you lose it in the desert!
author: Tim
---
<div>
	<p>This page is probably best used on the device whose lockscreen you are trying to create. Enter your info into the form below, then screenshot, trim, and save the generated image. None of your data will be stored in any way.</p>
	<br />
	Name: <input id="name" type="text" accept-charset="UTF-8"><br />
	Playa Address: <input id="address" type="text" accept-charset="UTF-8"><br />
	Camp Name: <input id="camp" type="text" accept-charset="UTF-8"><br />
	Email: <input id="email" type="text" accept-charset="UTF-8"><br />
	Emergency Contact: <input id="emergency_contact" type="text" accept-charset="UTF-8"><br />
	Contact Phone Number: <input id="emergency_phone" type="text" accept-charset="UTF-8"><br />
	<br />
	<center><button type="button" onclick="run()" style="padding: 0px 20px;"><h1>Run</h1></button></center>
	<br />
	<div class="lockscreen-container">
		<img id="background" src="/images/lockscreenMaker/Image01.jpg" alt="" style="width:100%;">
		<span id="info" color="white">
			<span id="name_out"></span>
			<span id="email_out"></span>
			<span id="address_out"></span>
			<span id="emergency_out"></span>
		</span>
	</div>
	<p>All of the images used in this project are licensed under Creative Commons. Thanks to: <a href="https://www.flickr.com/photos/blmnevada/">BLM Nevada</a>, <a href="https://www.flickr.com/photos/hawaiisavvy/">Flickr user HawaiiSavvy</a>, <a href="https://www.flickr.com/photos/buteze/">Flickr user Ryan/Debbie/Owen BuTeze</a>, and <a href="https://www.imustbedead.com/home">Pixabay user imustbedead</a>.</p>
	<br>
	<script>
		function run() {
			randomImg() 
			
			var name = document.getElementById("name").value;
			if(name)
				document.getElementById("name_out").innerHTML = "<h3>If found, please return to</h3><h1>" 
				+ name + "</h1>";
				
			var email = document.getElementById("email").value;
			if (email)
				document.getElementById("email_out").innerHTML = "<h3>" + email + "</h3>";
			
			var address = document.getElementById("address").value;
			var camp = document.getElementById("camp").value;			
			if (address && camp) {
				document.getElementById("address_out").innerHTML = "<h1>" + camp + "</h1><h3>" 
				+ address + "</h3>";
			} else if (address) {
				document.getElementById("address_out").innerHTML = "<h3>" + address + "</h3>";
			} else if (camp) {
				document.getElementById("address_out").innerHTML = "<h3>" + camp + "</h3>";
			}
			
			var emergency_contact = document.getElementById("emergency_contact").value;
			var emergency_phone = document.getElementById("emergency_phone").value;
			if (emergency_contact && emergency_phone) {
				document.getElementById("emergency_out").innerHTML = "<h1>Emergency?</h1><h3>" 
				+ emergency_contact + ", " + emergency_phone + "</h3>";
			} else if (emergency_contact) {
				document.getElementById("emergency_out").innerHTML = "<h1>Emergency?</h1><h3>" 
				+ emergency_contact + "</h3>";
			} else if (emergency_phone) {
				document.getElementById("emergency_out").innerHTML = "<h1>Emergency?</h1><h3>" 
				+ emergency_phone + "</h3>";
			}
		}
		
		const PREFIX = "/images/lockscreenMaker/";
		const IMG_FILENAMES = ["Image01.jpg", "Image02.jpg", "Image03.jpg", "Image04.jpg", 
		"Image05.jpg", "Image06.jpg", "Image07.jpg", "Image08.jpg", "Image09.jpg", "Image10.jpg", 
		"Image11.jpg", "Image12.jpg", "Image13.jpg", "Image14.jpg", "Image15.jpg"];
		function randomImg() {
			var idx = Math.floor(Math.random() * IMG_FILENAMES.length);
			document.getElementById("background").src = PREFIX + IMG_FILENAMES[idx];
			
			if (idx == 9) {
				document.getElementById("info").style.color = "black";
			} else {
				document.getElementById("info").style.color = "white";
			}
		}
	</script>
