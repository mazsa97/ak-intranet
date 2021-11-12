import { Component, OnInit } from '@angular/core';
import { LINKS } from "../website_links";

@Component({
  selector: 'app-callcenter',
  templateUrl: './callcenter.component.html',
  styleUrls: ['./callcenter.component.css']
})
export class CallcenterComponent implements OnInit {
  
  links = LINKS;
  thumbnailPath = '../../../assets/images/thumbnails/';

  constructor() { }

  ngOnInit(): void {
  }

}
