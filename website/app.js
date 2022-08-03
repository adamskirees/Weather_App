// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=4d4a3eb9d322124aa8855cbdec9d1253";
const baseURL =
  "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";

  //Set up event listener
  let start = document.getElementById("generate").addEventListener("click", requestAction);
  
  //Bring in event listener
  let requestAction = (e) => {
    let zipcode = document.getElementById("zip").value;
    let feelings = document.getElementById("feelings").value;
    getWeather(`${baseURL}${zipcode}${apiKey}`).then(function (data) {
      postData("(http://localhost:3000/show", {
        temp: data.main.temp,
        content: feelings,
      }).then(updateUI);
    });
  };



  //GET function - to pull weather API
  let getWeather = async (url) => {
    let response = await fetch(url);
    try {
      let data = await response.json();
      HTMLFormControlsCollection.log(data);
    } catch (error) {
      console.log("error", error);
    }
    };