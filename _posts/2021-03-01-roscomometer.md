---
layout: post
title: Roscomometer
excerpt: "Another super-simple attendance helper. Copy/paste a table of values, and any duplicates will be removed."
date: '2021-03-01'
author: Tim
tags: school, tech
---

<p>Copy/paste your list of student names from Excel and hit submit. Duplicates will be removed, and the rest of the entries put into a table, for easy copy/pasting back into your spreadsheet.</p>

<p><b>NB: This program does not assume anything about the student names, except that they will have a common format. We are assuming that names will appear either once or twice; triplicate values may cause surprising behavior.</b></p>

<div>
<b>Full List:</b> 
<br>	
<textarea id="input" rows="10" cols="30" accept-charset="UTF-8" ></textarea>
<br>
<button type="button" onclick="run()">Submit</button>
<br>	
<p id="output" style="background-color:white; color:black;"></p>
	
<script> 
	function run() 
	{				
		var inputs = document.getElementById("input").value.split("\n");
		
		var output = formatCells(removeDuplicates(inputs));			
						
		document.getElementById("output").innerHTML = output;
	}
	
	function removeDuplicates(inputs) 
	{
		var result = [];		
		for(var n=0; n < inputs.length; n++) 
		{		
			var index = result.indexOf(inputs[n])
			if(index < 0)
			{
				result.push(inputs[n]);
			} else 
			{
				result.splice(index, 1);
			}
		}
		
		return result;
	}
			
	function formatCells(items) 
	{
		var str = "<table>";
		for(var n=0; n < items.length; n++) {
			if(items[n] && items[n].length > 0) {
				str += "<tr><td>" + items[n] + "</td></tr>";
			}
		}
				
		return str + "</table>";
	}
</script>
