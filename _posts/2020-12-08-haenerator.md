---
layout: post
title: Haenerator
excerpt: "Super-simple tool that compares two lists, and writes duplicates to a table. I'm told this is useful for our building attendance process."
date: '2020-12-08'
author: Tim
tags: school, tech
---

Copy/paste the full list of student IDs and the sublist you want to compare, from Excel. The resulting table should be easy to copy/paste back into your spreadsheet:

<div style="margin-left: 30px">
<b>Master List:</b> <input id="masterList" type="text" accept-charset="UTF-8" />
<br><br>
<b>Sub-List:</b> <input id="subList" type="text" accept-charset="UTF-8" />
<br><br>
<button type="button" onclick="run()">Submit</button>
	
<p id="output"></p>
	
<script> 
	function run() 
	{				
		//full, master list of student IDs:
		var masterList = document.getElementById("masterList").value.split(" ");
		
		//some subset of masterList:
		var subList = document.getElementById("subList").value.split(" ");		
		
		var output = formatLists(masterList, subList);			
						
		document.getElementById("output").innerHTML = output;
	}
			
	function formatLists(masterList, subList) 
	{
		var str = "<table><tr><th>Master</th><th>Duplicate?</th></tr>";
		for(var n=0; n < masterList.length; n++) {
			str += "<tr><td>" + masterList[n] + "</td>";
					
			if(subList.includes(masterList[n])) {
				str += "<td>" + masterList[n] + "</td></tr>";
			} else {
				str += "<td></td></tr>";
			}
		}
				
		return str + "</table>";
	}
</script>
