import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LINKS } from "./website_links";

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {
  
  links = LINKS;
  thumbnailPath = '../../assets/images/thumbnails/';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
