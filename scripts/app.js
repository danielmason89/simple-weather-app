const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  return { cityDetails, weather };
};

const updateUI = (data) => {
  const { cityDetails, weather } = data;

  details.innerHTML = `
  <h3 class="my-3">${cityDetails.EnglishName}</h3>
          <h5 class="my-3">${weather.WeatherText}</h5>
          <h4 class="display-5 my-3">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </h4>
  `;

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "./img/day.svg";
  } else {
    timeSrc = "./img/night.svg";
  }
  time.setAttribute("src", timeSrc);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});