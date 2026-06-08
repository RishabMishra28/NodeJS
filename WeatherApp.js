import readline  from 'readline/promises';

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const BASE_URL='http://api.weatherapi.com/v1';
const API_KEY='bce38013fecf4cb2876102926260806'


const getWeather = async (city) => {
const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`;
  try {
    const response= await fetch(url);
    if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
    }
    const weatherData = await response.json();

console.log(`City: ${weatherData.location.name}`);
console.log(`Country: ${weatherData.location.country}`);
console.log(`Temperature: ${weatherData.current.temp_c}°C`);
console.log(`Condition: ${weatherData.current.condition.text}`);
console.log(`Humidity: ${weatherData.current.humidity}%`);
console.log(`Wind Speed: ${weatherData.current.wind_kph} kph`);
  } catch (error) {
    console.log(error);
  }
}

const city = await rl.question('Enter  a city name to get its weather : ');
await getWeather(city);
rl.close();





