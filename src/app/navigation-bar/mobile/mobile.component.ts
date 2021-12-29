import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  time = new Date();
  navbarOpen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {  
    // Force close mobile navbar on router changes
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(event => {
      this.navbarOpen = false;
    });
    
  }
  
  // Navbar toggler function, necessary for the navbar automatic closing on route changes
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  
}
