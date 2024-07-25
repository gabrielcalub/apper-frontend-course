function isPalindrome(word) {
    // Reverse the input word
    const reversedWord = word.split('').reverse().join('');
    
    return word === reversedWord;
  }
  
  const word = 'racecar';
  
  if (isPalindrome(word)) {
    console.log('It is a palindrome!');
  } else {
    console.log('It is not a palindrome!');
  }
  