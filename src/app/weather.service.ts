import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  locationName: string;
  todaysWeather: object;

  // Highcharts data
  updateFromInput = false;
  chartOptions = {
    chart: {
       type: 'spline'
    },
    title: {
       text: 'Monthly Average Temperature'
    },
    subtitle: {
       text: 'Source: WorldClimate.com'
    },
    xAxis: {
       categories: []
    },
    yAxis: {
       title: {
          text: 'Temperature °C'
       }
    },
    tooltip: {
       valueSuffix: ' °C'
    },
    series: [
       {
          name: 'Min Temp',
          data: []
       },
       {
          name: 'Temperature',
          data: []
       },
       {
          name: 'Max Temp',
          data: []
       }
    ]
 };

  constructor(private http: HttpClient) { }

  getLocation(selectedLocation: string): Observable<any> {
    const locationUrl = `https://www.metaweather.com/api/location/search/?query=${selectedLocation}`;
    return this.http.get(locationUrl).pipe(
      map(location => location[0])
    );
  }

  getLocationInfo(woeid: string): Observable<any> {
    const locationInfoUrl = `https://www.metaweather.com/api/location/${woeid}/`;
    return this.http.get(locationInfoUrl);
  }
}
