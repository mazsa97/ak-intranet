import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { WebsitesComponent } from "./websites/websites.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { TelephoneExtensionsComponent } from "./telephone-extensions/telephone-extensions.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { ServerStatusComponent } from "./server-status/server-status.component";

// Registered routes of the application
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    data: {
      title: "Főoldal"
    }
  },
  {
    path: 'extensions',
    component: TelephoneExtensionsComponent,
    data: {
      title: "Telefonos mellékek"
    }
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: {
      title: "Naptár"
    }
  },
  {
    path: 'websites',
    component: WebsitesComponent,
    data: {
      title: "Hasznos weboldal linkek"
    },
  },
  {
    path: 'status',
    component: ServerStatusComponent,
    data: {
      title: "Szerver státuszok"
    }
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '404',
    component: NotFoundComponent,
    data: {
      title: "404"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
