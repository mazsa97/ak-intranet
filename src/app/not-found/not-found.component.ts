import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  
    currentPage: string = decodeURIComponent(window.location.pathname.substring(1));

  constructor() { }

  ngOnInit(): void {
  }

}
