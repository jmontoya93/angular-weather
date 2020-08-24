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

  columnDefs = [
      {headerName: 'Min', field: 'min_temp' },
      {headerName: 'Max', field: 'max_temp' },
      {headerName: 'Temp', field: 'the_temp'}
  ];
  rowData: any;

  constructor(private service: WeatherService) {}

  ngOnInit() {
    // this.loadGrid();
  }

  loadGrid() {
    this.service.getLocation('bogotá').subscribe(
      location => {
        this.rowData = this.service.getLocationInfo(location.woeid);
      }
    );
  }

}
