// Grabbing all the Dom Element variables
const more = document.getElementById('more')                        
const less = document.getElementById('less')
const extraForecast = document.getElementById('extraForecast')
const footer = document.getElementById('footer')
const currWeather =document.getElementById('weather')
const currTemp = document.getElementById('temperature')
const currWind = document.getElementById('wind-speed')
const nextDayWeather = document.getElementById('next-day-weather')
const nextDayWeather2 = document.getElementById('next-day-weather2')
const nextDayWeather3 = document.getElementById('next-day-weather3')
const nextDayTemp = document.getElementById('next-day-temp')
const nextDayTemp2 = document.getElementById('next-day-temp2')
const nextDayTemp3 = document.getElementById('next-day-temp3')
const nextDayWind = document.getElementById('next-day-wind')
const nextDayWind2 = document.getElementById('next-day-wind2')
const nextDayWind3 = document.getElementById('next-day-wind3')
const submit = document.getElementById('x')
const nextDayDate = document.getElementById('next-day')
const thirdDayDate = document.getElementById('third-day')
const fourthDayDate = document.getElementById('fourth-day')

//other variables
const day = new Date()
const nextDay = new Date(day);
nextDay.setDate(day.getDate() + 1);

const thirdDay = new Date(day);
thirdDay.setDate(day.getDate() + 2);

const fourthDay = new Date(day);
fourthDay.setDate(day.getDate() + 3);


// expansion/reduction  buttons for the extra forecast section 
more.addEventListener('click', () => {
    extraForecast.style.display = 'grid'
    footer.style.position = 'relative'    // fix for footer to force to bottom
});

less.addEventListener('click', () => {
    extraForecast.style.display = 'none'
    footer.style.position = 'absolute'      // fix for footer to force to bottom
});

// input box and google places API for options
const input = document.getElementById('input')                              
const searchBox = new google.maps.places.SearchBox(input)
searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0]
    const lat = place.geometry.location.lat()
    const long = place.geometry.location.lng()
    getWeather(lat, long)
    extraWeather(lat,long)
});



// get the weather json from openWeather and update the values on the page 
async function getWeather(lat, long) {
    const lattitude = lat
    const longitude = long
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=2ffffdb07da845b7ddd3a5322121a488`)
        if (response.ok) {
            const jsonResponse = await response.json()
            const {icon} = jsonResponse.weather[0]
                currTemp.innerText = Math.floor(jsonResponse.main.temp - 273)    // JSON returns a kelvin value so converte
                currWind.innerText = jsonResponse.wind.speed
                currWeather.src = `/resources/icons/${icon}.png`
                
            return
        }
        throw new Error('Request Failed')

    }  catch(error) {
        window.location = '/'
        alert(error)
    }
}

async function extraWeather(lat, long) { 
    const lattitude = lat
    const longitude = long
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lattitude}&lon=${longitude}&appid=2ffffdb07da845b7ddd3a5322121a488`)
            if (response.ok){
                const jsonResponse = await response.json()              
                const icon1 = jsonResponse.list[8].weather[0].icon 
                const icon2 = jsonResponse.list[16].weather[0].icon
                const icon3 = jsonResponse.list[24].weather[0].icon       
                nextDayWeather.src = `/resources/icons/${icon1}.png`       //needs fixing??
                nextDayWind.innerText = jsonResponse.list[8].wind.speed
                nextDayTemp.innerText = Math.floor(jsonResponse.list[8].main.temp - 273)
                nextDayWeather2.src = `/resources/icons/${icon2}.png`
                nextDayWind2.innerText = jsonResponse.list[16].wind.speed
                nextDayTemp2.innerText = Math.floor(jsonResponse.list[16].main.temp - 273)
                nextDayWeather3.src = `/resources/icons/${icon3}.png`
                nextDayWind3.innerText = jsonResponse.list[24].wind.speed
                nextDayTemp3.innerText = Math.floor(jsonResponse.list[24].main.temp - 273)
                nextDayDate.innerText = nextDay.toDateString("en")
                thirdDayDate.innerText = thirdDay.toDateString("en")
                fourthDayDate.innerText = fourthDay.toDateString("en")
                console.log(jsonResponse.list[16].weather[0].icon)
                
                return
        }
        throw new Error ('error')
        }
        catch(error){
    window.location = '/'
    alert(error)
    }
}
