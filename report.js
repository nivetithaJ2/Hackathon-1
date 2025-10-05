function showWeatherReport() {
  const city = document.getElementById("cityInput").value.trim();
  const reportSection = document.getElementById("reportSection");

  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  // 🌦 Sample static data (you can replace this later with live API)
  let weatherData = {
    name: city,
    temp: 32,
    humidity: 58,
    condition: "Sunny",
    advisory: "",
    crops: []
  };

  // Generate advisory & crops based on simple logic
  if (weatherData.condition.toLowerCase().includes("rain")) {
    weatherData.advisory = "Rainy conditions — ensure proper drainage and protect crops.";
    weatherData.crops = ["Rice", "Sugarcane", "Jute", "Tea"];
  } else if (weatherData.temp > 35) {
    weatherData.advisory = "High temperature — irrigate fields and protect crops from sun.";
    weatherData.crops = ["Millets", "Maize", "Cotton", "Groundnut"];
  } else if (weatherData.temp < 15) {
    weatherData.advisory = "Cold weather — cover delicate plants to avoid frost damage.";
    weatherData.crops = ["Wheat", "Barley", "Mustard", "Peas"];
  } else {
    weatherData.advisory = "Mild weather — ideal for balanced crop growth.";
    weatherData.crops = ["Paddy", "Vegetables", "Fruits", "Lentils"];
  }

  // Update frontend
  reportSection.innerHTML = `
    <h2>City: ${weatherData.name}</h2>
    <p><strong>Temperature:</strong> ${weatherData.temp}°C</p>
    <p><strong>Humidity:</strong> ${weatherData.humidity}%</p>
    <p><strong>Condition:</strong> ${weatherData.condition}</p>

    <div class="advisory">
      <strong>Weather Advisory:</strong>
      <p>${weatherData.advisory}</p>
    </div>

    <div class="crops">
      <strong>Recommended Crops:</strong>
      <ul>${weatherData.crops.map(crop => `<li>${crop}</li>`).join("")}</ul>
    </div>
  `;
}

