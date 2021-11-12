import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { WebsitesComponent } from "./websites/websites.component";
import { ReceptionComponent } from "./websites/reception/reception.component";
import { AdministrationComponent } from "./websites/administration/administration.component";
import { ManagementComponent } from "./websites/management/management.component";
import { CallcenterComponent } from "./websites/callcenter/callcenter.component";
import { ItComponent } from "./websites/it/it.component";

const routes: Routes = [
  { 
    path: '', 
    component: WelcomeComponent 
  },
  { 
    path: 'websites', 
    component: WebsitesComponent,
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
      }
    ], 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
