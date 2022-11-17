// let q="*";
// let t=8;
// let i=0;
// let res ="*";
// while(i<t){
//     console.log(res);
//     res+=q;
//     i++;
// }


// let base=2;
// let exp=8;
// let i=0;
// let res=1;
// for(;i<exp;i++){
//     res*=base;
// }
// console.log(res);

// let date = new Date(); 

// let hour = date.getHours();

// let say="";
    

// if(hour>0 && hour<5){

//     say="Дoброй ночи";
// }

// else if(hour>=5 && hour<11){
//     say="Доброе утро";
// }
// else if(hour>=11 && hour<17){
// //     say="Добрыей день";
// // }
// // else if(hour>=17 && hour<12){
// //     say="Доброе вечер";
// // }
// // else{
// //     say="Доброй ночи";
// // }
// // console.log(say);

// var car="car";
// var bus="bus"
// var row=" ";
// var total=0;


// for(var i=0;i<8;i++){


//     for(var j=0;j<4;j++){

//       row+= car + " ";
//       total++;

//     if(total==8){
//         total=0;
//         row = row + ' \n ';
//       }

//     }
//     for(var k=0;k<3;k++){  

//        row+=bus + " ";
//        total++;

//     if(total==8){
//       total=0;
//       row = row + ' \n ';
//     }
//   }

//  }
// console.log(row);

// p=0;
// let outStr=" ";
// let flag=4;
// let h= 1 ;



// while(p<8){
//   let p1=0;
//   while(p1<8){  

//     if(p1<flag){
//       outStr+="car ";
//     } else if(p1<7){

//     outStr+="bus ";}
//     else if(p1=8){
//       outStr+="car ";
//     }
        
//         p1++;
//   } 
//   outStr = outStr + ' \n ';
//   p++
// }
// console.log(outStr)

// function comper(x){

//   return function(y){
//     if(y>x){
//       return 1
//     }
//     else if(y<x){
//       return -1
//     }
//     else if(y===x){
//       return null
//     }
//   }
 
// }

// const com= comper(1);
// console.log(com(1));


// function addToMyNumbers(number1,number2){
//   number1++;
//   number2++;
//   console.log("Значение number 1 в функции : " + number1);
//   console.log("Значение number 2 в функции : " + number2);
// }

// let number1=3;
// let number2=12;

// addToMyNumbers(number1,number2);

// console.log("Значение number 1 в функции : " + number1);
// console.log("Значение number 2 в функции : " + number2);


// function url(domain){
//   return function(url){
//     return `https://${url}.${domain}`
//   }
// }
 
// const comUrl=url('com');
// console.log(comUrl('google'));

// let product2=new Object();
// product2.name="Parfum";
// product2.brand="Prada";
// product2.price="230$";


// let product1={
//   "my name": "Dress",
//   brand: "D&G",
// //   price: "230$",

// }

// for(key in product2){
//   console.log(key + " :"  + product2[key]);
// }

// for(key in product1){
//   alert(key);
//   console.log(key + " :"  + product1[key]);
// }

// console.log(product1["my name"]);


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;

// function coont(obj){

// for(let key in obj)
// {
//    sum+=obj[key];
// }


// }

// alert( coont(salaries) );


// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };


// function multiplyNumeric(obj){
//   for(key in obj){
//     if(typeof obj[key] == "number"){
//       obj[key]*=2
//     }
//   }
// }




  
