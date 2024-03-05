// console.log('helo jee');


// run(); // -> it will run (This is not C++ / This is JS)


// function declaration
// function run(){
//     console.log('running');
// }
// // function call or invoke
// run();



// stand(); //-> Also cannot call stand above the function assignment . Becoz hoisting is only 
            // possible for function and not function assgiment

// Function asssignment
// let stand = function walk(){
//     console.log('walking');
// }

// // calling function assignment
// stand();  // -> Possible

// // walk();  // -> ERROR cannot call function name in function assignment

// let jump =  stand;
// jump(); // Possible 



// Function Assigment / Named Function Assignment
// let stand = function walk(){
//     console.log('walking');
// }

// // Anonymous Function Assignment
// let stand2 = function(){
//     console.log('running');
// } 

// stand();
// stand2();


// Dynamic JS
// function sum(a,b){
//     console.log(arguments)
//     return a+b;
// }

// // console.log(sum(1,2));
// // console.log(sum(1));
// // console.log(sum());
// // console.log(sum(1,2,3,4,5));

// let ans = sum(1,2,3,4,5);

// Dynamic JS 2  (Args Stored in Object)
// function sum(){
//     let total = 0;
//     for(let value of arguments)
//         total += value;
//     return total;
// }

// // Multiple Parameters Passing
// console.log(sum(1,2,3,4,5,6));  // -> 21



// Args - Stored in Array
// function sum(...args){
//     console.log(args);
// }

// function sum(num, ...args){
//     console.log(args);
// }

// // num = 1 ko chala jayega
// // baki args ko 
// sum(1,2,3,4,5,6);

// // function sum(num, value, ...args, num2){  // -> Not Possible (Rest Operator ke baad we cannot add agruments)
// //     console.log(args);
// // }



// Default Parameter
// function interest(p,r=5,y=10){
//     return p*y*r/100;
// }

// console.log(interest(1000,9,2)); // -> 180 | 180
// console.log(interest(9,2)); // -> NaN | 1.8
// console.log(interest(1000,2)); // -> NaN | 200
// console.log(interest(1000,9)); // -> NaN | 900
// console.log(interest(1000)); // -> NaN | 500


// // Hack - > 
// console.log(interest(1000,undefined,8));



// Getter & Setter
let person = {
    fName : 'Love',
    lName : 'Babbar',
    // getter
    get fullName(){
        return `${person.fName} ${person.lName}`
    },

    // setter
    set fullName(value){
        if(typeof value !== String){
            throw new Error ('You have not sent a string');
        }
        let parts = value.split(" ");
        this.fName = parts[0];
        this.lName = parts[1];
    }
};


// console.log(person.fullName);

// // console.log(person)

// person.fullName = 'Rahul Kumar';
// console.log(person.fullName)


// Try Catch (Cont. ex)
// try{
//     person.fullName = 1;
//     console.log(person.fullName)
// }
// catch(e){
//     // alert(`You have sent a number in fullName`);
//     alert(e);
// }



// Scope - (let)
// {
//     let a = 3;
//     console.log(a);
// }

// console.log(a);  // -> Error a is not defined.


// Scope - Global (var)
// {
//     var b = 5;
//     console.log(b);
// }
// console.log(b);

// var lifetime is till function only
// function walk(){
//     var  b = 10;
// }
// console.log(b);


// {
//     const  ab =4;
//     console.log(ab)  // No Error
// }

// {
//     const ab = 10;
//     console.log(ab)  // No Error
// }



// Reducing an Array
let arr = [1,2,3,4];
// let total = 0;
// for(let value of arr){
//     total += value;
// }
// console.log(total)

// reduce
let total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total)