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

