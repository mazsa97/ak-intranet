import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { WebsitesComponent } from "./websites/websites.component";
import { ReceptionComponent } from "./websites/reception/reception.component";
import { AdministrationComponent } from "./websites/administration/administration.component";
import { ManagementComponent } from "./websites/management/management.component";
import { CallcenterComponent } from "./websites/callcenter/callcenter.component";
import { ItComponent } from "./websites/it/it.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { TelephoneExtensionsComponent } from "./telephone-extensions/telephone-extensions.component";
import { CalendarComponent } from "./calendar/calendar.component";

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    data: {
      title: "Főoldal"
    }
  },
  {
    path: 'telephone',
    component: TelephoneExtensionsComponent,
    data: {
      title: "Mellékek"
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
      title: "Linkek"
    },
    children: [
      {
        path: 'reception',
        component: ReceptionComponent,
      },
      {
        path: 'administration',
        component: AdministrationComponent,
      },
      {
        path: 'management',
        component: ManagementComponent,
      },
      {
        path: 'callcenter',
        component: CallcenterComponent,
      },
      {
        path: 'it',
        component: ItComponent,
      },
    ],
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
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
