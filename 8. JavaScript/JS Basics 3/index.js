// console.log('hello 3');

// // String Primitive
// let lastName = 'Babbar';
// console.log(typeof(lastName));

// // String Object
// let firstName = new String ('Love');
// console.log(typeof(firstName));


// let message = "This is my first message"
// let words = message.split(' ');
// console.log(words);

// // Escape Sequence
// let message1 = "This is \n \'my \"first \n message";
// console.log(message1);

// // Template Literals
// let message2 = 
// `Hello ${lastName}
//     Thanks for the opportunity
    
// Regards,
// Babbar`;
// console.log(message2)


// // Date and Time

// let date = new Date();
// console.log(date);

// let date1 = new Date('20 August 2000 2:00')
// console.log(date1)

// let date2 = new Date(2000, 7, 20, 2);  // -> year, month, date, time  (month ki indexing 0 se hori hai)
// console.log(date2)

// // Setters
// date2.setFullYear(2001)
// console.log(date2)



// ----------------------------------------------------


// Arrays

// Creation of Array
// let numbers = [1,4,5,7];
// console.log(numbers);

// Insertion at end
// numbers.push(9);
// console.log(numbers);

// Insertion at beginning
// numbers.unshift(8);
// console.log(numbers);

// Insertion in middle
// numbers.splice(2,0,'a','b','c');
// console.log(numbers);


// Searching
// console.log(numbers.indexOf(4));

// // we want to check if a number exist in an array
// if(numbers.indexOf(4) != -1)
//     console.log('Present')


// console.log(numbers.includes(4));


// console.log(numbers.indexOf(4,2));  // 4 is whom to find  &&  2 is from which index to find


// Searching in Object / Reference
// let courses = [
//     {no:1, name:'Love'},
//     {no:2, name:'Sid'}
// ];

// console.log(courses);

// console.log(courses.indexOf({no:1, name:'Love'}));  // -> the address of the courses object to that we finding are different.

// We can find using CallBack Functions
// let course = courses.find(function(course){
//     return course.name === 'Love';   // -> jis object ka name Love hai na wo return kardo
// });

// OR

// Arrow Function
// let course = courses.find(course => course.name === 'Love');

// console.log(course);


// Remove from Array Primitive
// let num = [1,2,3,4,5,6,7];
// console.log(num);

// // Deletion at end
// num.pop();
// console.log(num);

// // Deletion at beginning
// num.shift();
// console.log(num);

// // Deletion in middle
// num.splice(1,1); // here 2 is the index u want to delete and 1 is the no. of element u want to delete
// console.log(num);


// Empyting an Array
// let num = [1,2,3,4,5];
// let num2 = num;
// // num = [];       // -> So this is not the correct way to empty/delete an array

// // Best way to delete/empty an array
// // num.length = 0;

// // Another way to delete an array
// num.splice(0, num.length);

// console.log(num);
// console.log(num2);   // -> number containing array is still present, but we want to make it an empty array
                    

// Combining & Slicing (Primitive)
// let first = [1,2,3,4];
// let second = [5,6,7,8];

// let combined = first.concat(second);
// console.log(combined);

// let sliced = combined.slice(2,4);   // -> slice from 2 to 3 included index
// console.log(sliced);


// HW : Combining & Slicing (Object)




// Spread Operator
// let first = [1,2,3,4];
// let second = [5,6,7,8];

// let combined = [...first, 'a' ,...second , 'b', true];
// console.log(combined);



// Iterating Array
// let arr = [10,20,30,40,50];

// // for-of
// for(let value of arr){
//     console.log(value);
// }

// // for-each
// arr.forEach(function(number){
//     console.log(number);
// })

// // for-each (arrow function)
// arr.forEach(number => console.log(number));



// Joining Arrays
// let number = [10,20,30,40,50];
// const joined = number.join(',');
// console.log(joined);

// // Split String
// let message  = "This is my first message";
// let splited = message.split(' ');
// console.log(splited);


// Sorting Array (Primitive)
// let num = [40,20,10,30,50];
// console.log(num.sort());


// Reverse Array
// let num = [40,20,10,30,50];
// console.log(num.reverse());



// HW : Sorting Array (Object) (Not Completed)
// let  arr = [
//     {no:3, name:'Love'},
//     {no:1, name:'Sid'},
//     {no:2, name:'babbar'}
// ];

// let sortedArr  = arr.sort((num1, num2) => {
//     (num1.no > num2.no) ? 1 : (num1.no < num2.no) ? -1 : 0
// });

// console.log(sortedArr);




// Filtering Array
// let numbers = [1,2,-1,-4];

// filtering only +ve numbers
// let filtered = numbers.filter(function(value) {
//     return value >= 0;
// });

// filtering +ve number using arrow function
// let filtered = numbers.filter(value => value >= 0);

// console.log(filtered);




// Mapping Array
// let number = [7,8,9,10];
// // let items = number.map(function(value){
// //     return 'Student_no' + value;
// // })

// let items = number.map(value => 'Student_no' + value);
// console.log(items);



// Mapping with Objects
let numbers = [1,2,-4,-1];
let filtered = numbers.filter(value => value >= 0);

// let items = filtered.map(function(num) {
// //     let obj = {value: num};
// //     return obj;
// // })

// let items = filtered.map(function(num) {
//     return {value: num};
// })

// arrow function
// let items = filtered.map(num => {value: num}); // -> gives undefined answer

// Chaining 
let items =  numbers
            .filter(value => value >=0 )
            .map(function(num) {
                    return {value: num};
                });
console.log(items)






