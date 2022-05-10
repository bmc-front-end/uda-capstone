const updateUI = (projectData) => {

    const result = document.getElementById('trip_search_result');
    result.innerHTML =
        `<div class="trip">
        
        <h2>${projectData.city}, ${projectData.country}</h2>
        <figure>
            <img class = "trip_img" src = "${projectData.imageUrl}" alt = "Photo of ${projectData.city}" />
          </figure>
         
          <div class="trip_details">
          <div class="trip_weather">
          <h3>Weather forecast</h3>
          <p><img class="icon" src="https://www.weatherbit.io/static/img/icons/${projectData.weatherIcon}.png" alt = "weather icon" /></p>
          <p>Expected weather: ${projectData.description}</p>
          <p class="max-temp">Max Temp: ${projectData.highTemp} &deg;C </p>
          <p class="min-temp">Min Temp: ${projectData.lowTemp} &deg;C </p>
          <p>Wind speed: ${projectData.windSpeed} </p>
          <p>direction: ${projectData.windDirection} </p>
          </div>
          <div class="trip_info">
          <h3>Your Trip information</h3>
          <ul>
            <li>You are travelling to to ${projectData.city}</li>
            <li>Departing in: ${projectData.countdown} day(s)</li>
            <li>Staying there for: ${projectData.duration} day(s)</li>
            <li>Leaving on: ${projectData.departureDate}</li>            
            <li>Returning on: ${projectData.returnDate}</li>           
          </ul>
          </div>         
        </div>
        </div>`
};

export { updateUI };