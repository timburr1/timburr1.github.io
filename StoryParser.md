---
layout: default
title: Story Parser
author: Tim
---
<div>
	<h2>Story Parser</h2>
	<p>Copy/paste the text you want analyzed below, and hit "Submit." The script on this page will break it up, strip out punctuation, and return a map of each word to the number of times it appears in the text. This is a very simple program, with no concept of proper nouns, verb conjugations, or anything like that, so use the result as a starting point, not the final answer. <b>Also, the Story Parser probably won't work unless you are using the Latin, Greek, or Cyrillic alphabets with UTF-8 encoding.</b> If you'd like another language added (or if you find a bug!) please shoot me an email at the reverse of moc.liamg@rrub.r.mit.</p><br />

	
	<textarea id="input" accept-charset="UTF-8" rows="6" cols="120"></textarea>
	<br>
	<button type="button" onclick="run()" style="margin:20px"><h1 style="margin:20px">Submit</h1></button>
	<br>
	<p id="output" style="background-color:white; color:black; padding:5px; width:640px"></p>
	<br>
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
