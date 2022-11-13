class Forecast {
  constructor() {
    this.key = "WnMWLHssBhsMCLqTi3qhcc06lTXfVICK";
    this.baseURI = "https://dataservice.accuweather.com/";
  }
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);
    return { cityDetails, weather };
  }
  async getCity(city) {
    const query = `${this.baseURI}locations/v1/cities/search?apikey=${this.key}&q=${city}`;
    const response = await fetch(query);
    const data = await response.json();
    return data[0];
  }
  async getWeather(id) {
    const query = `${this.baseURI}currentconditions/v1/${id}?apikey=${this.key}`;
    const response = await fetch(query);
    const data = await response.json();
    return data[0];
  }
}
