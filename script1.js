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


// var car="car";
// var bus="bus"
var row=" ";
var total=0;
 
// q- число сторк
// w-car
// e-bus
// r- число элементов в строке


function count(q,w,e,r){

for(var i=0;i<q;i++){


    for(var j=0;j<4;j++){

      row+= w + " ";
      total++;

    if(total==r){
        total=0;
        row = row + ' \n ';
      }

    }
    for(var k=0;k<3;k++){  

       row+=e + " ";
       total++;

    if(total==r){
      total=0;
      row = row + ' \n ';
    }
  }

 }
console.log(row);
}
// count(8,"car","bus",8);
// count(8,"cat","dog",8);
count(12,"cat","dog",12);