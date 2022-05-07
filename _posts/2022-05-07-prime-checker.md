---
layout: post
title: Optimize Me, Robo-Daddy!
excerpt: An example of using Brython to embed Python code in a script tag. Press F12 or right-click -> Inspect to view the source code.
author: Tim
tags: school, tech
---

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3.10.5/brython.min.js">
</script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3.10.5/brython_stdlib.js">
</script>
<script type="text/python" src="/brython/prime_checker.py"></script>

<body onload="brython()">
	<p>An example of using <a href="https://brython.info/">Brython</a> to embed Python code in a script tag. Press F12 or right-click -> Inspect to view the source code.</p>
	<br>
	<b>Enter a positive number:</b>
	<input type="number" id="user_input" min="1">
	<br><br>
	<button type="button" id="submit-button">Is it prime?</button>
	<br><br>
	<div id="output">Prime Number: </div>
	<br>
	<center><img src='/images/optimus.jpg' alt='Optimus Prime' width='75%'></center>