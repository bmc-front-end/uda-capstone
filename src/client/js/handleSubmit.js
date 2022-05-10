async function handleSubmit(e) {

    let projectData = {};

    e.preventDefault();

    const destination = document.getElementById("destination").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const departureDate = Date.parse(startDate);
    const returnDate = Date.parse(endDate);

    // calculate how many days before departure
    let timeNow = new Date().getTime();
    let dayInMilliseconds=(1000*60*60*24);
    const daysBeforeDeparture = Math.round((departureDate - timeNow) / dayInMilliseconds);

    // calculate duration of trip
    const tripDuration = Math.round((returnDate - departureDate) / dayInMilliseconds);


    if (Client.validateInput(destination, startDate, endDate)) {

        // retrieve coordinates of destination
        const coordinatesData = await Client.getData('/getLocationData', { location: destination });

      //retrieve weather data for destination
      const weatherData = await Client.getData('/getWeatherData', { lat: coordinatesData.latitude, long: coordinatesData.longitude });

        // select weather forecast depending on duration of stay
        let forecastFor = 0;

        if (daysBeforeDeparture <= 7) {
            forecastFor = 0;
        } else { forecastFor = daysBeforeDeparture };

       const image = await Client.getData('/getPhotoData', { city: destination });
       
       // formatting dates into a readable format
       function getDateString(dateInMilliseconds) {

        let dateTemp = new Date(dateInMilliseconds);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        //console.trace();
        let dateString = '';
        dateString = `${days[dateTemp.getDay()]} ${dateTemp.getDate()} ${months[dateTemp.getMonth()]} ${dateTemp.getFullYear()}`
        return dateString;
    }
     
        // compile api data before updating UI       
        projectData={
            city: coordinatesData.name,
            country: coordinatesData.country,
            countdown: daysBeforeDeparture,
            departureDate: getDateString(departureDate),
            returnDate: getDateString(returnDate),
            description: weatherData.data[forecastFor].weather.description,
            duration: tripDuration,
            highTemp: weatherData.data[forecastFor].high_temp,
            imageUrl: image.hits[0].largeImageURL,
            lowTemp: weatherData.data[forecastFor].low_temp,
            uvIndex: weatherData.data[forecastFor].uv,
            weatherIcon: weatherData.data[forecastFor].weather.icon,
            windDirection: weatherData.data[forecastFor].wind_cdir_full,
            windSpeed: weatherData.data[forecastFor].wind_spd     
        }

        // updating  UI with fetched api data
       Client.updateUI(projectData);

    }
}

// generating post requests to server
async function getData(url, data) {
    
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

export { handleSubmit, getData }