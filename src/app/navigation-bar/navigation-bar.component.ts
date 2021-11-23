import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  
  time = new Date();
  navbarOpen: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void { 
  
    // Close mobile navbar on router changes.
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(event => {
      this.navbarOpen = false;
    });
  
  }
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
