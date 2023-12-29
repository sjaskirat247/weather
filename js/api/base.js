// replace your api key 

const API_KEY = "7650bdcd5dae7f5ad7a9e2df5efab5e4"



// create getWeather function here
const getWeather = (cityName) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`) // a promise
      .then((response)=> {
        return response.json() // a promise
      }).then((data)=> {
        return data // because this is concrete data
      })
  }
  
  // export the getWeather function
  export {getWeather}

