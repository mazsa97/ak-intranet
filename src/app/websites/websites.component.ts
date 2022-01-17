import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LINKS, CATEGORIES } from "./website_links";

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
  searchFilter: any = '';
  filterTitle: any = '';

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void { }
  
  // Filter links if they contains the category
  filterLinksByCategory(category: any) {
    this.filteredLinks = this.links.filter((link: any) => {
      this.filterTitle = category.name;
      return link.category.includes(category.id);
    })
  }
  
  // Reset filter back to default (all links)
  reset() {
    this.filteredLinks = this.links;
    this.filterTitle = '';
  }
  
  // Function for the input clear btn
  clearInput() {
    this.searchFilter = '';
  }
}



