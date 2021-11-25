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

  constructor(public router: Router) { }

  ngOnInit(): void { }

  // Filter links if they contains the category
  filterLinksByCategory(category: any) {
    this.filteredLinks = this.links.filter((link: any) => {
      return link.category.includes(category.id);
    })
  }
  
  // Reset filter back to default (all links)
  reset() {
    this.filteredLinks = this.links;
  }
  
  // TODO: Search input for filtering links
  
}



