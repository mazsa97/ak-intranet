import { Component, OnInit } from '@angular/core';
import { HELPERS } from "./helpers";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {
  time = new Date();
  appVersion = environment.appVersion;
  helpers = HELPERS;

  constructor() { }

  ngOnInit(): void { }

}
