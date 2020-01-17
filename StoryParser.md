---
layout: default
title: Story Parser
author: Tim
---
<html>
	<h2>Story Parser</h2>
	<p>Please input the text you would like analyzed. 
	<p>*The Story Parser probably won't work unless you are using the Latin, Greek, or Cyrillic alphabets with UTF-8 encoding. If you'd like another language added (or if you find a bug!) please shoot me an email at the reverse of moc.liamg@rrub.r.mit.</p>

	<input id="input" type="text" accept-charset="UTF-8">
	<button type="button" onclick="run()">Submit</button>

	<p id="output"></p>

	<script> 
	function run() 
	{
		//convert text to lower-case, then break it into its constituent words 
		var wordList = splitString(document.getElementById("input").value.toLowerCase());
    
		//sort words alphabetically, then store them in a map of word -> number of occurrences 
		var wordMap = createMap(wordList.sort());  

		var str = "";
		for(var key in wordMap) 
		{
			if(wordMap.hasOwnProperty(key)) 
			{
				str += key + ": " + wordMap[key] + "<br>";
			}
		}

		document.getElementById("output").innerHTML = str;
	}

	function createMap(words) 
	{		
		var wordMap = {};
    
		for(n = 0; n < words.length; n++) 
		{
			var w = words[n];
			if(!wordMap.hasOwnProperty(w)) 
			{
			wordMap[w] = 1;
			}
			else 
			{
			wordMap[w] = wordMap[w] + 1;
			}
		}
		
		return wordMap;
   }

   function splitString(string) 
   {
		var words = [];

		var w = "";
		for (n = 0; n < string.length; n++) 
		{
			var c = string.charAt(n);
			if (isCharacter(c)) 
			{
				w += c;
			}
			else 
			{
				if (w.length > 0) 
				{
					words[words.length] = w;
				}
				
				w = "";
			}
		}

		if (w.length > 0) 
		{
			words[words.length] = w;
		}

		return words;
	}

	//UTF-8; input should always be lower-case
	function isCharacter(char) 
	{
		if ('a' <= char && char <= 'z') 
		{	//standard American English alphabet
			return true;
		}	
		else if ('ß' <= char && char <= 'ʯ' && char != '÷') 
		{	//expanded Latin character set (so many accent marks)		
			return true;
		}	
		else if('ά' <= char && char <= 'ώ')
		{	//Greek
			return true;
		}
		else if ('а' <= char && char <= 'ԯ')
		{	//Cyrillic
			return true;
		}
				
		return false;
	}
	</script>