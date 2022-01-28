import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {
  contentHeader: string = 'Szerver státusz';
  contentHelper: string = 'Előfordulhat, hogy az oldal nem elérhető.';
  contentRefresh: string = 'Frissítés';

  constructor() { }

  ngOnInit(): void { }
  
  // Refresh page, so the iframe refresh too
  pageRefresh() {
    location.reload();
  }

}
