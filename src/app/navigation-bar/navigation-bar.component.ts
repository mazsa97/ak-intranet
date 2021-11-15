import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  time = new Date();

  constructor() { }

  ngOnInit(): void {
    
    // Interval for the navigation bar clock (every 1 seconds)
    // window.setInterval( () => {
    //   this.time = new Date()
    // }, 1000);
  }

}
