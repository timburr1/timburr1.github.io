<!DOCTYPE html>
<!-- Tim Burr -->
<html>
 <head>
  <title>StoryParser Page</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
 </head>
 <body>
  <p>Please input the text you would like analyzed:</p>

  <input id="input" type="text">
  <button type="button" onclick="run()">Submit</button>

  <p id="output"></p>

  <script> 
   function run() {
    //convert the input string to lowercase and break it into constituent words 
    var wordList = splitString(document.getElementById("input").value.toLowerCase());
    
    //sort words alphabetically, then store them in a map of word -> number of occurrences 
    var wordMap = createMap(wordList.sort());  

    var str = "";
    for(var key in wordMap) {
     if(wordMap.hasOwnProperty(key)) {
      str += key + ": " + wordMap[key] + "<br>";
     }
    }

    document.getElementById("output").innerHTML = str;
   }

   function createMap(words) {
    var wordMap = {};
    
    for(n = 0; n < words.length; n++) {
     var w = words[n];
     if(!wordMap.hasOwnProperty(w)) {
      wordMap[w] = 1;
     }
     else {
      wordMap[w] = wordMap[w] + 1;
     }
    }
    
    return wordMap;
   }

   function splitString(string) {
    var words = [];

    var w = "";
    for (n = 0; n < string.length; n++) {
     if (isCharacter(string.charAt(n))) {
      w += string.charAt(n);
     }
     else {
      if (w.length > 0) {
       words[words.length] = w;
      }
      w = "";
     }
    }

    if (w.length > 0) {
     words[words.length] = w;
    }

    return words;
   }

   function isCharacter(char) {
    if (char >= 'a' && char <= 'z') {
     return true;
    }
    else if (char == 'ñ' || char == 'á' || char == 'é' 
      || char == 'í' || char == 'ó' || char == 'ú') {
     return true
    }

    return false;
   }
  </script>
 </body>
</html>
