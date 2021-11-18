import { Component, OnInit } from '@angular/core';
import { LINKS } from "../website_links";

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ItComponent implements OnInit {
  
  links = LINKS;
  thumbnailPath = 'assets/images/thumbnails/';

  constructor() { }

  ngOnInit(): void { }
}
