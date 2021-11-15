import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-idle-screen',
  templateUrl: './idle-screen.component.html',
  styleUrls: ['./idle-screen.component.css']
})
export class IdleScreenComponent implements OnInit {
  time = new Date();

  constructor() { }

  ngOnInit(): void {
    this.setIdleTimeout(5000, function() {
      $('.inactive-modal').modal('show');
  }, function() {
      $('.inactive-modal').modal('hide');
  });
  
  window.setInterval( () => {
    this.time = new Date()
  }, 1000);
  }
  
 setIdleTimeout(millis: any, onIdle: any, onUnidle: any) {
    var timeout: any = 0;
    startTimer();

    function startTimer() {
        timeout = setTimeout(onExpires, millis);
        document.addEventListener("mousemove", onActivity);
        document.addEventListener("keypress", onActivity);
    }
    
    function onExpires() {
        timeout = 0;
        onIdle();
    }

    function onActivity() {
        if (timeout) clearTimeout(timeout);
        else onUnidle();
        //since the mouse is moving, we turn off our event hooks for 1 second
        document.removeEventListener("mousemove", onActivity);
        document.removeEventListener("keypress", onActivity);
        setTimeout(startTimer, 1000);
    }
}

}
