import { Component, OnInit } from '@angular/core';
import { LINKS } from "../website_links";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  
  links = LINKS;

  constructor() { }

  ngOnInit(): void { }
}
