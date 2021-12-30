import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  date = new Date();

  constructor() { }

  ngOnInit(): void { }
  
  // Show greeting message based on time of the day
  showGreeting() {
    // Get current hour
    let current = this.date.getHours();
    let message: string = '';
    
    // Messages based on current hour
    if (current < 9) {
        message = 'Jó reggelt';
    }
    if (current >= 9 && current < 18) {
        message = 'Jó napot';
    }
    if (current >= 18) {
        message = 'Jó estét';
    }
    // Append "," to the end of the text
    message = message + ',';
    return message;
  }

}
