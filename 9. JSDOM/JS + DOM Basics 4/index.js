// What is the O/P ?
// setTimeout(function(){
//     console.log('third');
// }, 3000);

// function sync(){
//     console.log('first')
// }

// sync();

// console.log('second');

// --------------------------------------------------------

// Promise

// Sync Promise

// let meraPromise = new Promise(function(resolve, reject){
//     console.log('I am inside Promise')
//     resolve(119);
// })

// console.log('Phela')

// ****************************

// Async Promise

// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside Promise')
//     }, 5000);
//     // resolve(119);
//     reject(new Error('Bhaisaab Error aaye hai'));
// })

// console.log('Phela');


// **************************************

// Promise Methods - then() & catch()

// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside Promise')
//     }, 5000);
//     // resolve(2000);
//     reject(new Error('Bhaisabb new error aya hai'))
// })

// meraPromise.then((value) => {console.log(value)});
// meraPromise.catch((error) => {console.log('Received an Error')});

// meraPromise.then((value) => {console.log(value)}, (error) => {console.log('Received an Error')});


// **************************************************

// Multiple Promise

// let waada1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('settimeout1 started')
//     }, 2000);
//     resolve(true);
// })


// let output = waada1.then(() => {
//     let waada2 = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log('settimeout2 started')
//         }, 3000);
//         resolve('waada 2 resolved')
//     })
//     return waada2;
// })

// output.then((value) => {console.log(value)})

// ismei output.then((value) ye line pe resolve ne "waada 2 resolved" bheja hai in return
// i.e why phele "waada 2 resolved" print hua
// then 2000ms ke baad "settimeout1 started" print hua
// then 3000ms ke baad "settimeout2 started" print hua

// love babbar statement:
// aapne phele naaya promise banaya , apne fir is setTimeout function ko bola chala do, setTimeout function apke
// browser mei entry daaldi 2s ginne ke liye, tho abhi apka browser 2s gin rha hai, jab tak wo 2s gin rha hai
// apne resolve marke kardiya
// resolve mark karthe hi apne ispe function chala diya ki dusra promise chalu karde, fir apne ek aur
// setTimeout function daal diya with 3s.
// Jab tak wo 2s aur 3s wala kaam chal rha hai, apne resolve mark kar diya isko aur apne waada return kardiya
// output mei, then apne output mei likha hai iske value print karde.
// isliye sabse phele "waada 2 resolved" print hua
// then 2s wala "settimeout1 started" print hua
// then 3s wala "settimeout2 started" print hua

// *****************************************************

// Promise Chaining

// let p1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('first')
//     }, 2000);

//     resolve(true);
// })

// let p3 = p1.then(() => {
//     let p2 = new Promise(function(resolve, reject){
//         resolve("ABCD")
        
//     })
//     return p2;
// })

// p3.then((value) => {console.log(value)})

// ----------------------------------------------------
 
// Async - Await 

// async function abcd(){
//     // return 7;
//     return "Babbar";
// }


// async function utility(){

//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Delhi is very hot')
//         }, 5000);
//     })

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('hyd is cool')
//         }, 6000);
//     })


//     let dM = await delhiMausam; 
//     let hM = await hydMausam;

//     // await karke pura execution ko i can stop.
//     // line no 148 pe likha await tho line no 149 execute nai hoga jab tak line no 148 execute nahi hota
//     // waise hi line no 155 execute nai hota jab tak line no 149 execute nai hota becoz of await keyword

//     return[dM, hM];
// }


// --------------------------------------------------------------------------------------

// Fetch API - GET (Receive)

// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output = await content.json();
//     console.log(output)
// }

// utility();


// Fetch API - POST (Send)

// async function helper(){
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Babbar',  
//           body: 'Tagdi body',
//           userId: 1998,
//           weight : 90
//           // ye 3 (title, body, unserId) fields jo hai, ye 3 field ko send kar rhe hai (url) wale server pe
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     }
    
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);

//     let response = await content.json();

//     return response;
// }

// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// }

// utility();



// ------------------------------------------------------------------------------

// Closures

// function init(){
//     // var -> global variable
//     // var name = "Babbar";
//     let name = "Babbar"

//     function displayName(){
//         let name = "Sid" // prints the closest value 
//         console.log(name);
//     }

//     displayName();
// }

// init();



function init(){
    let name = "Babbar"

    function displayName(){
        console.log(name);
        // waise tho iska output undefined aana chaiye tha, lekin closure ke wahjese Babbar aa rha hai
        // becoz closure is top level entity, it holds function with data
        // usne wo name="Babbar" ko bhi hold karke rakha hai
        // waise tho undefined ke case mei name wala variable destroy ho rha tha becoz of 
    }

    return displayName;
}

let ans = init();
ans();
