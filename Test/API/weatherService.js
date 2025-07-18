const axios = require('axios');

const cityCord= {
  CapeTown: { lat: 33.9221, lon: 18.4231 },
  Paris: { lat: 48.8566, lon: 2.3522 },
  NewDelhi: { lat: 28.6139, lon: 77.2090 }
};

async function getWeatherData(city, endpoint) 
{
    const Coords = cityCord[city];
    if (!Coords) {
        throw new Error('City not found');
    }
    let url = `https://api.open-meteo.com/v1/${endpoint}?latitude=${Coords.lat}&longitude=${Coords.lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
    if (endpoint === '400') {
        url = 'https://api.activity-rank.com/v1/forecast%'; 
    }
    let activityURL  = `https://api.activity-rank.com/v1/forecast`;
    try {
        const response = await axios.get(url);   
        const weatherData = daily.time.map((date, i) => ({
            date,
            min: daily.temperature_2m_min[i],
            max: daily.temperature_2m_max[i]
        }));      
        
        if (endpoint === 'timeout') {
         const activityResponse = await axios.post(
            activityURL,
            {
                Weather: weatherData  // this is the request body
            },
            { params: { city: city, 
                timeout: 1,} // Setting a very short timeout to simulate a timeout error            
            }  
        );
        }
        else {
            const activityResponse = await axios.post( activityURL,
            {Weather: weatherData  // this is the request body
            },
            {params: { city: city }
            });
        }         
        return activityResponse.data;
    } 
    catch (error) {
        if (error.response && (error.response.status === 404 || error.response.status === 400)|| error.response.status === 403) {
            return error.response.status;
        }
        if (error.code === 'ECONNABORTED') {
            throw new Error('Request timed out'); // Simulating a timeout error
        }
        throw error;
    }
}

module.exports = getWeatherData;


