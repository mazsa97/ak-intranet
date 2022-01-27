import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.css']
})
export class TopButtonComponent implements OnInit {
  // Hostlistener for scrolling event
  @HostListener('window:scroll', ['$event.target'])
  /* If the user scrolled down a 100 pixels the button will be shown in the bottom right corner, 
  otherwise it will be hidden */
  scroll(e: any) {
    let scroll = e.scrollingElement.scrollTop;
    if (scroll >= 100) {  // >= 100px
      $('#btn-back-to-top').fadeIn();
    } else {
      $('#btn-back-to-top').fadeOut();
    }
  }

  constructor() { }

  ngOnInit(): void { }

  // Function to scroll back to the top of page
  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
