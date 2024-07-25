function reverse(word) {
    let reversed = '';
    
    for (let i = word.length - 1; i >= 0; i--) { // Iterate backwards
      reversed += word[i];
    }
    return reversed;
  }
  

  const word = 'hello';
  const reversedWord = reverse(word);
  console.log(reversedWord); // Output: 'olleh'
  