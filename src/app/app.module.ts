import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from './calendar/calendar.component';
import { DesktopComponent } from './navigation-bar/desktop/desktop.component';
import { FormsModule } from "@angular/forms";
import { FullCalendarModule } from '@fullcalendar/angular';
import { HelperComponent } from './navigation-bar/helper/helper.component';
import { IdleScreenComponent } from './idle-screen/idle-screen.component';
import { MobileComponent } from './navigation-bar/mobile/mobile.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TelephoneExtensionsComponent } from './telephone-extensions/telephone-extensions.component';
import { TopButtonComponent } from './top-button/top-button.component';
import { WebsitesComponent } from './websites/websites.component';
import { WelcomeComponent } from './welcome/welcome.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import { environment } from '../environments/environment';

// Register FullCalendar plugins
FullCalendarModule.registerPlugins([
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    WelcomeComponent,
    WebsitesComponent,
    NotFoundComponent,
    TopButtonComponent,
    IdleScreenComponent,
    TelephoneExtensionsComponent,
    CalendarComponent,
    DesktopComponent,
    MobileComponent,
    HelperComponent,
    ServerStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FullCalendarModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
