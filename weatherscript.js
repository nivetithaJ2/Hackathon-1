async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const apiKey = "YOUR_API_KEY_HERE"; // 🔑 Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      resultDiv.innerHTML = `<p>City not found. Please try again.</p>`;
      return;
    }

    const { name } = data;
    const { temp, humidity } = data.main;
    const { description } = data.weather[0];

    // Generate advisory
    let advisory = "";
    if (description.includes("rain")) {
      advisory = "☔ It's rainy — carry an umbrella!";
    } else if (temp > 35) {
      advisory = "🔥 It's very hot — stay hydrated and avoid going out!";
    } else if (temp < 15) {
      advisory = "🧥 It's cold — wear warm clothes!";
    } else {
      advisory = "🌤 The weather is pleasant — enjoy your day!";
    }

    resultDiv.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Temperature:</strong> ${temp}°C</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
      <p><strong>Condition:</strong> ${description}</p>
      <div class="advisory">${advisory}</div>
    `;
  } catch (error) {
    resultDiv.innerHTML = "<p>Error fetching weather data.</p>";
  }
}



