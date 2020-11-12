
function reverseWord(word){
    word = word.split("").reverse().join("");
    return word;
}

function isPalindrome(word){
    if(word == reverseWord(word)){
        console.log(word);
        console.log("Is Palindrome");
    } else {
        console.log(word);
        console.log("It's not a Palindrome");
    }
    
}
//reverseWord("thiago");
isPalindrome("arara");
