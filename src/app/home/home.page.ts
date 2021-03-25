import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentOrientation: string;
  api = {
    key: '91a2b9e221b9f519f80a96f8646b32eb',
    base: 'https://api.openweathermap.org/data/2.5/',
  };

  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  weatherData: any;
  date = new Date();
  Math = Math;

  current_date = `${this.days[this.date.getDay()]} ${this.date.getDate()} ${
    this.months[this.date.getMonth()]
  } ${this.date.getFullYear()}`;

  constructor(private screenOrientation: ScreenOrientation) {
    this.currentOrientation = this.screenOrientation.type;
    this.screenOrientation.onChange().subscribe(() => {
      this.currentOrientation = this.screenOrientation.type;
    });
    console.log('something happended');
  }

  async getWeatherData(value) {
    let data = await fetch(
      `${this.api.base}weather?q=${value}&units=metric&APPID=${this.api.key}`
    ).then((data) => data.json());
    console.log(data);
    this.weatherData = data;
  }
}
