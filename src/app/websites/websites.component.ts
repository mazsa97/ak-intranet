import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LINKS, CATEGORIES } from "./website_links";
declare var $ :any;

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {
  links: any = LINKS;
  categories: any = CATEGORIES;
  currentUrl: string = '/websites';
  filteredLinks: any = this.links;
  filterTitle: string = '';

  constructor(public router: Router) {
    // Check on router change if the "all filter" should be visible or not
    // router.events.subscribe((val) =>
    //   this.checkFilter()
    // );
  }

  ngOnInit(): void { }
  
  // Hide "All" filter button when no filter is selected
  // checkFilter() {
  //   if (this.router.url == "/websites") {
  //     $('.all-filter').hide();
  //   } else {
  //     $('.all-filter').show();
  //   }
  // }
  
  filterLinksByCategory(category: any) {
    this.filteredLinks = this.links.filter((link: any) => {
      return link.category.includes(category.id);
    })
  }
  
  reset() {
    this.filteredLinks = this.links;
  }
  
}



