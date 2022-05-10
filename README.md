# Capstone Project: Travel App

## Project overview
The project includes a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast.

## API's

3 API's are used in this app to get the relevant data to be displayed on the page.

- [Geonames]("http://www.geonames.org/export/web-services.html")
- [Weatherbit](https://www.weatherbit.io/account/create)
- [Pixabay](https://pixabay.com/api/docs/)

 This apps uses the ***Geonames*** API to get the coordinates of the destination.
 
 Those coodinates are then fed into the ***Weatherbit*** API to retrieve the relevant weather forecast for the chosen destination.

 An image of the destination is also fetched from ***Pixabay*** API.

 All API keys are stored in the .env file as environment variables.

 ## Installation
To get up and running, install the following items using npm:

+ ### Plugins and loaders

      npm i -D @babel/core @babel/preset-env babel-loader\
      npm i -D style-loader node-sass css-loader sass-loader\
      npm i -D clean-webpack-plugin\
      npm i -D html-webpack-plugin\
      npm i -D mini-css-extract-plugin\
      npm i -D optimize-css-assets-webpack-plugin\ terser-webpack-plugin

+ ### Testing library (Jest)

      npm install --save-dev jest

+ ### Dependencies
    Here is a list of dependencies used for this project

      "dependencies": {
      "dotenv": "^8.6.0",
      "express": "^4.17.1",
      "jest-fetch-mock": "^3.0.3",
      "webpack": "^4.35.3",
      "webpack-cli": "^3.3.5"
      },
      "devDependencies": {
      "@babel/core": "^7.17.9",
      "@babel/plugin-transform-modules-commonjs": "^7.13.8",
      "@babel/plugin-transform-runtime": "^7.17.0",
      "@babel/preset-env": "^7.16.11",
      "babel-loader": "^8.2.4",
      "body-parser": "^1.19.0",
      "clean-webpack-plugin": "^3.0.0",
      "cors": "^2.8.5",
      "css-loader": "^5.2.7",
      "file-loader": "^4.3.0",
      "html-loader": "^0.5.5",
      "html-webpack-plugin": "^3.2.0",
      "install": "^0.13.0",
      "jest": "^26.6.3",
      "mini-css-extract-plugin": "^1.6.2",
      "node-fetch": "^2.6.1",
      "node-sass": "^5.0.0",
      "optimize-css-assets-webpack-plugin": "^5.0.8",
      "sass": "^1.32.8",
      "sass-loader": "^10.2.1",
      "style-loader": "^2.0.0",
      "superagent": "^7.1.2",
      "supertest": "^6.2.2",
      "terser-webpack-plugin": "^4.2.3",
      "webpack-dev-server": "^3.11.2",
      "workbox-webpack-plugin": "^6.5.0"
      }

### Running the app
Use the following scripts to run the app from npm

    npm run prod
    npm run server

Once the server is started, you can view the app on <http://localhost:8080>

Use the follow scripts to run the test scripts from npm

    npm run test
 
This is the latest project of the front-end webdeveloper nanodegree program at Udacity.

 <http://www.udacity.com>

