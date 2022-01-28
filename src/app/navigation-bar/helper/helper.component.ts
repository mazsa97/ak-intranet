import { Component, OnInit } from '@angular/core';
import { HELPERS } from "./helpers";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  contentHeader: string = 'Intranet súgó';
  contentCopyright: string = "© Copyright 2014-" + this.currentYear + " - Aranyklinika, Szeged";
  appVersion = 'Verzió: ' + environment.appVersion;
  helpers = HELPERS;

  constructor() { }

  ngOnInit(): void { }

}
