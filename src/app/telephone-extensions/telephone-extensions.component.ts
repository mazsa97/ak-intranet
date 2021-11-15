import { Component, OnInit } from '@angular/core';
import { EXTENSIONS } from "./extensions";

@Component({
  selector: 'app-telephone-extensions',
  templateUrl: './telephone-extensions.component.html',
  styleUrls: ['./telephone-extensions.component.css']
})
export class TelephoneExtensionsComponent implements OnInit {
  
  extensions = EXTENSIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
