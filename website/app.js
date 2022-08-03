// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=4d4a3eb9d322124aa8855cbdec9d1253";
const baseURL =
  "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";


  
  //Bring in event listener
  let requestAction = (e) => {
    let zipcode = document.getElementById("zip").value;
    let feelings = document.getElementById("feelings").value;
    getWeather(`${baseURL}${zipcode}${apiKey}`).then(function(data) {
      postData("http://localhost:3000/show", {
        //temp: temp,
        content: feelings,
      }).then(updateUI);
    });
  };

    //Set up event listener
    let start = document.getElementById("generate").addEventListener("click", requestAction);

  //GET function - to pull weather API
  let getWeather = async (url) => {
    let response = await fetch(url);
    try {
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
    };

    //POST function - to post data
    let postData = async (url = "", data = {}) => {
      let response = await fetch(url)
        method: "POST",
        body: JSON.stringify(data),
      });
      try {
        let newData = await response.json();
        console.log(newData);
        return newData;
      } catch (error) {
        console.log("error", error);
      }
      
    };

    //GET weather data
    const updateUI = async () => {
      let request = await fetch("http://localhost:3000/all");
      try {
        const allData = await request.json();
        document.getElementById("temp").innerHTML = allData.temp;
        document.getElementById("content").innerHTML = allData.content;
      } catch (error) {
        console.log("error", error)
      }
    };