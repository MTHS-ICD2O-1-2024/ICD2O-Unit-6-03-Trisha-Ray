// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Feb 2025
// This file contains the JS functions for index.html
'use strict'

/**
 * This function gets the weather.
 * The "async" is there because it will take time for the internet to return the value
 */
async function checkWeather() {
  // the "try" is here because the internet may not be working
  // it is like an "if ... else" statement"
  try {
    const resultJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&units=metric&appid=fe1d80e1e103cff8c6afd190cad23fa5")
    const jsonData = await resultJSON.json()
    console.log(jsonData)
    const weatherRightNow = jsonData.weather[0].description
    const temperature = jsonData.main.temp

    // output
    document.getElementById("weather").innerHTML = "<p>The current weather is: " + weatherRightNow + ", " + temperature + "°C</p>"
  } catch (error) {
    console.error(error)
  }
}
