const key = "WnMWLHssBhsMCLqTi3qhcc06lTXfVICK";
const base = "https://crossorigin.me/http://dataservice.accuweather.com/";

const getWeather = async (id) => {
  const query = `currentconditions/v1/${id}?apikey=${key}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

const getCity = async (city) => {
  const query = `locations/v1/cities/search?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};
