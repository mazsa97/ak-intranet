import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import huLocale from '@fullcalendar/core/locales/hu';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  // Set calendar options (view, lang, etc.)
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: huLocale
  };

  constructor() { }

  ngOnInit(): void { }

}
