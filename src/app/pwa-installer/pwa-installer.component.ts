import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwa-installer',
  templateUrl: './pwa-installer.component.html',
  styleUrls: ['./pwa-installer.component.css']
})
export class PwaInstallerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let promptEvent: any;
    let installButton: any = document.querySelector('#pwa-button');

    /* If the user presses the button, and the app wasnt installed before, 
    the installer prompt will be displayed on the screen. */
    window.addEventListener('beforeinstallprompt', (event) => {
      promptEvent = event;
    });
    installButton.addEventListener('click', () => {
      if (promptEvent) {
        promptEvent.prompt();
        promptEvent.userChoice.then((result: any) => {
          // log result according to the users choice.
          if (result.outcome === 'accepted') {
            console.log('PWA installer accepted.');
          } else {
            console.log('PWA installer declined.');
          }
          promptEvent = undefined;
        });
      }
    });
  }

}
