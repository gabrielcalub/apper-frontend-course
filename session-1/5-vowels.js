function convertToVowels(word) {
    const vowels = 'aeiouAEIOU'; // Define an array of vowels
    let result = ''; 
    
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) { // Check if the current character is a vowel
        result += word[i]; // Append the vowel to the result string
      }
    }
  
    return result;
  }
  
  
  const word = 'thisissomeword';
  const wordWithOnlyVowels = convertToVowels(word);
  console.log(wordWithOnlyVowels); // Output: 'iioeo'