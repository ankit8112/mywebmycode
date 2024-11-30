const form = document.getElementById("search-form");
const cityInput = document.getElementById('city-input');
const weatherContainer = document.getElementById("weather-container")

async function getWeatherDataByCity(city){
const url = `https://open-weather13.p.rapidapi.com/$(city)//EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '85669a573fmshd621bd9a720770ep1a158bjsn25f61fd6d16e',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    return result.main;
} catch (error) {
	console.error(error);
}
}

function renderError(message){
    weatherContainer.innerHTML = `<div class="bg-red-700 p-4 rounded-lg text-center">
    $(message)
    </div>`
}

function renderWeatherCard(data , city){
    weatherContainer.innerHTML = <div class="bg-white rounded-xl shadow-lg p6">
        <div class="text-center mb-6">
            <h2 class="text-3xl font-bold text-gray-800">
                ${city}
            </h2>
        </div>
    </div>
}


form.addEventListener("submit" , async (event)=>{
    event.preventDefault();
    const city = cityInput.value.trim()
    if(!city) return;

    try{
        weatherContainer.innerHTML = `<div class="text-white text-center ">Loading Weather Data...</div>`
        const data = await getWeatherDataByCity(city , city)
        renderWeatherCard(data)
    }catch (error){
        renderError("city not found, Please try Again")
    }
    finally{

    }
})