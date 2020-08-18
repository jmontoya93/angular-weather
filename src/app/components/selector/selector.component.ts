import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  locationSelect = 'bogotá';

  locationList = [
    {value: 'bogotá', label: 'Bogotá'},
    {value: 'buenos aires', label: 'Buenos Aires'},
    {value: 'caracas', label: 'Caracas'},
    {value: 'maracaibo', label: 'Maracaibo'}
  ];

  constructor(
    private service: WeatherService) { }

  ngOnInit() {
    this.getSelectedLocation();
  }

  getSelectedLocation() {
    // data reset to hide components while waiting for service
    this.service.chartOptions.xAxis.categories = [];
    this.service.todaysWeather = {};

    this.service.getLocation(this.locationSelect).subscribe(
      location => {
        // sub-header component data
        this.service.locationName = location.title;
        this.service.getLocationInfo(location.woeid).subscribe(
          (data: any) => {
            // main-content component data
            const forecastArray = data.consolidated_weather;
            this.service.chartOptions.xAxis.categories = forecastArray.map(forecast => forecast.applicable_date);
            this.service.chartOptions.series[0].data = forecastArray.map(forecast => forecast.min_temp);
            this.service.chartOptions.series[1].data = forecastArray.map(forecast => forecast.the_temp);
            this.service.chartOptions.series[2].data = forecastArray.map(forecast => forecast.max_temp);
            this.service.updateFromInput = true;

            // aside component data
            this.service.todaysWeather = data.consolidated_weather[1];
          });
      }
    );
  }

}
