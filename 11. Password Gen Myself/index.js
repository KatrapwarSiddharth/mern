const inputSlider = document.querySelector(".slider");
const lengthDisplay = document.querySelector("[data-lengthNumber]")
const indicator = document.querySelector(".indicator")
const uppercaseCheck = document.querySelector("#uppercase")
const lowercaseCheck = document.querySelector("#lowercase")
const numbersCheck = document.querySelector("#numbers")
const symbolsCheck = document.querySelector("#symbols")
const copyMsg = document.querySelector("[data-copyMsg]")
const passwordDisplay = document.querySelector(".display")
const copyBtn = document.querySelector(".copyButton")
const generateBtn = document.querySelector(".generateButton")


const allCheckBox = document.querySelectorAll("input[type=checked]")

const symbols = '~`!@#$%^&*()_-+={}[]|:;"<>,.?/';


let password = "";
let passwordLength = 10;
let checkCount = 0;

setIndicator("#ccc");

handleSlider();

function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerHTML = passwordLength;

    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundColor = ((passwordLength - min) * 100 / (max-min) ) + "% 100%";
}


function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `${color} 0px 0px 20px`;
}

function getRandomInteger(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomNumber(){
    return getRandomInteger(0,9);
}

function generateUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97, 123))
}

function generateSymbol(){
    let number = getRandomInteger(0, symbols.length);
    return symbols.charAt(number);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

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


async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = 'Failed';
    }

    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}


inputSlider.addEventListener('input',(e)=>{
    passwordLength = e.target.value;
    handleSlider();
})


copyBtn.addEventListener("click", () => {
    if(passwordDisplay.value){
        copyContent();
    }
})


function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked){
            checkCount++;
        }

        if(passwordLength < checkCount){
            passwordLength = checkCount;
            handleSlider();        
        }
    })
}


allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change' , handleCheckBoxChange);
})


function shufflePassword(array){
    for(let i=array.length-1 ;i>0;i--){
        const j = Math.floor(Math.random() * (i+1));

        // swap
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let str = "";
    array.forEach((e) => {
        str += e;
    })
    return str;
}



generateBtn.addEventListener("click", () => {
    if(checkCount < 0){
        return
    }

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    password = "";

    let funcArr = [];

    if(uppercaseCheck.checked){
        funcArr.push(generateUpperCase);
    }

    if(lowercaseCheck.checked){
        funcArr.push(generateLowerCase);
    }

    if(numbersCheck.checked){
        funcArr.push(generateRandomNumber);
    }

    if(symbolsCheck.checked){
        funcArr.push(generateSymbol);
    }

    for(let i=0 ;i<funcArr.length;i++){
        password += funcArr[i]();
    }

    for(let  i=0; i<passwordLength - funcArr.length;i++){
        let random = getRandomInteger(0, funcArr.length);
        password += funcArr[random]();
    }

    password = shufflePassword(Array.from(password));

    passwordDisplay.value = password;

    calcStrength();
})