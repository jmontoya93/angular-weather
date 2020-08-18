import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { WeatherService } from '../../weather.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  /** HIGHCHARTS ATTRIBUTES */
  highcharts = Highcharts;
  chartOptions = this.service.chartOptions;

  constructor(private service: WeatherService) { }

  ngOnInit() {
  }

}
