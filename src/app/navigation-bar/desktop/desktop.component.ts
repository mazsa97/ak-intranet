import { Component, OnInit } from '@angular/core';
import { NAVIGATIONS } from "../navigations";

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
  navigations = NAVIGATIONS;

  constructor() { }

  ngOnInit(): void { }

}
