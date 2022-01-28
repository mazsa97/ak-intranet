import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  contentTitle: string = 'A keresett oldal nem található!';
  contentHelper: string = 'Ellenőrizze, hogy helyesen adta-e meg a címet, vagy használja valamelyik elérhető menüpontunkat.';

  constructor() { }

  ngOnInit(): void { }

}
