import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  logoPath: string = 'assets/images/AK_logo.png';
  welcomeTitle: string = 'Üdvözöljük az Aranyklinika Intranet oldalán!';
  welcomeHelper: string = 'Válasszon az elérhető menüpontok valamelyikéből.';

  constructor() { }

  ngOnInit(): void { }

}
