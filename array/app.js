

function arr_re(array) {
    let arr=[];
    for (let i = array.length;i>0; i--) {
       arr.push(array.pop());
    }
    return arr;
}
console.log(arr_re([2,4,6,1,6]));

// function upperCase(x) {
//   var array=x.split('');
//   var array1=[];
//   for(var i=0;i<array.lenght;i++)
//   {
//       array[i].charAt(0).toUpperCase()+array1[i].slice(1);
//   }
//   return array1;
// }
// console.log(upperCase("the car drove fast"));



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
