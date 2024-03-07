// adding 100 p
// let t1 = performance.now();
// for(let i=1; i<=100 ;i++){
//     let newContent = document.createElement('p');
//     newContent.textContent = 'This is Para ' + i;

//     document.body.appendChild(newContent);
// }
// let t2 = performance.now();
// console.log("this took " + (t2-t1) + " ms");


// // optimizing a bit
// let t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=0; i<=100 ;i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para '  + 1;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// let t4 = performance.now();
// console.log("this took " + (t4-t3) + " ms");


//  -----------------------------------------------------

// Document Fragment  (1 Reflow, 1 Repaint)
// let fragment  = document.createDocumentFragment();

// for(let i=1; i<=100 ;i++){
//     let newContent = document.createElement('p');
//     newContent.textContent = 'This is Para ' + i;

//     fragment.appendChild(newContent);
// }

// document.body.appendChild(fragment);



//  -----------------------------------------------------



