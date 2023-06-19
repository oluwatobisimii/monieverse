export function toggleSentenceCase(sentence) {
    var words = sentence.split(' ');
    var toggledWords = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var toggledWord = '';
  
      if (word === word.toLowerCase()) {
        toggledWord = word.toUpperCase();
      } else {
        toggledWord = word.toLowerCase();
      }
  
      toggledWords.push(toggledWord);
    }
  
    return toggledWords.join(' ');
  }


  export function convertToSentenceCase(sentence) {
    if (!sentence) {
      return "";
    }
  
    var firstChar = sentence.charAt(0).toUpperCase();
    var restOfSentence = sentence.slice(1).toLowerCase();
  
    return firstChar + restOfSentence;
  }
  