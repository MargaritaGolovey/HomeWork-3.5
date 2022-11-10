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
//     say="Добрыей день";
// }
// else if(hour>=17 && hour<12){
//     say="Доброе вечер";
// }
// else{
//     say="Доброй ночи";
// }
// console.log(say);

var car="car";
var bus="bus"
var row=" ";
var total=0;


for(var i=0;i<8;i++){


    for(var j=0;j<4;j++){

      row+= car + " ";
      total++;

    if(total==8){
        total=0;
        row = row + ' \n ';
      }

    }
    for(var k=0;k<3;k++){  

       row+=bus + " ";
       total++;

    if(total==8){
      total=0;
      row = row + ' \n ';
    }
  }

 }
console.log(row);

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


