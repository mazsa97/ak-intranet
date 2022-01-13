import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WebsitesComponent } from './websites/websites.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopButtonComponent } from './top-button/top-button.component';
import { IdleScreenComponent } from './idle-screen/idle-screen.component';
import { TelephoneExtensionsComponent } from './telephone-extensions/telephone-extensions.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarComponent } from './calendar/calendar.component';
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { DesktopComponent } from './navigation-bar/desktop/desktop.component';
import { MobileComponent } from './navigation-bar/mobile/mobile.component';
import { HelperComponent } from './navigation-bar/helper/helper.component';

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
    HelperComponent
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
