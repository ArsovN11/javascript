//собирање на два броја / success е ако собирокот е парен број, fail ако е непарен

function EvenNumber(){
  if(res %2 === 0){
    console.log('SUCCESSS', res);
  }else{
    console.log('FAIL', res);
  }
}

var num1 = 5;
var num2 = 5;
var res = num1 + num2;

try{
  EvenNumber();
}catch{
  console.error();
}

//   - да се изброи во текст колку пати се појавува буквата "а", 
//ако бројот е поволем од 0 во тој случај враќаме success, ако е === 0 во тој случај fail

var str = "anjkdbawkjdbabdawbdawdbawkjfbwajkbdfjkwabdjk";
var ch = 'a';
 
var count = str.split("a").length - 1;
// console.log(count);

function Check(){
if(count > 0 ){
  console.log('SUCCESS:', count);
}if(count === 0 ){
  console.log('FAIL:', count);
}
}
Check();

//  - конверзија на температура од целзиусови во фаренхајтови степени / success е ако степените се помалку од 100, 
//fail ако се еднакви или повеќе од 100


function Convert(celsius) {
  var celsius = 20;
  let fahrenheit = celsius * 9/5 + 32
  if(fahrenheit < 100){
    console.log('SUCCESS:', fahrenheit);
  }
  if(fahrenheit > 100){
    console.log('FAIL:', fahrenheit);
  }
}

Convert();

