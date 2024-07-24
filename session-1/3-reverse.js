function reverse(word) {
    let reversed = '';
    // Iterate backwards through the input string
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i]; // Build the reversed string character by character
    }
    return reversed;
  }
  
  // Example usage:
  const word = 'hello';
  const reversedWord = reverse(word);
  console.log(reversedWord); // Output: 'olleh'
  