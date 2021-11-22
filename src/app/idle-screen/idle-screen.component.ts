import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-idle-screen',
  templateUrl: './idle-screen.component.html',
  styleUrls: ['./idle-screen.component.css']
})
export class IdleScreenComponent implements OnInit {
  
  time = new Date();
  idleTime: any = 300000; // 5 minutes in milliseconds
  
  constructor() {
    this.setIdleTimeout(this.idleTime, function() {
      $('.inactive-modal').modal('show'); // Show modal on inactivity
    }, function() {
      $('.inactive-modal').modal('hide'); // Hide modal on activity
      });
   }

  ngOnInit(): void {
    // Set interval for the idle modal clock
    window.setInterval( () => {
      this.time = new Date()
    }, 1000);
  }
  
 setIdleTimeout(millis: any, onIdle: any, onUnidle: any) {
    // Variable for how long is the user inactive
    let timeout: any = 0;
    
    // Start the timer
    startTimer();

    // Function for idle timer
    function startTimer() {
        timeout = setTimeout(onExpires, millis);
        // Events to listen to
        document.addEventListener("mousemove", onActivity);
        document.addEventListener("keypress", onActivity);
        document.addEventListener("click", onActivity);
        document.addEventListener("focus", onActivity);
        document.addEventListener("scroll", onActivity);
    }

    // Reset the timer
    function onExpires() {
        timeout = 0;
        onIdle();
    }

    // Function on activity
    function onActivity() {
        if (timeout) clearTimeout(timeout);
        else onUnidle();
        // Events to listen to
        document.removeEventListener("mousemove", onActivity);
        document.removeEventListener("keypress", onActivity);
        document.addEventListener("click", onActivity);
        document.addEventListener("focus", onActivity);
        document.addEventListener("scroll", onActivity);
        setTimeout(startTimer, 1000);
    }
  }
}
