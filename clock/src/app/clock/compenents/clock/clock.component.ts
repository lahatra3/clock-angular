import { Component, OnInit } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  textHour!: string;
  textMinutes!: string;
  textAmPm!: string;
  dateDay!: string;
  dateMonth!: string;
  dateYear!: string;

  constructor() { }

  ngOnInit(): void {
    // ==========================
    const hour: HTMLElement = <HTMLElement>document.getElementById('clock-hour');
    const minutes: HTMLElement = <HTMLElement>document.getElementById('clock-minutes');
    const seconds: HTMLElement = <HTMLElement>document.getElementById('clock-seconds');
    const clock = () => {
      let date: Date = new Date();

      let hh: number = date.getHours() * 30;
      let mm: number = date.getMinutes() * 6;
      let ss: number = date.getSeconds() * 6;

      hour.style.transform = `rotateZ(${ hh + mm / 12 }deg)`;
      minutes.style.transform = `rotateZ(${ mm }deg)`;
      seconds.style.transform = `rotateZ(${ ss }deg)`;
    };
    setInterval(clock, 1000);

    // ===========================
    const clockText = () => {
      let date: Date = new Date();
      let ampm: string;
      let hh: number | string = date.getHours();
      let mm: number | string = date.getMinutes();
      let day: number = date.getDate();
      let month: number = date.getMonth();
      let year: number = date.getFullYear();

      let monthsArray: string[] = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];

      if(hh >= 12) {
        hh = hh -12;
        ampm = 'PM';
      }
      else ampm = 'AM';
      if(hh == 0) hh = 12;
      if(hh < 10) hh = `0${ hh }:`;
      if(mm < 10) mm = `0${ mm }`;

      this.textHour = `${ hh }`;
      this.textMinutes = `${ mm }`
      this.textAmPm = `${ ampm }`;
      this.dateDay = day.toString();
      this.dateMonth = monthsArray[month];
      this.dateYear = year.toString();
    }
    setInterval(clockText, 1000);
  }
}
