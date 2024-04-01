const userTab = document.querySelector("[data-userWeather]")
const searchTab = document.querySelector("[data-searchWeather]")
const userContainer = document.querySelector(".weather-container")
const grantAccessContainer = document.querySelector(".grant-location-container")
const searchForm = document.querySelector("[data-searchForm]")
const loadingScreen = document.querySelector(".loading-container")
const userInfoContainer = document.querySelector(".user-info-container")


// initial variable need
let oldTab = userTab;
const API_KEY = "c4271050137fa51c7e9353674c74dac1";
oldTab.classList.add("current-tab")

// ek kaam aur pending hai ?
// check karlege pehele se koi coordinates padi hai ki nai
getFromSessionStorage();



function switchTab(newTab){
    if(newTab != oldTab){
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab")


        // search form ke aandar active nai pada hau hai -> iska matlab muhje isko active karna hai

        // kya search form wala container is invisible, if yes then make it visible
        // active class ka css dekho (scale:1, opacity:1)
        if(!searchForm.classList.contains("active")){

            // search form pe click karke kya kya active nai hai usse active karo
            // jaise userInfo wala remove kardo
            // then grantAccess wala bhi remove kardo
            // aur searchFrom wala show kardo
            userInfoContainer.classList.remove("active")
            grantAccessContainer.classList.remove("active")
            searchForm.classList.add("active")
        }
        else{
            // main phele search wale tab mei tha, ab your weather tab visible karna h
            searchForm.classList.remove("active")
            userInfoContainer.classList.remove("active")

            // your weather pe show karne ke liye

            // ab mei your weather tab mei aagaya hoo, tho weather bhi display karna padega, so let's check
            // local storage first, for coordinates, if we haved saved them there.
            getFromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    // pass clicked tab as input parameter
    switchTab(userTab);
})

searchTab.addEventListener("click", () => {
    // pass clicked tab as input parameter
    switchTab(searchTab);
})


// check if coordinates are already present in session storage
function getFromSessionStorage(){
    // kya humesha 'user-coordinates' hoga? -> nahi. jisi bhi item ko send karoge khud se jis bhi naam se save karoge ussi ko search karoge
    const localCoordinates = sessionStorage.getItem("user-coordinates");  
    if(!localCoordinates){
        // agar local coordinates nai hai
        grantAccessContainer.classList.add("active")
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}


async function fetchUserWeatherInfo(coordinates){
    const {lat, lon} = coordinates;

    // make grantContainer Invisible
    grantAccessContainer.classList.remove("active");
    // make loader Visible
    loadingScreen.classList.add("active");

    // API Call
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

        const data = await response.json();

        // remove loading screen
        loadingScreen.classList.remove("active");
        // make userContainerInfo Visible
        userInfoContainer.classList.add("active");

        // Now Render  -> is data mei se values nikal ke display karega
        renderWeatherInfo(data);
    } catch (error) {
        loadingScreen.classList.remove("active")
        // HW ?

    }
}


function renderWeatherInfo(weatherInfo){
    // firstly we have to fetch elements
    const cityName = document.querySelector("[data-city-name]");
    const countryIcon = document.querySelector("[data-country-icon]")
    const desc = document.querySelector("[data-weatherDesc]")
    const weatherIcon = document.querySelector("[data-weatherIcon]")
    const temp = document.querySelector("[data-temp]")
    const windspeed = document.querySelector("[data-windSpeed]")
    const humidity = document.querySelector("[data-humidity]")
    const cloudiness = document.querySelector("[data-cloudiness]")


    // fetch values from weatherInfo object and put it in UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description; // weather ek array the isliye
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity} %`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all} %`;
}


function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)   // passing call back function
    }
    else{
        // HW - show an alert for no geolocation support available
        alert("No supported in current browser")
    }
}

function showPosition(position){
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    // set
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));

    // UI pe show
    fetchUserWeatherInfo(userCoordinates)
}

const grantAccessButton = document.querySelector("[data-grantAccess]");

grantAccessButton.addEventListener("click", getLocation);


// after 1 week break

let searchInput = document.querySelector("[data-searchInput]")
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;
    if(cityName === "") {
        return;
    }
    else{
        fetchSearchWeatherInfo(cityName);
    }
    
})


// calling Api So making async function
async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch{
        // HW?
    }
    
}