import { Component, OnInit } from '@angular/core';
import { LINKS } from "../website_links";

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {
  
  links = LINKS;
  thumbnailPath = 'assets/images/thumbnails/';

  constructor() { }

  ngOnInit(): void {
  }

}
