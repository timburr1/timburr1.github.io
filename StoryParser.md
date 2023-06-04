---
layout: default
title: Story Parser
author: Tim
---
<div>
	<h2>Story Parser</h2>
	<p>Copy/paste the text you want analyzed below, and hit "Submit." The script on this page will break it up, strip out punctuation, and return a map of each word to the number of times it appears in the text. This is a very simple program, with no concept of proper nouns, verb conjugations, or anything like that, so use the result as a starting point, not the final answer. <b>Also, the Story Parser probably won't work unless you are using the Latin, Greek, or Cyrillic alphabets with UTF-8 encoding.</b> If you'd like another language added (or if you find a bug!) please shoot me an email at the reverse of moc.liamg@rrub.r.mit.</p><br />

	<input id="input" type="text" accept-charset="UTF-8">
	<button type="button" onclick="run()">Submit</button>
	<br>
	<p id="output" style="background-color:white; color:black;"></p>
	<br>
	<p>If the StoryParser is valuable to you, please consider supporting my latest project on Itch.io or Steam:</p>
	<br>
	
	<div class="row">
	<div class="column">
	
	<iframe src="https://itch.io/embed/1753822?bg_color=151619&amp;fg_color=c1cdda&amp;link_color=2689ff&amp;border_color=3BA55C" width="552" height="167" frameborder="0"><a href="https://hoodmentality.itch.io/barkelona">Barkelona by Hood Mentality Software Studio</a></iframe>
	
	</div>	
	<div class="column">

	<iframe src="https://store.steampowered.com/widget/2434300/" frameborder="0" width="646" height="190"></iframe>
	
	</div>
	</div>

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