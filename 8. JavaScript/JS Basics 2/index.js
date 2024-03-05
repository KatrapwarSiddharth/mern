console.log('Chaliye shuru karte hai')

// object creation
const reactangle1 = {
    length : 1,
    breadth: 2,

    draw : function(){
        console.log('drawing rectangle');
    }
};


// Why to create object like this

// const reactangle1 = {
//     length : 1,
//     breadth: 2,

//     draw : function(){
//         console.log('drawing rectangle');
//     }
// };

// const reactangle2 = {
//     length : 1,
//     breadth: 2,

//     draw : function(){
//         console.log('drawing rectangle');
//     }
// };

// Factory Function
// function createRectangle(l,b){
//     return reactangle = {
//         length : l,
//         breadth: b,

//         // Alternate of above
//         // length ,
//         // breadth,
    
//         // draw : function(){
//         //     console.log('drawing rectangle');
//         // }

//         draw(){
//             console.log('Drawing rectangle using factory function')
//         }
//     };

//     // return reactangle;
// }

// object creation using factory function
// let rectangleObj1 = createRectangle(5,4);   
// let rectangleObj2 = createRectangle(10,20);   
// let rectangleObj3 = createRectangle(50,10);   


// Constructor Function -> Pascal Notation -> NumberOfStudents
// constructor function -> property/method -> initialise/define kar rha hai
// this -> refer current object
// new -> returns the empty object

function Rectangle(l,b){
    this.length = l;
    this.breadth = b;
    this.draw = function(){
        console.log('drawing using constructor');
    }
}

// object creation using constructor function
let rectangleObject = new Rectangle(4,6);

// Dynamic Nature of Object
// Add property in obj
rectangleObject.color = 'yellow';

// Delete property from obj
delete rectangleObject.color;


// Additional Info - Internal Constructor
let Rectangle1 = new Function(
    'l', 'b',
    `this.length = l;
    this.breadth = b;
    this.draw = function(){
        console.log('drawing using constructor');
    }`
);

let rect = new Rectangle1(2,3);
console.log(rect.length);


// Primitive (Call by Value) Vs Reference (Call by Reference)

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);


// let a = {value:10};
// let b = a;

// a.value++;
// console.log(a.value);
// console.log(b.value);


// Pass By Value
// let a = 10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

// Pass By Reference
// let a = {value:10};
// function inc(a) {
//     a.value++;
// }
// inc(a);
// console.log(a.value);



let rectangle = {
    length:1,
    breadth:2
};

// For-in
// for(let key in rectangle){
//     // keys are reflected through key variable.
//     // values are reflected through rectangle[key].
//     console.log(key,rectangle[key]);
// }

// For-of
// for(let key of Object.keys(rectangle)){      // -> gives only key
//     console.log(key);
// }
// for(let key of Object.entries(rectangle)){   // -> gives both key value pair
//     console.log(key);
// }

// Finding wether property(key) is in object or not?
// if('color' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log("Absent");
// }


// Object Cloning - Iteration
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest= {};

// for(let key in src){
//     dest[key] = src[key];
// }
// console.log(dest);
// console.log(src);

// Object Cloning - Assign
let src = {
    a:10,
    b:20,
    c:30
};

let src2 = {value:20};

let dest = Object.assign({},src,src2);
console.log(dest);
console.log(src);

// Object Cloning - Spread
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {...src};
// console.log(dest);
// console.log(src);






