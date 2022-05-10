// Setup env for API keys
const dotenv = require('dotenv');
dotenv.config();

//Global variables and express
const fetch = require("node-fetch");
const express = require('express');
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors 
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));


app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
    //res.sendFile(path.resolve('/src/client/views/index.html'))

})

app.get('/test', async (req, res) => {
    res.json({message: 'request to endpoint successful!'})
  })

// Callback to debug
function listening() {
    console.log(`Server running on localhost: ${port}`);
}

app.post('/getLocationData', async(req, res) => {

    const url = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=${process.env.USERNAME_GEONAMES}`;
    const response = await fetch(url);
    try {
        const data = await response.json();
        let coordinatesData = {
            name: data.geonames[0].name,
            country: data.geonames[0].countryName,
            latitude: data.geonames[0].lat,
            longitude: data.geonames[0].lng
        };

            res.send(coordinatesData);
    } catch (error) {
        console.log("Error", error);
    }
})

app.post('/getWeatherData', async(req, res) => {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.body.lat}&lon=${req.body.long}&key=${process.env.API_KEY_WEATHERBIT}`;
    const response = await fetch(url);
    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log("Error", error);
    }
})

app.post('/getPhotoData', async(req, res) => {
    const url = `https://pixabay.com/api/?key=${process.env.API_KEY_PIXABAY}&q=${req.body.city}&image_type=photo`;
    const response = await fetch(url)
    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log("Error", error);
    }
})

// exporting app so endpoints can be tested
module.exports = app;