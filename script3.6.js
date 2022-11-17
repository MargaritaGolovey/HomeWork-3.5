let total = " ";
let count=0;

function printNumbers(k,l){

for(i=1;i<=4;i++){

    for(y=i;y<=k;y+=4){

        total+=y + " " ;
        count++;

        if(count==l){
            count=0;
            total = total + ' \n ';
            }
       
        }

    }
    console.log(total)
}
printNumbers(12,3)