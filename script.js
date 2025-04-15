async function getWeather() {
    let city = document.getElementById("input").value;
    const apiKey = "a7e16af42bf5cd97f43e75e51c29496d"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        let p1 = document.getElementById("p1");
        let p2 = document.getElementById("p2");
        let p3 = document.getElementById("p3");
        let p4 = document.getElementById("p4");
        let now = new Date();
        let formatted = now.toLocaleString();
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        p1.innerHTML = `${data.name} <br><small>${formatted}</small>`;
        p2.innerHTML = `Maximum Temperature ${data.main.temp_max}°C <br> Minimum Temperature ${data.main.temp_min}°C`;
        p3.innerHTML = `${data.main.temp}°C`;
        p4.innerHTML = `${data.weather[0].description}`;
      } catch (error) {
          alert("Error: Wrong City Name ", error.message);
      }
      input.value = "";
      }
      document.getElementById("search").addEventListener("click", getWeather);
