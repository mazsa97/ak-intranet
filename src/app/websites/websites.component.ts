import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LINKS } from "./website_links";
declare var $ :any;

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {
  
  links = LINKS;
  thumbnailPath = '../../assets/images/thumbnails/';

  constructor(public router: Router) {
    router.events.subscribe((val) =>
      this.checkFilter()
    );
  }

  ngOnInit(): void { }
  
  // Hide "All" filter button when no filter is selected
  checkFilter() {
    if (this.router.url == "/websites") {
      $('.all-filter').hide();
    } else {
      $('.all-filter').show();
    }
  }

}
