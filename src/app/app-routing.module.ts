import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { WebsitesComponent } from "./websites/websites.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'websites', component: WebsitesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
