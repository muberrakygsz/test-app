import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { TodayweatherComponent } from './todayweather/todayweather.component';
import { WeekweatherComponent } from './weekweather/weekweather.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    TodayweatherComponent,
    WeekweatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
