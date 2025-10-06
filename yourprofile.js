// Example static data (you can connect it later with API or local storage)
document.addEventListener("DOMContentLoaded", () => {
  const cityName = "Chennai";
  const weatherCondition = "Sunny, 32°C";

  document.getElementById("cityName").innerText = cityName;
  document.getElementById("cityWeather").innerText = weatherCondition;

  // Optionally, crop progress could be dynamically updated here later
  console.log("Profile data loaded for:", cityName);
});
