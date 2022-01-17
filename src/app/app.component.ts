import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { filter, map } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Aranyklinika - Intranet';

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Dynamic page titles based on their routes and its title values
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child?.snapshot.data['title']) {
            return child?.snapshot.data['title'];
          }
          return appTitle;
        })
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl + " ‹ " + this.title);
      });
  }
  
}

  // Bootstrap tooltip function
  $(function() {
    $('[data-bs-toggle="tooltip"]').tooltip();
  })

  // Hide tooltip after clicking on it, preventing tooltip staying active on the screen
  $(document).ready(function() {
    $('[data-bs-toggle="tooltip"]').click(function() {
      $('[data-bs-toggle="tooltip"]').tooltip("hide");
    });
  });
