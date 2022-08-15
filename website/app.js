// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=4d4a3eb9d322124aa8855cbdec9d1253&units=imperial";
const baseURL =
  "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";


  //Bring in event listener
  let requestAction = (e) => {
    let zipcode = document.getElementById("zip").value;
    let feelings = document.getElementById("feelings").value;
   
    getWeather(`${baseURL}${zipcode}${apiKey}`).then(function (data) {
      const temp = data.main.temp;
      postData("http://localhost:3000/show", {
        temp: temp,
        content: feelings,
      }).then(retrieveData);
    });
  };

    //Set up event listener
    let start = document.getElementById("generate").addEventListener("click", requestAction);

  //GET function - to pull weather API
  let getWeather = async (url) => {
    let response = await fetch (url);
    try {
      let data = await response.json();
      //console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
    };

    //POST function - to post data
    let postData = async (url = "", data = {}) => {
      let response = await fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
 

      try {
        let newData = await response.json();
        //console.log(newData);
        return newData;
      } catch (error) {
        console.log("error", error);
      };
    };

    //GET weather data
    const retrieveData = async () => {
      let request = await fetch("http://localhost:3000/all");
      try {
        const allData = await request.json();
        document.getElementById("temp").innerHTML = Math.round(allData.temp) + 'degrees';
        document.getElementById("content").innerHTML = allData.content;
        document.getElementById("date").innerHTML = allData.date;
      } catch (error) {
        console.log("error", error)
      }
    };