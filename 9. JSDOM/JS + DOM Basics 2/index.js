// document.addEventListener('click', function(){
//     console.log('I have clicked on the document')
// });

// OR
// function eventFunction(){
//     console.log('I have clicked on the document')
// }
// document.addEventListener('click', eventFunction);

// document.removeEventListener('click', eventFunction);


// ---------------------------------

// Event Object

// let content = document.querySelector('#wrapper');
// content.addEventListener('click', function(event){
//     console.log(event);
// })

// content.addEventListener('click', function(babbar){
//     console.log(babbar);
// })


// --------------------------------------------------------

// Prevent Default

// let Links = document.querySelectorAll('a');

// let thirdLink = Links[2];

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('Maza aaya bohot');
// });


// --------------------------------------------------------------

// How to avoid too many events?

// let myDiv = document.createElement('div');

// // 2.
// function paraStatus(event){

//     // 4.
//     console.log('Para : ' + event.target.textContent);

//     // console.log('I have clicked on para');
// }


// // 3 (More Optimized)
// myDiv.addEventListener('click', paraStatus);

// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'I am para '+i;

//     // 1.
//     // newElement.addEventListener('click', function(event){
//     //     console.log('I have clicked on para');
//     // })


//     // 2.
//     // newElement.addEventListener('click', paraStatus)


//     // 3.
//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);


// -------------------------------------------------

let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event){

    // 1
    // console.log('span pr click kia hai ' + event.target.textContent);

    // 2
    if(event.target.nodeName === 'SPAN'){
        console.log('span pr click kia hai ' + event.target.textContent)
    }

})