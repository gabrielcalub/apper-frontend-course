function isPalindrome(word) {
    // Reverse the input word
    const reversedWord = word.split('').reverse().join('');
    
    // Check if the original word is the same as the reversed word
    return word === reversedWord;
  }
  
  // Example usage:
  const word = 'racecar';
  
  if (isPalindrome(word)) {
    console.log('It is a palindrome!');
  } else {
    console.log('It is not a palindrome!');
  }
  