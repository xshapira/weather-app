class Forecast {
  constructor() {
    this.key = 'YTj5eeddcsrJG0BTMdBPr1SaH72A16xj';
    this.weatherURI =
      'http://dataservice.accuweather.com/locations/v1/cities/search';
    this.cityURI =
      'http://dataservice.accuweather.com/locations/v1/cities/search';
  }
  async updateCity(city) {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);
    return { cityDetails, weather };
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  }
  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }
}
