console.log("hello jee babbar");

const API_KEY = "c4271050137fa51c7e9353674c74dac1";


function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;
    document.body.appendChild(newPara);
}


async function fetchWeatherDetails(){

    try {
        let city = "delhi";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

        const data = await response.json();

        console.log("Weather data -> ", data);  // beware of syntax instead of '+' we used ','

        renderWeatherInfo(data);
    } catch (error) {
        console.log('error')
    }

    
}


// Making another API using latitude and longitude
async function getCustomWeatherDetails(){

    try {
        let latitude = 19.0760;
        let longitude = 72.8777;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
        let data = await result.json();

        console.log(data);

        renderWeatherInfo(data);
    } catch (error) {
        console.log("Enter valid latitude and longitude");
    }
    
}


// My Current Location
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        console.log("No geoLocation support")
    }
}


function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}