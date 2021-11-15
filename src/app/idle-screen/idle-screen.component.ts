import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-idle-screen',
  templateUrl: './idle-screen.component.html',
  styleUrls: ['./idle-screen.component.css']
})
export class IdleScreenComponent implements OnInit {
  time = new Date();
  // 2 minutes in milliseconds
  idleTime: any = 120000;

  constructor() { }

  ngOnInit(): void {
    this.setIdleTimeout(this.idleTime, function() {
      // Show modal on inactivity
      $('.inactive-modal').modal('show');
  }, function() {
    // Hide modal on activity
      $('.inactive-modal').modal('hide');
  });
  
  // Interval for timer
  window.setInterval( () => {
    this.time = new Date()
  }, 1000);
  }
  
 setIdleTimeout(millis: any, onIdle: any, onUnidle: any) {
    // Variable for how long is the user inactive
    var timeout: any = 0;
    // Start the timer
    startTimer();

    // Function for idle timer
    function startTimer() {
        timeout = setTimeout(onExpires, millis);
        document.addEventListener("mousemove", onActivity);
        document.addEventListener("keypress", onActivity);
        document.addEventListener("click", onActivity);
    }
    
    // Reset the timer
    function onExpires() {
        timeout = 0;
        onIdle();
    }

    // Function on activities
    function onActivity() {
        if (timeout) clearTimeout(timeout);
        else onUnidle();
        document.removeEventListener("mousemove", onActivity);
        document.removeEventListener("keypress", onActivity);
        document.addEventListener("click", onActivity);
        setTimeout(startTimer, 1000);
    }
}

}
