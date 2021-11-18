import { Component, OnInit } from '@angular/core';
import { LINKS } from "../website_links";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  
  links = LINKS;

  constructor() { }

  ngOnInit(): void { }
}
