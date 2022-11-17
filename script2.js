// let total = " ";
// let count=0;

// for(i=1;i<=4;i++){

//     for(y=i;y<=12;y+=4){

//         total+=y + " " ;
//         count++;

//         if(count==3){
//             count=0;
//             total = total + ' \n ';
//         }
       
//     }
    
// }
// console.log(total);

// let user={
//     name:"Jone",
//     age:30
// }
 
// user.SayHi=function(){
//     alert("Hello")
// }
// user.SayHi()





// // let obj = {
// //     name:"Ali",
// //     method2: function(x) {
// //     console.log('Hello, '+x+'!');
// // }
// // };


// // // obj.method2('John');

// // function method1(){
// //     console.log("Hello " + this.name);
// // }

// // obj.method1=method1
// // obj.method1()


// let product2=new Object();
// product2.name="Parfum";
// product2.brand="Prada";
// product2.price="230$";


// let product1={
//   "my name": "Dress",
//   brand: "D&G",
//   price: "230$",
//   show: function(){
//     console.log(this["my name"]);
//     console.log(this.price);
//   }

// }

// function showProduct(){
//     console.log(this.name);
//     console.log(this.price);
// }

// product2.show=showProduct;

// product2.show()
// product1.show()

// let fibsArr= [];
// fibsArr[0]=1;
// fibsArr[1]=1;


// function count(x){
//   for(i=1; i<x; i++){
//      fibsArr[i]=(fibsArr.at (-1))+(fibsArr.at (-2))
     
//   }
//   console.log(fibsArr)
// }
//   count(12);

  let x = [3, 10];
  let y = [];
  x[77] = 7;

//   for(i=0;i<=x.length;i++){
//    y[i]=Math.pow((x[i]), 2)
//   }
// console.log(y);
 
 for (let key in x){
      y.push(Math.pow((x[key]), 2));
 }
 console.log(y);


  
  

  