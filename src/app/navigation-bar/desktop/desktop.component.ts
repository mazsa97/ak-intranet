import { Component, OnInit } from '@angular/core';
import { NAVIGATIONS } from "../navigations";

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
  logoTitle: string = 'Aranyklinika intranet';
  logoPath: string = 'assets/images/AK_logo_menu.png';
  logoAlt: string = 'AK-logo';
  tooltipHelper: string = 'Súgó';
  navigations = NAVIGATIONS;

  constructor() { }

  ngOnInit(): void { }

}
