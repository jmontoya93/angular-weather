// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AgGridModule } from 'ag-grid-angular';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { SelectorComponent } from './components/selector/selector.component';

// PIPES
import { TemperaturePipe } from './pipes/temperature.pipe';
import { SpeedPipe } from './pipes/speed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    HeaderComponent,
    SubHeaderComponent,
    MainContentComponent,
    AsideComponent,
    FooterComponent,
    SelectorComponent,
    TemperaturePipe,
    SpeedPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
