const inputSlider = document.querySelector("[data-lengthSlider]") // custom attribute
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]")
const copyMsg = document.querySelector("[data-copyMsg]")
const uppercaseCheck = document.querySelector("#uppercase")
const lowercaseCheck = document.querySelector("#lowercase")
const numbersCheck = document.querySelector("#numbers")
const symbolsCheck = document.querySelector("#symbols")
const indicator = document.querySelector("[data-indicator]")
const generateBtn = document.querySelector(".generateButton")

// Symbol String
const symbols = '~`!@#$%^&*()_-+={}[]|:;"<>,.?/';

// saare ke saare checkbox ko dharshatha hai
const allCheckBox = document.querySelectorAll("input[type=checkbox]")


// by default password length = 10
// by default password empty
// by default one start checkbox is checked
// by default strength color is grey

let password = "";
let passwordLength = 10;
let checkCount = 0;
// setting strength color to grey
setIndicator("#ccc");


// calling function
handleSlider();


// functions

// set kardega password ki length according to slider
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerHTML = passwordLength;
    // aur kuch add karna hai? HW
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength - min)*100/(max - min)) + "% 100%";
    // for slider color as per the number
}


// set indicator
function setIndicator(color){
    indicator.style.backgroundColor = color;
    // shadow wala HW?
    indicator.style.boxShadow = `${color} 0px 0px 20px`;
}

// Random Integer Generator
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}


// Random Number Generator
function generateRandomNumber(){
    return getRndInteger(0,9);
}

// Random LowerCase Character
function generateLowerCase(){  
    // a -> 97 (min)
    // z -> 123 (max)
    return String.fromCharCode(getRndInteger(97,123));
}

// Random UpperCase Character
function generateUpperCase(){
    // A -> 65 (min)
    // Z -> 91 (max)
    return String.fromCharCode(getRndInteger(65,91));
}

// Random Symbol Generator
function generateSymbol(){
    let number = getRndInteger(0, symbols.length)
    return symbols.charAt(number);
}

// calculate strength
function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    // Rules
    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}


// copy content
async function copyContent(){
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    } catch (e) {
        copyMsg.innerText = "Failed";
    }

    // to make copied wala span visible
    copyMsg.classList.add("active");

    // removing copied wala text after 2s
    setTimeout(() => {
       copyMsg.classList.remove("active") 
    }, 2000);
}


//Adding EventListener to inputSlider
// Slider ko length se match kiya
inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})



function shufflePassword(array){
    // Fisher Yates Method
    for(let i=array.length - 1; i>0;i--){
        const j = Math.floor(Math.random() * (i+1));   // random no. between -> [0,i+1)

        // Swap no at i index and j index
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let str = "";
    array.forEach((el) => (str += el));
    return str;
}


function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked)
            checkCount++;
    })

    // special corner case cond:
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

// Applying listener to checkboxes
allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})



// Adding EventListener to CopyBtn
copyBtn.addEventListener('click', () => {
    // if yaha par value exist karegi tab hi copy karunga . blank mei i cannot copy
    if(passwordDisplay.value){
        copyContent();
    }

    // Also i can copy using logic -> if password length > 0 COPY function chalao
})


// Adding EventListener to Generate Password Button | main function - LOGIC (password generate)
generateBtn.addEventListener('click', () =>{
    // none of the checkbox are selected
    if(checkCount == 0) 
        return;

    // special case
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the journey to find new password

    // remove old password
    password = "";


    //let's put the stuff mentioned by checkboxes

    // if uppercase checked hai tho password mei uppercase daaldo
    // if(uppercaseCheck.checked){
    //     password += generateUpperCase();
    // }
    // // same as other
    // if(lowercaseCheck.checked){
    //     password += generateLowerCase();
    // }
    // if(numbersCheck.checked){
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked){
    //     password += generateSymbol();
    // }

    // Alternate Method ^
    // mei saare generate functions ko ek array mei da dunga then randomly wo function ko call kar dunga
    let funcArr = [];

    if(uppercaseCheck.checked){
        funcArr.push(generateUpperCase)
    }
    if(lowercaseCheck.checked){
        funcArr.push(generateLowerCase)
    }
    if(numbersCheck.checked){
        funcArr.push(generateRandomNumber)
    }
    if(symbolsCheck.checked){
        funcArr.push(generateSymbol)
    }

    // Complusory Addition
    for(let i=0; i< funcArr.length;i++){
        password += funcArr[i]();
    }


    // Jo Jo checkbox ticked hai meine wo saare function ek array mei daal diye hai
    // Now randomly find kardunga

    // Now the remaining addition

    for(let i=0; i<passwordLength-funcArr.length;i++){
        let randomIndex = getRndInteger(0, funcArr.length);
        password += funcArr[randomIndex]();
    }


    // Now Shuffling the password
    password = shufflePassword(Array.from(password)); // shuffle algo works on array. Therefore, Sending password in the form of array


    // Now display the password in the input (Show in UI)
    passwordDisplay.value = password;


    // Now strength (calculate strength)
    calcStrength();
})


