---
layout: post
title: Optimize Me, Robo-Daddy!
excerpt: An example of using Brython, to embed Python code in a script tag
author: Tim
tags: school, tech
---

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3.10.5/brython.min.js">
</script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3.10.5/brython_stdlib.js">
</script>
<script type="text/python" src="/brython/prime_checker.py"></script>

<body onload="brython()">
	<center>
	<h3>Enter a number:</h3>
	<input type="text" id="user_input">
	<br><br>
	<button type="button" id="submit-button">Is it prime?</button>
	<br><br>
	<div id="output">Prime Number: </div>
	<br>
	<img src='/images/optimus.jpg' alt='' width='75%'>
	</center>
</body>