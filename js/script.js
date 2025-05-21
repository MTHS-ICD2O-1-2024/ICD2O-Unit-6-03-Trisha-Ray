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
    const resultJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
    const jsonData = await resultJSON.json()
    console.log(jsonData)
    const weatherRightNow = jsonData.data[0]

    // output
    document.getElementById("weather").innerHTML = "<p>" + weatherRightNow + "</p>"
  } catch (error) {
    console.error(error)
  }
}
