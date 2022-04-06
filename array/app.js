

function arr_re(array) {
    let arr=[];
    for (let i = array.length;i>0; i--) {
       arr.push(array.pop());
    }
    return arr;
}
console.log(arr_re([2,4,6,1,6]));

///////////////////////////////////////////////////////
function uppercaseWords(string){
    var words  = string.split(" ");
    for (var i=0; i < words.length; i++){
        var wordSplited = words[i].split("");
        wordSplited[0] = wordSplited[0].toUpperCase();
        
        words[i] = wordSplited.join("");
    }
    console.log(words.join(" "));
}
uppercaseWords('the quick brown fox');
uppercaseWords("the car drove fast");
///////////////////////////////////////////////////////////

 let str="ABCDCBA"
 console.log(str);
 palindrome(str);

function palindrome (word){
let leng= Math.floor((word.length)/2);
for (let i= 0; i < leng; i++) {
    if (word[i] !== word.lengnth-1){
        console.log(`the ${word[i]} == ${word.lengnth-1} `);
    }}
console.log ("the word is palindrome" );}
