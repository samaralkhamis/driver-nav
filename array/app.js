"use strict";
//////////////////////////////////////////////////////

function arr_re(array) {
    let arr=[];
    for (let i = array.length;i>0; i--) {
       arr.push(array.pop());
    }
    return arr;
}
let t1=arr_re([2,4,6,1,6]);
console.log(arr_re([2,4,6,1,6]));


document.getElementById("round1").textContent="First Round: Taebah was the driver and Samar was the navigator";
document.getElementById("task1").innerHTML= `${t1}`;
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
 uppercaseWords("the car drove fast");

 document.getElementById("round2").textContent="Second Round: Taebah was the driver and Samar was the navigator";
 document.getElementById("task2").innerHTML="The Car Drove Fast";
////////////////////////////////////////////////////////////
let st="ABCDCBA";

function isPalindrome(str) {
    for(var i = 0, j = str.length - 1; i < str.length; i++, j--) {
      if (str[i] !== str[j]) return false
    }
  
    return true
  }
 console.log(isPalindrome(st)); 

 document.getElementById("round3").textContent="Third Round: Taebah was the navigator and Samar was the driver";
 document.getElementById("task3").innerHTML=JSON.stringify(isPalindrome(st));
///////////////////////////////////////////////////////////

  let x=[2,9,0,4];

  function arraySort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var sw = array[i - 1];
          array[i - 1] = array[i];
          array[i] = sw;
        }
      }
    }
  
    return array;
  }
  console.log(arraySort(x));
  /////////////////////////////////////////////////////////
 document.getElementById("round4").textContent="Fourth Round: Taebah was the navigator and Samar was the driver";
 document.getElementById("task4").innerHTML=JSON.stringify(arraySort(x));