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
	
	<p>Code highlighed with <a href="https://pygments.org/">Pygments:</a>
	
<div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">browser</span><span class="o">,</span> <span class="nn">math</span>

<span class="k">def</span> <span class="nf">check_prime</span><span class="p">(</span><span class="n">num</span><span class="p">):</span>
    <span class="n">num</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="n">num</span><span class="p">)</span>
    <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="n">math</span><span class="o">.</span><span class="n">ceil</span><span class="p">(</span><span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">num</span><span class="p">))):</span>
        <span class="k">if</span> <span class="n">num</span> <span class="o">%</span> <span class="n">i</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
            <span class="k">return</span> <span class="kc">False</span>
    <span class="k">return</span> <span class="kc">True</span>

<span class="k">def</span> <span class="nf">on_submit</span><span class="p">(</span><span class="n">event</span><span class="p">):</span>
    <span class="n">number</span> <span class="o">=</span> <span class="n">browser</span><span class="o">.</span><span class="n">document</span><span class="p">[</span><span class="s2">&quot;user_input&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">value</span>
    <span class="n">browser</span><span class="o">.</span><span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">number</span><span class="p">)</span>
    <span class="n">browser</span><span class="o">.</span><span class="n">document</span><span class="p">[</span><span class="s2">&quot;output&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">html</span> <span class="o">=</span> <span class="s2">&quot;Prime Number: &quot;</span> <span class="o">+</span> <span 
class="nb">str</span><span class="p">(</span><span class="n">check_prime</span><span class="p">(</span><span class="n">number</span><span class="p">))</span>

<span class="n">browser</span><span class="o">.</span><span class="n">document</span><span class="p">[</span><span class="s2">&quot;submit-button&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">bind</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="n">on_submit</span><span class="p">)</span>
</pre></div>