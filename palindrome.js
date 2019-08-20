//recebe a palavra passada na função isPalindrome para reverter ela
function reverseWord(word){
    word = word.split(""); //convert 'word' to array
    word = word.reverse(); //reverse 'word' order
    word = word.join(""); // do array ele monta a string novamente
    return word;
}

function isPalindrome(word){
    //chama a função passando como parametro para a outra função a palavra que já foi passada como parametro para essa função
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
