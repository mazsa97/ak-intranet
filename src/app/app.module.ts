import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WebsitesComponent } from './websites/websites.component';
import { ReceptionComponent } from './websites/reception/reception.component';
import { AdministrationComponent } from './websites/administration/administration.component';
import { ManagementComponent } from './websites/management/management.component';
import { CallcenterComponent } from './websites/callcenter/callcenter.component';
import { ItComponent } from './websites/it/it.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopButtonComponent } from './top-button/top-button.component';
import { IdleScreenComponent } from './idle-screen/idle-screen.component';
import { TelephoneExtensionsComponent } from './telephone-extensions/telephone-extensions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    WelcomeComponent,
    WebsitesComponent,
    ReceptionComponent,
    AdministrationComponent,
    ManagementComponent,
    CallcenterComponent,
    ItComponent,
    NotFoundComponent,
    TopButtonComponent,
    IdleScreenComponent,
    TelephoneExtensionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
