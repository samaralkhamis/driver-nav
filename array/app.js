

function arr_re(array) {
    let arr=[];
    for (let i = array.length;i>0; i--) {
       arr.push(array.pop());
    }
    return arr;
}
console.log(arr_re([2,4,6,1,6]));
let ar=document.getElementById('array');
ar.innerHTML='Q1 :please make the reverse for this array with out using buildin fun [2,4,6,1,6] :' ;
let revers = document.getElementById('q1');
revers.innerHTML='the reverse array solution is : [ ' +arr_re([2,4,6,1,6])+ ' ]';

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
let c= uppercaseWords("the car drove fast");

let upperCase = document.getElementById('q2');
upperCase.textContent=` Q2: ` +uppercaseWords("the car drove fast");

///////////////////////////////////////////////////////////

 let str="ABCDCBA";
 console.log(str);
 palindrome(str);

function palindrome (word){
let leng= Math.floor((word.length)/2);
for (let i= 0; i < leng; i++) {
    if (word[i] !== word.lengnth-1){
        console.log(`the ${word[i]} == ${word.lengnth-1} `);
    }}
return("the word is palindrome" );}

let palindrom = document.getElementById('q3');
palindrom.innerHTML=`Q3: make function to chek if str=\"ABCDCBA\" is palindrome witout using bildin function the solution was it,s : ${palindrome(str)}`;

/////////////////////////////////////////////////////////////////
function dscendingSort(array) {
    for (let i = 1; i < array.length; i++) {
        let x = array[i];
        for (var j = i - 1; j >= 0 && (array[j] < x); j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] =x;
    }
    return array;
}
  
  var numbers = [12, 10, 15, 11, 14, 13, 16];
  dscendingSort(numbers);
  console.log(numbers);
  let dscendingSor = document.getElementById('q4');
  dscendingSor.innerHTML=`Q4 :[12, 10, 15, 11, 14, 13, 16] make function to dscendingSort the array` + dscendingSort(numbers);