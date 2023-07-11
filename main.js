// let a = 23;
// if (a >= 10) {
//     alert("yes")
// }else
// {
//     alert("no")
// }



// function name(params) {
//     return params()
// }



// function add(x, y, myFunc){
//     let res = x + y;
//     return myFunc(res)
// }

// function newFunc(some){
//     return console.log(some);
// }
// add( 3, 4 , newFunc)









// 200ta callback




// const myTimeout = setTimeout(
//     mygreeting, 10000
// );
// function mygreeting() {
//     console.log('hello');
// }
// function myStopFunction() {
//     clearTimeout(myTimeout);
//     console.log("stopped");
// }



// function callback(fn1, fn2, fn3) {
//     fn1();
//     fn2();
//     fn3();
//     for (var i = 0; i < arguments.length; i++) {
//       arguments[i]();
//     }
//   }
//   callback(function() { console.log('Function 1'); }, function() { console.log('Function 2'); }, function() { console.log('Function 3'); });
//   var functions = [function() { console.log('Function 1'); }, function() { console.log('Function 2'); }, function() { console.log('Function 3'); }];

// for (var i = 0; i < functions.length; i++) {
//   functions[i]();
// }
// setTimeout(function() {
//     console.log('Hello, world!');
//   }, 1000);
//   setTimeout(() => {
//     console.log('Hello, world!');
//   }, 1000);





// let time = new Date();
// let sekund = time.getSeconds();

// function logSmth()
// {
//     sekund++;
//     console.log(sekund);
//     if(sekund == 59 ){
//         stopinterval()
//     }
// }
// let intervalId=setInterval(logSmth , 1000 ) ;
// // setTimeout (()=> clearInterval(intervalId),60*1000-487)//stop after one minute
// function stopinterval (){
//     clearInterval(intervalId)
// };




// function greet(name, myFunction) {
//     console.log('Hello world');
//     myFunction(name);
// }
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }
// setTimeout(greet, 2000, 'John', sayName);


// function name1(a, d, exper) {
//     let res = a + d 
//     return exper(res)
// }

// function name2(someth) {
//     return console.log(someth);
    
// }
// name1(3, 4, name2)
// let s = 100
// for (let i = 0; i < s; i++) {
   
    
// }
// setTimeout(console.log(i), 2000)


// const planFunction = function() {
//     console.log('Function planed for 2:15 PM');
//   };
  
//   const scheduledTime = new Date('2023-07-10T14:115:00');
//   const delay = scheduledTime - new Date();
  
//   setTimeout(planFunction, delay);


// const  setFunction = function(){
//     console.log('это появился через 5секунд');
// }
// setTimeout(setFunction, 5000) 



// function calculate(num1, num2, callbackFunction) {
//     return callbackFunction(num1, num2);
// }

// function calcProduct(num1, num2) {
//     return num1 * num2;
// }

// function calcSum(num1, num2) {
//     return num1 + num2;
// }
// alert(calculate(5, 15, calcProduct));
// alert(calculate(5, 15, calcSum));




// function apple(quantity, kg, callbackFunction) {
//     return callbackFunction(quantity, kg);
// }

// function quantityOfProduct(quantity, kg) {
//     return quantity * kg;
// }

// alert(`quantity of apple - ${apple(5, 15, quantityOfProduct)}`);


// function greet() {
//     console.log('Hello world');
// }

// setTimeout(greet, 3000);
// console.log('This message is shown first');



// function greet() {
//     console.log('Hello world');
// }

// let intervalId = setTimeout(greet, 3000);
// console.log('Id: ' + intervalId);   



// function Time() {
//     let dateTime= new Date();
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)
//      setTimeout(Time, 1000);
// }

// Time();


// let a = 0;

// setInterval((function (){
//     a++;
//     console.log(a);
// }),1000)



// let number = 0;

//         setInterval(function() {
//             number++;
//             console.log(number);
//         }, 1000);


// function about(name, age){
//     console.log('My name is', '' , name, 'and i am', age ,'years old');
// }
// setTimeout(about, 2000, 'Rock', 20)


// function hello(){
//     console.log('hello world');
// }
// setInterval(hello, 1000)




// function showTime() {
//     let dateTime= new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time)
// }
// let display = setInterval(showTime, 1000);


// function now(){
//     let date = new Date();
//     let date1 = date.toLocaleTimeString();
//     console.log(date1);
// }
// let show = setInterval(now, 1000)


