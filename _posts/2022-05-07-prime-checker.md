---
layout: post
title: Optimize Me, Robo-Daddy!
excerpt: An example of using Brython to embed Python in an HTML script tag, scroll down for the source code. (You can also press F12 or right-click -> Inspect to view the full page source, but the Python code will be minified.)
author: Tim
tags: school, tech
---

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3.10.5/brython.min.js">
</script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3.10.5/brython_stdlib.js">
</script>
<script type="text/python" src="/brython/prime_checker.py"></script>

{::options parse_block_html="true" /}
<body onload="brython()">
	<p>An example of using <a href="https://brython.info/">Brython</a> to embed Python in an HTML script tag, scroll down for the source code. (You can also press F12 or right-click -> Inspect to view the full page source, but the Python code will be minified.)</p>
	<br>
	<b>Enter a positive number:</b>
	<input type="number" id="user_input" min="1">
	<br><br>
	<button type="button" id="submit-button">Is it prime?</button>
	<br><br>
	<div id="output">Prime Number: </div>
	<br>
	<center><img src='/images/optimus.jpg' alt='Optimus Prime' width='75%'></center>
	
``` python
# prime-checker.py 

import browser, math

def check_prime(num):
    num = int(num)
    for i in range(2, math.ceil(math.sqrt(num))):
        if num % i == 0:
            return False
    return True

def on_submit(event):
    number = browser.document["user_input"].value
    browser.console.log(number)
    browser.document["output"].html = "Prime Number: " + str(check_prime(number))

browser.document["submit-button"].bind("click", on_submit)
```