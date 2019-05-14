//recebe a palavra passada na função isPalindrome para reverter ela
function reverseWord(palavra){
    palavra = palavra.split(""); //convert 'palavra' para array
    palavra = palavra.reverse(); //reverse 'palavra' order
    palavra = palavra.join(""); // do array ele monta a string novamente
    return palavra;
}

function isPalindrome(palavra){
    //chama a função passando como parametro para a outra função a palavra que já foi passada como parametro para essa função
    if(palavra == reverseWord(palavra)){
        console.log(palavra);
        console.log("É palindromo");
    } else {
        console.log(palavra);
        console.log("Não é palindromo");
    }
    
}
//reverseWord("thiago");
isPalindrome("arara");